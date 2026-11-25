/* ==========================================================================
   Module 2 — Work items & fields
   ========================================================================== */
(window.JIRA_COACH_CONTENT = window.JIRA_COACH_CONTENT || []).push({
  id: 'm2',
  title: 'Work items & fields',
  tagline: 'Model work clearly with the right issue types, fields, and screens.',
  description: 'Learn how to capture useful information without creating Jira clutter: issue types, fields, screens, priorities, and relationships.',
  lessons: [
    { id:'issue-types-deep', title:'Issue types in practice', level:'beginner', minutes:10, summary:'Pick issue types that match how work is planned, executed, and reported.', tags:['issue-types','fields'],
      sections:[
        {t:'p',cls:'lead',text:'Issue types are not labels; they shape workflow, fields, boards, and reports. Choose types that represent meaningfully different kinds of work.'},
        {t:'table',head:['Type','Use when','Avoid when'],rows:[
          ['Story','User-visible value or feature slice','It is an operational task with no user value'],
          ['Task','General work item','You need bug/incident-specific fields'],
          ['Bug','Something expected is broken','It is a new feature request'],
          ['Epic','Container for related work','It is small enough to complete as one item'],
          ['Subtask','Small child step of a parent issue','It should be tracked/planned independently']
        ]},
        {t:'callout',tone:'tip',title:'Rule',text:'If two issue types use the same workflow, fields, and reports, you probably only need one.'}
      ],
      keyPoints:[
        {front:'Why do issue types matter beyond naming?',back:'They influence workflows, fields/screens, board behavior, and reporting.'},
        {front:'When is Bug the right issue type?',back:'When existing expected behavior is broken or incorrect.'},
        {front:'When should you avoid creating a new issue type?',back:'When it does not require different workflow, fields, or reporting from an existing type.'}
      ],
      quiz:[
        {q:'What is the best reason to create a new issue type?',options:['It needs different workflow/fields/reporting','You like a new icon','It has a long description','Someone asked once'],answer:0,why:'Issue types should represent meaningful process differences.'},
        {q:'A small step inside a story that does not need independent planning is best modeled as?',options:['Subtask','Epic','Project','Dashboard'],answer:0,why:'Subtasks are child steps within a parent issue.'},
        {q:'A feature request reported by a customer is usually not a?',options:['Bug','Story','Task','Request'],answer:0,why:'A feature request is new value, not broken existing behavior.'}
      ]
    },
    { id:'fields-practical', title:'Fields that support decisions', level:'beginner', minutes:10, summary:'Use fields to capture decision-ready information at the right time.', tags:['fields','screens'],
      sections:[
        {t:'p',cls:'lead',text:'A field should exist because someone makes a decision with it: triage, planning, execution, or reporting.'},
        {t:'list',items:['**Required at create:** only what is needed to understand/triage the work.','**Filled during refinement:** acceptance criteria, estimate, dependencies.','**Filled at close:** resolution, root cause, release version if relevant.']},
        {t:'code',lang:'text',title:'Field timing example',code:`Create: Summary, Issue Type, Description, Priority
Refine: Assignee, Story Points, Components, Acceptance Criteria
Resolve: Resolution, Fix Version, Root Cause`},
        {t:'callout',tone:'warn',title:'Custom field trap',text:'Custom fields are easy to add and hard to retire. Reuse existing fields and define an owner for every custom field.'}
      ],
      keyPoints:[
        {front:'When should a field be required?',back:'Only when it is needed for the next decision, such as triage or workflow transition.'},
        {front:'Why are custom fields costly?',back:'They create ongoing maintenance, screen/config complexity, and reporting inconsistency.'},
        {front:'What is a good practice for field lifecycle?',back:'Capture information at the stage where it becomes relevant: create, refine, or close.'}
      ],
      quiz:[
        {q:'Which field timing is best?',options:['Capture data when it is needed','Require all possible data at creation','Never require fields','Only fill fields at close'],answer:0,why:'Data should be captured at the point it supports a decision.'},
        {q:'What should every custom field have?',options:['An owner and purpose','A random name','A dashboard','A subtask'],answer:0,why:'Ownership and purpose prevent field sprawl.'},
        {q:'A quarterly reporting field needed only at close should usually be?',options:['Required/filled at close or transition','Required on create screen','Hidden from everyone','Stored in labels only'],answer:0,why:'Ask for data when it becomes relevant.'}
      ]
    },
    { id:'screens-schemes', title:'Screens and schemes', level:'intermediate', minutes:11, summary:'Control where fields appear using screens and schemes without overcomplicating projects.', tags:['screens','schemes'],
      sections:[
        {t:'p',cls:'lead',text:'Screens show fields. Screen schemes map screens to operations. Issue type screen schemes can vary screens by issue type. Keep it simple unless there is a real need.'},
        {t:'table',head:['Artifact','Purpose','Example'],rows:[
          ['Screen','Collection of fields shown to user','Create Bug screen'],
          ['Screen scheme','Maps create/edit/view to screens','Default screen for create/edit/view'],
          ['Issue type screen scheme','Maps issue types to screen schemes','Bug uses Bug Screen Scheme']
        ]},
        {t:'callout',tone:'tip',title:'Keep create simple',text:'Use a lightweight create screen and richer view/edit screens. Users abandon long create forms.'}
      ],
      keyPoints:[
        {front:'What does a screen do in Jira?',back:'It defines which fields are displayed in a specific context like create, edit, view, or transition.'},
        {front:'Why use different screens by issue type?',back:'Only when issue types truly need different fields; otherwise keep schemes simple.'},
        {front:'What is a common create-screen mistake?',back:'Making it too long by requiring too many fields too early.'}
      ],
      quiz:[
        {q:'Which artifact maps create/edit/view operations to screens?',options:['Screen scheme','Workflow','Board','JQL filter'],answer:0,why:'Screen schemes assign screens to operations.'},
        {q:'When should issue types have different screens?',options:['When they need different fields/process data','Always','Never','Only for subtasks'],answer:0,why:'Use variation only when it supports real differences.'},
        {q:'A good create screen is usually?',options:['Short and decision-focused','As complete as possible','Only custom fields','Read-only'],answer:0,why:'Short create screens reduce friction.'}
      ]
    },
    { id:'priorities-labels', title:'Priorities, labels, components, and versions', level:'beginner', minutes:10, summary:'Use lightweight categorization carefully so filters and reports stay meaningful.', tags:['labels','components','versions'],
      sections:[
        {t:'p',cls:'lead',text:'Priorities, labels, components, and versions help organize work. Each has a different purpose and failure mode.'},
        {t:'table',head:['Field','Best for','Failure mode'],rows:[
          ['Priority','Triage urgency/importance','Everyone marks everything Highest'],
          ['Labels','Ad hoc cross-cutting tags','Spelling/case sprawl'],
          ['Components','Owned areas of product/system','No owner or outdated components'],
          ['Fix versions','Release planning/tracking','Versions never maintained']
        ]},
        {t:'callout',tone:'warn',title:'Priority inflation',text:'If most issues are Highest/Blocker, priority has lost meaning. Define what each level means.'}
      ],
      keyPoints:[
        {front:'What are components good for?',back:'Grouping issues by product/system area, often with component leads or ownership.'},
        {front:'What is the main risk with labels?',back:'Free-form labels can sprawl with inconsistent naming and duplicates.'},
        {front:'What do fix versions support?',back:'Release planning, tracking what shipped, and release reporting.'}
      ],
      quiz:[
        {q:'Which field is best for release tracking?',options:['Fix version','Label color','Avatar','Workflow name'],answer:0,why:'Fix versions are designed for release planning and tracking.'},
        {q:'What causes priority inflation?',options:['Unclear priority definitions','Using components','Creating epics','Writing JQL'],answer:0,why:'Without clear definitions, teams overuse high priorities.'},
        {q:'Labels are risky because they are?',options:['Free-form and easy to duplicate inconsistently','Encrypted','Required by Jira','Only for admins'],answer:0,why:'Labels need conventions to avoid sprawl.'}
      ]
    },
    { id:'issue-links-dependencies', title:'Issue links and dependencies', level:'intermediate', minutes:9, summary:'Model relationships between work items without faking hierarchy.', tags:['links','dependencies'],
      sections:[
        {t:'p',cls:'lead',text:'Issue links express relationships: blocks, duplicates, relates to, causes, etc. They are powerful for dependency visibility but can become noisy.'},
        {t:'code',lang:'text',title:'Common link types',code:`BUG-12 blocks STORY-45
TASK-8 duplicates TASK-3
STORY-45 relates to EPIC-7`},
        {t:'callout',tone:'tip',title:'Use links for real decisions',text:'A "blocks" link matters in planning. A "relates to" link on everything means nothing.'}
      ],
      keyPoints:[
        {front:'What is an issue link used for?',back:'To represent relationships between issues, such as blocking, duplication, or related work.'},
        {front:'Why should link types be used carefully?',back:'Because excessive or vague links create noise and reduce trust in dependency data.'},
        {front:'What link is especially important in planning?',back:'Blocks/is blocked by, because it affects sequencing and risk.'}
      ],
      quiz:[
        {q:'Which link type most directly affects sequencing?',options:['Blocks/is blocked by','Relates to','Mentions','Watches'],answer:0,why:'Blocking links indicate dependency and sequencing risk.'},
        {q:'Issue links should be used when?',options:['The relationship supports a decision or understanding','On every issue by default','Only for subtasks','To replace assignees'],answer:0,why:'Links should carry meaning.'},
        {q:'A duplicate bug should usually be?',options:['Linked as duplicate and handled per team process','Deleted silently','Converted to epic','Ignored'],answer:0,why:'Duplicate links preserve context while avoiding parallel tracking.'}
      ]
    }
  ]
});