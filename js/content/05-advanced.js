/* ==========================================================================
   Module 5 — Advanced Jira
   ========================================================================== */
(window.JIRA_COACH_CONTENT = window.JIRA_COACH_CONTENT || []).push({
  id: 'm5',
  title: 'Advanced Jira', title_el: 'Προχωρημένο Jira',
  tagline: 'Automation, permissions, notifications, and scale.',
  description: 'Go beyond basics: automate work safely, control access, design notifications, and manage Jira at team and org scale.',
  lessons: [
    { id:'automation-basics', title:'Automation rules', level:'intermediate', minutes:12, summary:'Use Jira automation to remove repetitive work while avoiding loops and surprises.', tags:['automation','rules'],
      sections:[
        {t:'p',cls:'lead',text:'Automation rules follow **trigger → conditions → actions**. They save time when they are simple, visible, and owned.'},
        {t:'code',lang:'text',title:'Automation rule example',code:`Trigger: Issue transitioned to Done
Condition: Issue type is Bug
Action: Comment "Bug resolved. Please verify in next release."
Action: Send Slack message to #qa-alerts`},
        {t:'table',head:['Part','Purpose','Example'],rows:[
          ['Trigger','What starts the rule','Issue created, field changed, scheduled'],
          ['Condition','When rule should continue','If issue type = Bug'],
          ['Action','What Jira does','Edit issue, comment, transition, send web request']
        ]},
        {t:'callout',tone:'danger',title:'Avoid automation loops',text:'A rule that transitions an issue can trigger another rule that transitions it back. Use specific conditions, audit logs, and naming/ownership.'}
      ],
      keyPoints:[
        {front:'What are the three core parts of a Jira automation rule?',back:'Trigger, conditions, and actions.'},
        {front:'What is an automation loop?',back:'When automation rules trigger each other repeatedly, causing repeated/unintended changes.'},
        {front:'What makes automation maintainable?',back:'Clear naming, owner, documented purpose, narrow conditions, and audit/log review.'}
      ],
      quiz:[
        {q:'Which part determines when an automation rule starts?',options:['Trigger','Condition','Action','Dashboard'],answer:0,why:'Triggers start automation rules.'},
        {q:'A rule that keeps re-triggering itself is called?',options:['Automation loop','Sprint','JQL filter','Epic'],answer:0,why:'Loops happen when rules trigger each other or themselves.'},
        {q:'Good automation should be?',options:['Narrow, documented, and owned','Hidden and complex','Applied to every project by default','Without conditions'],answer:0,why:'Maintainability and safety matter.'}
      ]
    },
    { id:'permissions-basics', title:'Permissions and access', level:'intermediate', minutes:11, summary:'Control who can browse, create, edit, transition, and administer work.', tags:['permissions','security'],
      sections:[
        {t:'p',cls:'lead',text:'Jira permissions answer: who can see or do what? Use groups/roles and schemes consistently; avoid granting permissions to individuals ad hoc.'},
        {t:'table',head:['Concept','Purpose','Example'],rows:[
          ['Permission scheme','Project permissions set','Browse Projects, Create Issues'],
          ['Project role','Role mapped to users/groups','Administrators, Developers'],
          ['Issue security level','Restrict specific issues','HR-only issue visibility'],
          ['Global permission','Site-wide capability','Administer Jira']
        ]},
        {t:'callout',tone:'warn',title:'Least privilege',text:'Give users the minimum access they need. Overly broad admin permissions create accidental configuration damage.'}
      ],
      keyPoints:[
        {front:'What is a permission scheme?',back:'A set of permissions applied to projects that determines who can perform project actions.'},
        {front:'What is issue security level used for?',back:'Restricting visibility of specific issues within a project to certain users/groups/roles.'},
        {front:'What is the least privilege principle?',back:'Grant only the access required to perform needed tasks, reducing risk and accidental changes.'}
      ],
      quiz:[
        {q:'Which feature restricts visibility of specific issues?',options:['Issue security level','Sprint goal','Label','Quick filter'],answer:0,why:'Issue security levels control issue visibility.'},
        {q:'Best practice for granting permissions is?',options:['Use groups/roles and least privilege','Grant everyone admin','Assign permissions per issue manually','Avoid schemes'],answer:0,why:'Role/group-based least privilege is maintainable and safer.'},
        {q:'A permission scheme is applied to?',options:['Projects','Individual comments','Dashboards only','Attachments'],answer:0,why:'Permission schemes define project permissions.'}
      ]
    },
    { id:'notifications-integrations', title:'Notifications, integrations, and apps', level:'intermediate', minutes:10, summary:'Send the right signals to the right people and systems.', tags:['notifications','integrations'],
      sections:[
        {t:'p',cls:'lead',text:'Notifications keep people informed, but too many create noise. Integrations connect Jira to Slack, Git, CI/CD, docs, and service tools.'},
        {t:'list',items:['Use notification schemes thoughtfully; avoid emailing everyone on every change.','Integrate commits/PRs/deployments for traceability.','Use automation/webhooks for system-to-system updates.','Evaluate apps for security, maintenance, and ownership before installing.']},
        {t:'callout',tone:'tip',title:'Signal over noise',text:'If users ignore Jira emails, the notification design has failed. Notify on actionable events.'}
      ],
      keyPoints:[
        {front:'What is the risk of excessive notifications?',back:'Users ignore them, missing important updates and losing trust in the system.'},
        {front:'Why integrate Jira with dev tools?',back:'To provide traceability from issue to code, pull request, build, and deployment.'},
        {front:'What should you evaluate before installing a Jira app?',back:'Security, maintenance, cost, ownership, and whether native Jira features already solve the need.'}
      ],
      quiz:[
        {q:'What is a good notification principle?',options:['Notify on actionable events','Email everyone for every comment','Disable all notifications','Only notify admins'],answer:0,why:'Actionable signals are more effective than noise.'},
        {q:'Why connect Jira to Git/CI?',options:['For traceability across delivery lifecycle','To replace issue types','To remove workflows','To disable boards'],answer:0,why:'Integrations link work items to development and deployment artifacts.'},
        {q:'Before installing an app, check?',options:['Security/maintenance/need','Only icon color','Whether it has animations','Nothing'],answer:0,why:'Apps have cost and operational impact.'}
      ]
    },
    { id:'admin-at-scale', title:'Admin at scale and governance', level:'advanced', minutes:11, summary:'Keep Jira healthy as teams, projects, and customizations grow.', tags:['admin','governance','scale'],
      sections:[
        {t:'p',cls:'lead',text:'Jira at scale is a governance problem. Without owners and conventions, every team creates its own fields, statuses, and workflows.'},
        {t:'list',checked:true,items:['Name and document schemes, custom fields, and automation rules.','Assign owners for fields, workflows, and apps.','Archive unused projects and fields where possible.','Use templates for common project types.','Review permission and notification schemes periodically.']},
        {t:'code',lang:'text',title:'Governance checklist',code:`Owner: Who maintains this configuration?
Purpose: What decision/process does it support?
Scope: Which projects/teams use it?
Change: How is it reviewed and rolled out?
Retire: When should it be removed?`},
        {t:'callout',tone:'why',title:'Governance enables speed',text:'Good governance is not bureaucracy. It prevents cleanup projects that slow everyone down later.'}
      ],
      keyPoints:[
        {front:'Why is governance important in Jira?',back:'It prevents configuration sprawl, inconsistency, and maintenance burden as teams and projects grow.'},
        {front:'What should every custom field or automation rule have?',back:'A clear owner, purpose, and scope.'},
        {front:'What is a sign Jira needs governance?',back:'Duplicate fields/statuses, unclear workflows, unused projects, and inconsistent reporting across teams.'}
      ],
      quiz:[
        {q:'What helps prevent Jira configuration sprawl?',options:['Ownership, conventions, and periodic review','Letting everyone create anything','Avoiding documentation','Never archiving projects'],answer:0,why:'Governance controls growth and complexity.'},
        {q:'A custom field should have?',options:['Owner and purpose','No name','Multiple duplicate copies','Random permissions'],answer:0,why:'Ownership and purpose support maintainability.'},
        {q:'Governance is valuable because it?',options:['Prevents future cleanup and confusion','Eliminates all change','Replaces teams','Makes Jira optional'],answer:0,why:'It keeps systems usable as they scale.'}
      ]
    }
  ]
});