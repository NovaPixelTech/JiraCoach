/* ==========================================================================
   Module 2 - Work items & fields
   ========================================================================== */
(window.JIRA_COACH_CONTENT = window.JIRA_COACH_CONTENT || []).push({
  id: 'm2',
  title: 'Work items & fields', title_el: 'Work items & πεδία',
  tagline: 'Model work clearly with the right issue types, fields, and screens.',
  description: 'Learn how to capture useful information without creating Jira clutter: issue types, fields, screens, priorities, and relationships.',
  lessons: [
    { id:'issue-types-deep', title:'Issue types in practice', level:'beginner', minutes:10, summary:'Pick issue types that match how work is planned, executed, and reported.', tags:['issue-types','fields'],
      sections:[
        {t:'p',cls:'lead',text:'Issue types are not labels; they shape workflow, fields, boards, and reports. Choose types that represent meaningfully different kinds of work.', text_el: 'Issue types are not labels; they shape workflow, πεδία, boards, and αναφορές. Choose types that represent meaningfully different kinds of work.'},
        {t:'table',head:['Type','Use when','Avoid when'],rows:[
          ['Story','User-visible value or feature slice','It is an operational task with no user value'],
          ['Task','General work item','You need bug/incident-specific fields'],
          ['Bug','Something expected is broken','It is a new feature request'],
          ['Epic','Container for related work','It is small enough to complete as one item'],
          ['Subtask','Small child step of a parent issue','It should be tracked/planned independently']
        ]},
        {t:'callout',tone:'tip',title:'Rule',text:'If two issue types use the same workflow, fields, and reports, you probably only need one.', text_el: 'If two issue types χρησιμοποίησε the same workflow, πεδία, and αναφορές, you probably only need one.'}
      ],
      keyPoints:[
        {front:'Why do issue types matter beyond naming?', front_el: 'Γιατί do issue types matter beyond naming?',back:'They influence workflows, fields/screens, board behavior, and reporting.', back_el: 'They influence workflows, πεδία/οθόνες, board behavior, and reporting.'},
        {front:'When is Bug the right issue type?', front_el: 'Πότε is Bug το σωστό issue type?',back:'When existing expected behavior is broken or incorrect.', back_el: 'Πότε existing expected behavior is broken or incorrect.'},
        {front:'When should you avoid creating a new issue type?', front_el: 'Πότε πρέπει να you απέφυγε creating a new issue type?',back:'When it does not require different workflow, fields, or reporting from an existing type.', back_el: 'Πότε it does not require different workflow, πεδία, or reporting from an existing type.'}
      ],
      quiz:[
        {q:'What is the best reason to create a new issue type?', q_el: 'Τι είναι the best reason to δημιούργησε a new issue type?',options:['It needs different workflow/fields/reporting','You like a new icon','It has a long description','Someone asked once'],answer:0,why:'Issue types should represent meaningful process differences.', why_el: 'Issue types πρέπει να represent meaningful process differences.'},
        {q:'A small step inside a story that does not need independent planning is best modeled as?',options:['Subtask','Epic','Project','Dashboard'],answer:0,why:'Subtasks are child steps within a parent issue.'},
        {q:'A feature request reported by a customer is usually not a?',options:['Bug','Story','Task','Request'],answer:0,why:'A feature request is new value, not broken existing behavior.'}
      ]
    },
    { id:'fields-practical', title:'Fields that support decisions', level:'beginner', minutes:10, summary:'Use fields to capture decision-ready information at the right time.', summary_el: 'Χρησιμοποίησε πεδία to capture decision-ready information at το σωστό time.', tags:['fields','screens'],
      sections:[
        {t:'p',cls:'lead',text:'A field should exist because someone makes a decision with it: triage, planning, execution, or reporting.', text_el: 'A πεδίο πρέπει να exist because someone makes a decision with it: triage, planning, execution, or reporting.'},
        {t:'list',items:['**Required at create:** only what is needed to understand/triage the work.','**Filled during refinement:** acceptance criteria, estimate, dependencies.','**Filled at close:** resolution, root cause, release version if relevant.']},
        {t:'code',lang:'text',title:'Field timing example',code:`Create: Summary, Issue Type, Description, Priority
Refine: Assignee, Story Points, Components, Acceptance Criteria
Resolve: Resolution, Fix Version, Root Cause`},
        {t:'callout',tone:'warn',title:'Custom field trap',text:'Custom fields are easy to add and hard to retire. Reuse existing fields and define an owner for every custom field.', text_el: 'Custom πεδία are easy to πρόσθεσε and hard to retire. Reuse existing πεδία and define an owner for every custom πεδίο.'}
      ],
      keyPoints:[
        {front:'When should a field be required?', front_el: 'Πότε πρέπει να a πεδίο be απαιτούμενο?',back:'Only when it is needed for the next decision, such as triage or workflow transition.', back_el: 'Only πότε it is needed for the επόμενο decision, such as triage or workflow transition.'},
        {front:'Why are custom fields costly?', front_el: 'Γιατί are custom πεδία costly?',back:'They create ongoing maintenance, screen/config complexity, and reporting inconsistency.', back_el: 'They δημιούργησε ongoing maintenance, οθόνη/config complexity, and reporting inconsistency.'},
        {front:'What is a good practice for field lifecycle?', front_el: 'Τι είναι a good practice for πεδίο lifecycle?',back:'Capture information at the stage where it becomes relevant: create, refine, or close.', back_el: 'Capture information at the stage where it becomes relevant: δημιούργησε, refine, or close.'}
      ],
      quiz:[
        {q:'Which field timing is best?', q_el: 'Which πεδίο timing is best?',options:['Capture data when it is needed','Require all possible data at creation','Never require fields','Only fill fields at close'],answer:0,why:'Data should be captured at the point it supports a decision.', why_el: 'Data πρέπει να be captured at the point it supports a decision.'},
        {q:'What should every custom field have?', q_el: 'What πρέπει να every custom πεδίο have?',options:['An owner and purpose','A random name','A dashboard','A subtask'],answer:0,why:'Ownership and purpose prevent field sprawl.', why_el: 'Ownership and purpose prevent πεδίο sprawl.'},
        {q:'A quarterly reporting field needed only at close should usually be?', q_el: 'A quarterly reporting πεδίο needed only at close πρέπει να usually be?',options:['Required/filled at close or transition','Required on create screen','Hidden from everyone','Stored in labels only'],answer:0,why:'Ask for data when it becomes relevant.', why_el: 'Ask for data πότε it becomes relevant.'}
      ]
    },
    { id:'screens-schemes', title:'Screens and schemes', level:'intermediate', minutes:11, summary:'Control where fields appear using screens and schemes without overcomplicating projects.', summary_el: 'Control where πεδία appear using οθόνες and schemes without overcomplicating projects.', tags:['screens','schemes'],
      sections:[
        {t:'p',cls:'lead',text:'Screens show fields. Screen schemes map screens to operations. Issue type screen schemes can vary screens by issue type. Keep it simple unless there is a real need.', text_el: 'Screens show πεδία. Screen schemes map οθόνες to operations. Issue type οθόνη schemes μπορεί να vary οθόνες by issue type. Keep it simple unless there is a real need.'},
        {t:'table',head:['Artifact','Purpose','Example'],rows:[
          ['Screen','Collection of fields shown to user','Create Bug screen'],
          ['Screen scheme','Maps create/edit/view to screens','Default screen for create/edit/view'],
          ['Issue type screen scheme','Maps issue types to screen schemes','Bug uses Bug Screen Scheme']
        ]},
        {t:'callout',tone:'tip',title:'Keep create simple',text:'Use a lightweight create screen and richer view/edit screens. Users abandon long create forms.', text_el: 'Χρησιμοποίησε a lightweight δημιούργησε οθόνη and richer view/edit οθόνες. Users abandon long δημιούργησε forms.'}
      ],
      keyPoints:[
        {front:'What does a screen do in Jira?', front_el: 'What does a οθόνη do in Jira?',back:'It defines which fields are displayed in a specific context like create, edit, view, or transition.', back_el: 'It defines which πεδία are displayed in a specific context like δημιούργησε, edit, view, or transition.'},
        {front:'Why use different screens by issue type?', front_el: 'Γιατί χρησιμοποίησε different οθόνες by issue type?',back:'Only when issue types truly need different fields; otherwise keep schemes simple.', back_el: 'Only πότε issue types truly need different πεδία; otherwise keep schemes simple.'},
        {front:'What is a common create-screen mistake?', front_el: 'Τι είναι a common δημιούργησε-οθόνη λάθος?',back:'Making it too long by requiring too many fields too early.', back_el: 'Making it too long by requiring too many πεδία too early.'}
      ],
      quiz:[
        {q:'Which artifact maps create/edit/view operations to screens?', q_el: 'Which artifact maps δημιούργησε/edit/view operations to οθόνες?',options:['Screen scheme','Workflow','Board','JQL filter'],answer:0,why:'Screen schemes assign screens to operations.', why_el: 'Screen schemes assign οθόνες to operations.'},
        {q:'When should issue types have different screens?', q_el: 'Πότε πρέπει να issue types have different οθόνες?',options:['When they need different fields/process data','Always','Never','Only for subtasks'],answer:0,why:'Use variation only when it supports real differences.', why_el: 'Χρησιμοποίησε variation only πότε it supports real differences.'},
        {q:'A good create screen is usually?', q_el: 'A good δημιούργησε οθόνη is usually?',options:['Short and decision-focused','As complete as possible','Only custom fields','Read-only'],answer:0,why:'Short create screens reduce friction.', why_el: 'Short δημιούργησε οθόνες reduce friction.'}
      ]
    },
    { id:'priorities-labels', title:'Priorities, labels, components, and versions', level:'beginner', minutes:10, summary:'Use lightweight categorization carefully so filters and reports stay meaningful.', summary_el: 'Χρησιμοποίησε lightweight categorization carefully so filters and αναφορές stay meaningful.', tags:['labels','components','versions'],
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
        {front:'What are components good for?', front_el: 'Τι είναι components good for?',back:'Grouping issues by product/system area, often with component leads or ownership.'},
        {front:'What is the main risk with labels?', front_el: 'Τι είναι the main risk with labels?',back:'Free-form labels can sprawl with inconsistent naming and duplicates.', back_el: 'Free-form labels μπορεί να sprawl with inconsistent naming and duplicates.'},
        {front:'What do fix versions support?',back:'Release planning, tracking what shipped, and release reporting.'}
      ],
      quiz:[
        {q:'Which field is best for release tracking?', q_el: 'Which πεδίο is best for release tracking?',options:['Fix version','Label color','Avatar','Workflow name'],answer:0,why:'Fix versions are designed for release planning and tracking.'},
        {q:'What causes priority inflation?',options:['Unclear priority definitions','Using components','Creating epics','Writing JQL'],answer:0,why:'Without clear definitions, teams overuse high priorities.', why_el: 'Without clear definitions, ομάδες overuse high priorities.'},
        {q:'Labels are risky because they are?',options:['Free-form and easy to duplicate inconsistently','Encrypted','Required by Jira','Only for admins'],answer:0,why:'Labels need conventions to avoid sprawl.', why_el: 'Labels need conventions to απέφυγε sprawl.'}
      ]
    },
    { id:'issue-links-dependencies', title:'Issue links and dependencies', level:'intermediate', minutes:9, summary:'Model relationships between work items without faking hierarchy.', tags:['links','dependencies'],
      sections:[
        {t:'p',cls:'lead',text:'Issue links express relationships: blocks, duplicates, relates to, causes, etc. They are powerful for dependency visibility but can become noisy.', text_el: 'Issue links express relationships: blocks, duplicates, relates to, causes, etc. They are powerful for dependency visibility but μπορεί να become noisy.'},
        {t:'code',lang:'text',title:'Common link types',code:`BUG-12 blocks STORY-45
TASK-8 duplicates TASK-3
STORY-45 relates to EPIC-7`},
        {t:'callout',tone:'tip',title:'Use links for real decisions', title_el: 'Χρησιμοποίησε links for real decisions',text:'A "blocks" link matters in planning. A "relates to" link on everything means nothing.'}
      ],
      keyPoints:[
        {front:'What is an issue link used for?', front_el: 'Τι είναι an issue link used for?',back:'To represent relationships between issues, such as blocking, duplication, or related work.'},
        {front:'Why should link types be used carefully?', front_el: 'Γιατί πρέπει να link types be used carefully?',back:'Because excessive or vague links create noise and reduce trust in dependency data.', back_el: 'Because excessive or vague links δημιούργησε noise and reduce trust in dependency data.'},
        {front:'What link is especially important in planning?',back:'Blocks/is blocked by, because it affects sequencing and risk.'}
      ],
      quiz:[
        {q:'Which link type most directly affects sequencing?',options:['Blocks/is blocked by','Relates to','Mentions','Watches'],answer:0,why:'Blocking links indicate dependency and sequencing risk.'},
        {q:'Issue links should be used when?', q_el: 'Issue links πρέπει να be used πότε?',options:['The relationship supports a decision or understanding','On every issue by default','Only for subtasks','To replace assignees'],answer:0,why:'Links should carry meaning.', why_el: 'Links πρέπει να carry meaning.'},
        {q:'A duplicate bug should usually be?', q_el: 'A duplicate bug πρέπει να usually be?',options:['Linked as duplicate and handled per team process','Deleted silently','Converted to epic','Ignored'],answer:0,why:'Duplicate links preserve context while avoiding parallel tracking.'}
      ]
    }
  ]
});