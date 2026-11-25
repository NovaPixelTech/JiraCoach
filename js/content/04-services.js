/* ==========================================================================
   Module 4 - Boards & JQL
   ========================================================================== */
(window.JIRA_COACH_CONTENT = window.JIRA_COACH_CONTENT || []).push({
  id: 'm4',
  title: 'Boards & JQL', title_el: 'Boards & JQL',
  tagline: 'See, plan, and query work with boards, filters, and JQL.',
  description: 'Learn Scrum and Kanban boards, filters, JQL, dashboards, and reports so teams can find and manage work effectively.',
  lessons: [
    { id:'scrum-kanban', title:'Scrum vs Kanban boards', level:'beginner', minutes:10, summary:'Choose the board model that matches how the team delivers work.', summary_el: 'Choose the board model that matches how the ομάδα delivers work.', tags:['boards','scrum','kanban'],
      sections:[
        {t:'p',cls:'lead',text:'Jira boards visualize work. **Scrum** uses sprints and backlog planning; **Kanban** focuses on continuous flow and WIP limits.'},
        {t:'table',head:['Aspect','Scrum','Kanban'],rows:[
          ['Cadence','Fixed sprints','Continuous flow'],
          ['Planning','Sprint planning/backlog','Pull when capacity available'],
          ['Metrics','Velocity, burndown','Cycle time, throughput, CFD'],
          ['Best for','Iterative delivery with commitments','Service/support/continuous delivery']
        ]},
        {t:'callout',tone:'tip',title:'Pick by behavior, not trend',text:'If the team works in timeboxed iterations, use Scrum. If work arrives continuously and is pulled by capacity, use Kanban.', text_el: 'If the ομάδα works in timeboxed iterations, χρησιμοποίησε Scrum. If work arrives continuously and is pulled by capacity, χρησιμοποίησε Kanban.'}
      ],
      keyPoints:[
        {front:'When is Scrum a good fit?',back:'When a team plans work in fixed iterations/sprints and commits to sprint goals.', back_el: 'Πότε a ομάδα plans work in fixed iterations/sprints and commits to sprint goals.'},
        {front:'When is Kanban a good fit?', front_el: 'Πότε is Kanban a good fit?',back:'When work flows continuously and the team limits WIP and pulls work as capacity allows.', back_el: 'Πότε work flows continuously and the ομάδα limits WIP and pulls work as capacity allows.'},
        {front:'What is a common board selection mistake?', front_el: 'Τι είναι a common board selection λάθος?',back:'Choosing based on popularity rather than the team', back_el: 'Choosing based on popularity rather than the ομάδας actual delivery pattern.'}
      ],
      quiz:[
        {q:'Which board is best for continuous flow and WIP limits?',options:['Kanban','Scrum','Roadmap','Changelog'],answer:0,why:'Kanban emphasizes continuous flow and WIP control.'},
        {q:'Which metric is commonly associated with Scrum?',options:['Velocity','DNS latency','CPU load','SMTP queue'],answer:0,why:'Velocity is a common Scrum planning metric.'},
        {q:'Board choice should be based on?', q_el: 'Board choice πρέπει να be based on?',options:['Team delivery pattern','Board color','Number of users','License tier only'],answer:0,why:'Match the board to how work actually flows.'}
      ]
    },
    { id:'filters-jql-basics', title:'Filters and JQL basics', level:'beginner', minutes:12, summary:'Find issues reliably with filters and core JQL syntax.', tags:['jql','filters'],
      sections:[
        {t:'p',cls:'lead',text:'**JQL (Jira Query Language)** lets you search issues precisely. Saved filters power boards, dashboards, subscriptions, and automation.'},
        {t:'code',lang:'text',title:'Basic JQL examples',code:`project = JIRA AND status = "In Progress" ORDER BY priority DESC
assignee = currentUser() AND resolution = Unresolved
project = JIRA AND issuetype in (Bug, Story) AND created >= -7d`},
        {t:'table',head:['Clause','Purpose','Example'],rows:[
          ['project','Limit to project','project = "JIRA"'],
          ['status/issuetype/assignee','Filter key fields','status = Done'],
          ['ORDER BY','Sort results','ORDER BY created DESC'],
          ['AND/OR/NOT','Combine conditions','status != Done AND priority = High']
        ]},
        {t:'callout',tone:'warn',title:'Quote strings carefully',text:'Status/category names with spaces usually need quotes: `status = "In Progress"`. Use consistent project keys and field names.', text_el: 'Status/category names with spaces usually need quotes: `status = "In Progress"`. Χρησιμοποίησε consistent project keys and πεδίο names.'}
      ],
      keyPoints:[
        {front:'What is JQL?',back:'Jira Query Language, a query language for searching Jira issues using fields, operators, values, and functions.', back_el: 'Jira Query Language, a query language for searching Jira issues using πεδία, operators, values, and functions.'},
        {front:'Why save filters?',back:'Saved filters can be reused in boards, dashboards, subscriptions, and reports, ensuring consistent queries.', back_el: 'Saved filters μπορεί να be reused in boards, dashboards, subscriptions, and αναφορές, ensuring consistent queries.'},
        {front:'What does ORDER BY do in JQL?',back:'It sorts query results by one or more fields, ascending or descending.', back_el: 'It sorts query results by one or more πεδία, ascending or descending.'}
      ],
      quiz:[
        {q:'Which JQL finds unresolved issues assigned to you?',options:['assignee = currentUser() AND resolution = Unresolved','project = me','status = currentUser()','ORDER BY assignee'],answer:0,why:'currentUser() and Unresolved are standard JQL patterns.'},
        {q:'Why are saved filters useful?', q_el: 'Γιατί are saved filters useful?',options:['They can power boards and dashboards','They replace workflows','They create users','They change permissions'],answer:0,why:'Filters are reusable sources for views and reports.', why_el: 'Filters are reusable sources for views and αναφορές.'},
        {q:'Which operator sorts JQL results?',options:['ORDER BY','GROUP BY STATUS','SORT()','ALIGN'],answer:0,why:'ORDER BY controls sorting in JQL.'}
      ]
    },
    { id:'jql-advanced', title:'Advanced JQL patterns', level:'intermediate', minutes:11, summary:'Use functions, dates, and relational patterns for powerful searches.', summary_el: 'Χρησιμοποίησε functions, dates, and relational patterns for powerful searches.', tags:['jql','advanced'],
      sections:[
        {t:'p',cls:'lead',text:'Advanced JQL helps with triage, reporting, and automation triggers. Learn common functions before writing complex queries.', text_el: 'Advanced JQL helps with triage, reporting, and automation triggers. Learn common functions πριν writing complex queries.'},
        {t:'code',lang:'text',title:'Useful JQL patterns',code:`status changed to "Done" AFTER -7d
updated >= startOfWeek() AND assignee in membersOf("jira-devs")
priority = High AND resolution = Unresolved AND due < now()
"Epic Link" = JIRA-123 ORDER BY rank ASC`},
        {t:'table',head:['Function/pattern','Use','Example'],rows:[
          ['currentUser()','Issues for logged-in user','assignee = currentUser()'],
          ['startOfDay()/startOfWeek()','Time windows','created >= startOfWeek()'],
          ['membersOf()','Group-based queries','assignee in membersOf("team")'],
          ['status changed','History-based search','status changed AFTER -1d']
        ]},
        {t:'callout',tone:'tip',title:'Test before saving',text:'Run JQL in issue search and inspect a few results. A query that "works" can still be wrong if it matches unintended issues.', text_el: 'Run JQL in issue search and inspect a few results. A query that "works" μπορεί να still be wrong if it matches unintended issues.'}
      ],
      keyPoints:[
        {front:'What does currentUser() return in JQL?',back:'The currently logged-in user, useful for personal filters and dashboards.', back_el: 'The currently logged-in χρήστης, useful for personal filters and dashboards.'},
        {q:'Why test JQL results manually?', q_el: 'Γιατί test JQL results manually?',back:'Because syntactically valid queries can still match the wrong issues or miss edge cases.', back_el: 'Because syntactically valid queries μπορεί να still match the wrong issues or miss edge cases.'},
        {front:'What is a history-based JQL query?', front_el: 'Τι είναι a history-based JQL query?',back:'A query using changed/was operators/functions to search issue history, like status changes over time.'}
      ].map(x=>x.front?{front:x.front,back:x.back}:x),
      quiz:[
        {q:'Which JQL finds issues updated since start of week?',options:['updated >= startOfWeek()','updated = week()','startOfWeek(updated)','week(updated) > 0'],answer:0,why:'startOfWeek() is a standard JQL date function.'},
        {q:'A valid JQL query is always correct for your intent. True or false?',options:['False','True'],answer:0,why:'You must verify results match the intended scope.'},
        {q:'Which query targets members of a group?',options:['assignee in membersOf("jira-devs")','group = jira-devs','assignee = group()','membersOf(assignee)'],answer:0,why:'membersOf() checks group membership.'}
      ]
    },
    { id:'dashboards-reports', title:'Dashboards and reports', level:'beginner', minutes:10, summary:'Turn Jira data into useful visibility without vanity metrics.', tags:['dashboards','reports'],
      sections:[
        {t:'p',cls:'lead',text:'Dashboards and reports should answer team questions: What is blocked? What is due? What shipped? What is trending badly?', text_el: 'Dashboards and αναφορές πρέπει να answer ομάδα questions: Τι είναι blocked? Τι είναι due? What shipped? Τι είναι trending badly?'},
        {t:'table',head:['Tool','Good question','Caution'],rows:[
          ['Dashboard gadgets','What needs attention now?','Too many gadgets become noise'],
          ['Burndown/burnup','Are we on track this sprint?','Depends on good estimates/status updates'],
          ['Control chart/cycle time','How long does work take?','Needs consistent workflow states'],
          ['Created vs resolved','Are we keeping up?','Does not explain root causes']
        ]},
        {t:'callout',tone:'warn',title:'Metrics need clean inputs',text:'Reports are only as good as issue hygiene: statuses updated, dates meaningful, estimates/resolutions used consistently.'}
      ],
      keyPoints:[
        {front:'What makes a dashboard useful?',back:'It answers specific decisions or attention needs, not just displays many charts.'},
        {front:'Why do Jira reports depend on issue hygiene?', front_el: 'Γιατί do Jira αναφορές depend on issue hygiene?',back:'Inconsistent statuses, resolutions, estimates, or dates make metrics misleading.'},
        {front:'What does cycle time help you understand?', front_el: 'What does cycle time help you κατανόησε?',back:'How long work takes to move through process stages, revealing flow bottlenecks.'}
      ],
      quiz:[
        {q:'What is the main risk of vanity dashboards?', q_el: 'Τι είναι the main risk of vanity dashboards?',options:['They show data but do not support decisions','They delete issues','They break workflows','They remove permissions'],answer:0,why:'Dashboards should drive action and understanding.', why_el: 'Dashboards πρέπει να drive action and understanding.'},
        {q:'Cycle time reports require?', q_el: 'Cycle time αναφορές require?',options:['Consistent workflow/status usage','Only epics','No filters','Dark mode'],answer:0,why:'Time-in-status metrics depend on consistent process data.'},
        {q:'A created vs resolved chart is useful for?',options:['Seeing backlog trend','Choosing passwords','Editing workflows','Managing licenses'],answer:0,why:'It shows whether incoming work outpaces completion.'}
      ]
    },
    { id:'board-filters', title:'Board filters and board hygiene', level:'intermediate', minutes:9, summary:'Keep boards trustworthy by controlling filters, columns, and WIP.', tags:['boards','filters'],
      sections:[
        {t:'p',cls:'lead',text:'A board is a view powered by a filter. If the filter is wrong, the board lies.'},
        {t:'code',lang:'text',title:'Board filter example',code:`project = JIRA AND issuetype in (Story, Bug, Task) AND statusCategory != Done ORDER BY rank ASC`},
        {t:'list',checked:true,items:['Board filter includes only intended projects/issue types.','Columns map to real statuses.','WIP limits are visible and discussed.','Done issues drop off board appropriately.','Quick filters are named clearly.']},
        {t:'callout',tone:'tip',title:'Quick filters',text:'Use quick filters for common views like "My issues", "Bugs", or "Blocked", but keep them few and obvious.', text_el: 'Χρησιμοποίησε quick filters for common views like "My issues", "Bugs", or "Blocked", but keep them few and obvious.'}
      ],
      keyPoints:[
        {front:'What powers a Jira board?',back:'A saved filter/query that determines which issues appear on the board.'},
        {front:'Why review board filters regularly?', front_el: 'Γιατί review board filters regularly?',back:'Project scope, issue types, and workflows change; stale filters cause missing or unexpected issues.'},
        {front:'What is a quick filter?',back:'A button on a board that applies an additional JQL filter to narrow visible issues.'}
      ],
      quiz:[
        {q:'If issues are missing from a board, first check?', q_el: 'If issues are missing from a board, first έλεγξε?',options:['Board filter and column mapping','User\'s browser theme','Issue attachment size','Sprint name color'],answer:0,why:'Filter scope and status mapping commonly cause missing board issues.'},
        {q:'Quick filters should be?',options:['Few and clearly named','Hundreds','Hidden','Used instead of workflows'],answer:0,why:'Too many quick filters reduce usability.'},
        {q:'A board filter should include?', q_el: 'A board filter πρέπει να include?',options:['Only intended issues','Every issue in Jira','Only Done issues','No project clause'],answer:0,why:'Board scope must be intentional.'}
      ]
    }
  ]
});