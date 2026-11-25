/* ==========================================================================
   Jira Coach - code utilities
   A small text/JQL highlighter, a Jira setup generator, and a heuristic linter.
   ========================================================================== */
(function () {
  'use strict';
  var RC = (window.RC = window.RC || {});
  var blocks = {};
  var seq = 0;

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  var KW = {};
  ('AND OR NOT IN NOTIN ORDER BY ASC DESC EMPTY NULL WAS CHANGED AFTER BEFORE DURING ON FROM TO project status assignee reporter issuetype priority resolution created updated due component labels fixVersion sprint epic currentUser now startOfDay endOfDay startOfWeek endOfWeek startOfMonth endOfMonth membersOf openSprints closedSprints').split(/\s+/).forEach(function(k){ if(k) KW[k.toUpperCase()]=1; });
  function span(cls, text) { return '<span class="tok-' + cls + '">' + esc(text) + '</span>'; }
  function highlightJira(src) {
    var out='', i=0, n=src.length;
    while (i<n) {
      var ch=src[i];
      if (ch === '"' || ch === "'") {
        var q=ch, j=i+1;
        while(j<n){ if(src[j]==='\\'){j+=2;continue;} if(src[j]===q){j++;break;} j++; }
        out += span('str', src.slice(i,j)); i=j; continue;
      }
      if (/[0-9]/.test(ch) && !/[A-Za-z0-9_]/.test(src[i-1]||'')) { var m=src.slice(i).match(/^[0-9][0-9.\-:]*/); if(m){ out+=span('num',m[0]); i+=m[0].length; continue; } }
      if (/[A-Za-z_]/.test(ch)) {
        var w=src.slice(i).match(/^[A-Za-z_][A-Za-z0-9_]*/)[0]; var up=w.toUpperCase(); var rest=src.slice(i+w.length);
        if (KW[up] || KW[w]) out+=span('kw',w);
        else if (/^[A-Z][A-Z0-9]+-\d+$/.test(w)) out+=span('type',w);
        else if (/^\s*\(/.test(rest)) out+=span('fn',w);
        else out+=esc(w);
        i+=w.length; continue;
      }
      if (/[=!<>~]/.test(ch)){ var op=src.slice(i).match(/^[=!<>~]+/)[0]; out+=span('op',op); i+=op.length; continue; }
      out+=esc(ch); i++;
    }
    return out;
  }
  function highlight(src, lang) { if (!src) return ''; lang=String(lang||'text').toLowerCase(); if (lang==='text'||lang==='bash'||lang==='console') return esc(src); return highlightJira(src); }
  function codeBlock(opts) {
    opts=opts||{}; var id='cb'+(++seq); var lang=opts.lang||'text'; blocks[id]=opts.code||'';
    var title = opts.title ? '<span class="code-title">' + esc(opts.title) + '</span>' : '';
    return '<div class="code-card"><div class="code-head"><span class="code-lang">' + esc(lang) + '</span>' + title + '<button class="copy-btn" type="button" data-copy="' + id + '">Copy</button></div><div class="code-scroll"><pre class="code" id="' + id + '"><code>' + highlight(opts.code, lang) + '</code></pre></div></div>';
  }

  function cleanBase(input, fallback) { var s=String(input||'').trim().replace(/[^A-Za-z0-9 ]/g,'').replace(/\s+/g,' ').trim(); if(!s) s=fallback||'Team Project'; return s.charAt(0).toUpperCase()+s.slice(1); }
  function keyFrom(name) { var s=String(name||'TEAM').replace(/[^A-Za-z0-9]/g,'').toUpperCase().replace(/[AEIOU]/g,''); if(s.length<2) s=String(name||'TEAM').replace(/[^A-Za-z0-9]/g,'').toUpperCase(); return s.slice(0,4)||'TEAM'; }
  function parseList(text, fallback) { var lines=String(text||'').split(/\r?\n/).map(function(l){return l.trim();}).filter(Boolean); if(!lines.length) return fallback.slice(); return lines.map(function(l){return l.replace(/^[-*]\s*/,'').trim();}).filter(Boolean); }

  function generate(opts) {
    opts=opts||{};
    var base=cleanBase(opts.entity||opts.project||'Team Project','Team Project');
    var key=keyFrom(opts.table||opts.key||base);
    var mode=opts.mode==='kanban'?'kanban':'scrum';
    var issueTypes=parseList(opts.fields,['Story','Bug','Task']);
    var child=!!opts.child; var hasAutomation=opts.action!==false; var hasValidation=opts.validation!==false; var hasUi=opts.ui!==false; var hasWorkflow=opts.draft!==false;
    var artifacts=[];
    artifacts.push({title:'Project setup checklist',lang:'text',code:`Project: ${base}
Key: ${key}
Board: ${mode==='scrum'?'Scrum':'Kanban'}
Issue types: ${issueTypes.join(', ')}${child?', Subtask':''}

Checklist:
- Create project ${key}
- Configure issue types, fields, and screens
- Create workflow and board column mapping
- Add board filter, quick filters, dashboard
- Configure permissions/notifications
- Add automation with owner and audit review`});
    if (hasWorkflow) artifacts.push({title:'Workflow',lang:'text',code:`Statuses: To Do -> In Progress -> In Review -> Done${child?' (+ Blocked)':''}
Transitions:
- Start Progress: To Do -> In Progress
- Submit for Review: In Progress -> In Review
- Request Changes: In Review -> In Progress
- Complete: In Review -> Done${hasValidation?' (Validator: Resolution required)':''}
Post function: On Complete set Resolution = Done`});
    artifacts.push({title:'Board filter / JQL',lang:'jql',code:`project = ${key} AND issuetype in (${issueTypes.map(function(t){return '"'+t+'"';}).join(', ')}) ORDER BY Rank ASC

My open issues: assignee = currentUser() AND resolution = Unresolved AND project = ${key}
Bugs: project = ${key} AND issuetype = Bug AND resolution = Unresolved
Due soon: project = ${key} AND due <= endOfWeek() AND resolution = Unresolved`});
    if (hasUi) artifacts.push({title:'Dashboard',lang:'text',code:`Dashboard: ${base} overview
- Filter Results: My open issues
- Created vs Resolved: project = ${key}
- Pie Chart: Status
- ${mode==='scrum'?'Sprint Burndown':'Cumulative Flow Diagram'}`});
    if (hasAutomation) artifacts.push({title:'Automation rules',lang:'text',code:`Rule: Bug triage
Trigger: Issue created
Condition: project = ${key} AND issuetype = Bug
Action: Add comment "Triage: confirm severity and reproduction."
Action: Assign to project lead (optional)

Rule: Stale review reminder
Trigger: Scheduled weekdays 9:00
Condition: project = ${key} AND status = "In Review" AND updated <= -2d
Action: Comment "Review is stale; please review or request changes."`});
    artifacts.push({title:'Permissions & notifications',lang:'text',code:`Permissions:
- Developers role: Browse, Create, Edit, Transition
- Administrators role: Administer project
- Use issue security only when confidentiality requires it

Notifications:
- Notify assignee/reporter/watchers on actionable events
- Avoid notify-everyone rules
- Use Slack/Teams for urgent automation alerts`});
    return {
      base:key, table:key.toLowerCase(), names:{zi:key, zc:base, bimp:mode.toUpperCase(), svc:key+' Board', childZi:child?key+'-SUB':''}, childBase:child?'Subtask':'',
      artifacts:artifacts,
      notes:[
        'Create project and issue types before board filters and automation.',
        'Map workflow statuses to board columns; check unmapped statuses.',
        'Keep create screens short; require only decision-critical fields.',
        hasAutomation ? 'Name automation rules with owner and review audit logs for loops.' : 'Add automation after the manual process is clear.',
        'Test with a sample issue and non-admin user before rollout.'
      ]
    };
  }

  function lint(src) {
    var text=String(src||''); var low=text.toLowerCase(); var results=[]; function add(level,msg){results.push({level:level,text:msg});}
    var hasJql=/\b(project|status|assignee|issuetype|resolution|order by|currentuser\(|startof|endof)\b/i.test(text);
    var hasWorkflow=/\b(status|transition|validator|condition|post function|done|to do|in progress)\b/i.test(text);
    var hasAutomation=/\b(trigger|condition|action|automation|rule|schedule|webhook)\b/i.test(text);
    if (hasJql) {
      if (/status\s*=\s*in progress\b/i.test(text)) add('warn','JQL status with spaces should be quoted: `status = "In Progress"`.');
      if (/currentUser\b/.test(text) && !/currentUser\(\)/.test(text)) add('bad','`currentUser` is a function in JQL; use `currentUser()`.');
      if (/\border by\b/i.test(text) && !/\border by\s+[A-Za-z"]/i.test(text)) add('bad','`ORDER BY` has no field.');
      if (!/project\s*=/.test(text)) add('info','Consider scoping JQL with `project = KEY` to avoid unexpected matches.');
    }
    if (hasWorkflow) {
      if (!/\bdone\b/i.test(text)) add('warn','Workflow has no explicit Done status.');
      if (/\bdone\b/i.test(text) && !/resolution/i.test(text)) add('info','Consider setting Resolution when transitioning to Done.');
      if (!/transition/i.test(text)) add('info','No transitions mentioned; statuses alone do not define movement.');
    }
    if (hasAutomation) {
      if (/trigger/i.test(text) && /action/i.test(text) && !/condition/i.test(text)) add('warn','Automation rule has trigger/action but no condition; it may run too broadly.');
      if (/issue transitioned|transitioned/i.test(text) && /transition issue|edit issue/i.test(text)) add('info','Transition-triggered automation that changes issues can loop; check conditions and audit logs.');
    }
    if (!hasJql && !hasWorkflow && !hasAutomation) add('info','No Jira-specific structure detected. Paste JQL, workflow, automation, or permission notes.');
    if (!results.length) add('ok','No obvious heuristic issues found. Validate in Jira with a test issue and real permissions.');
    return results;
  }

  RC.code = { highlight: highlight, codeBlock: codeBlock, generate: generate, lint: lint, blocks: blocks, esc: esc };
})();
