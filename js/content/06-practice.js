/* ==========================================================================
   Module 6 - Practice & troubleshooting
   ========================================================================== */
(window.JIRA_COACH_CONTENT = window.JIRA_COACH_CONTENT || []).push({
  id: 'm6',
  title: 'Practice & troubleshooting', title_el: 'Εξάσκηση & αντιμετώπιση προβλημάτων',
  tagline: 'Apply Jira skills to real project setup and common problems.',
  description: 'Practice building clean Jira setups, diagnosing common issues, and using checklists for governance and quality.',
  lessons: [
    { id:'project-setup-lab', title:'Project setup lab', level:'intermediate', minutes:14, summary:'Design a small Jira project from request to working board.', tags:['practice','setup'],
      sections:[
        {t:'p',cls:'lead',text:'Practice by designing a project for a team that tracks product bugs and feature requests. The goal is not maximum configuration - it is a clear, usable setup.', text_el: 'Practice by designing a project for a ομάδα that tracks product bugs and feature requests. The goal is not maximum configuration - it is a clear, usable setup.'},
        {t:'steps',items: [
          {title:'Define the work',body:'Identify issue types: Story, Bug, Task. Decide if Epics are needed.'},
          {title:'Design the workflow',body:'Use a simple flow: To Do -> In Progress -> In Review -> Done. Add Blocked only if needed.', body_el: 'Χρησιμοποίησε a simple flow: To Do -> In Progress -> In Review -> Done. Πρόσθεσε Blocked only if needed.'},
          {title:'Choose fields',body:'Keep create screen light. Require Summary, Issue Type, Description. Add Priority, Component, Fix Version as needed.', body_el: 'Keep δημιούργησε οθόνη light. Require Σύνοψη, Issue Type, Description. Πρόσθεσε Priority, Component, Fix Version as needed.'},
          {title:'Build the board',body:'Create a Scrum or Kanban board with a clear filter and column mapping.', body_el: 'Δημιούργησε a Scrum or Kanban board with a clear filter and column mapping.'},
          {title:'Add guardrails',body:'Add one useful automation and one validator; document owners and purpose.', body_el: 'Πρόσθεσε one useful automation and one validator; document owners and purpose.'}
        ], items_el: ['Define the work', 'Identify issue τύποι: Story, Bug, Task. Decide if Epics are needed.', 'Design the workflow', 'Χρησιμοποίησε ένα απλό flow: To Do -> In Progress -> In Review -> Done. Πρόσθεσε Blocked only if needed.', 'Χρησιμοποίησε a απλό flow: To Do -> In Progress -> In Review -> Done. Πρόσθεσε Blocked only if needed.', 'Επίλεξε πεδία', 'Keep create οθόνη light. Require Summary, Issue Type, Description. Πρόσθεσε Priority, Component, Fix Version as needed.', 'Keep δημιούργησε οθόνη light. Require Σύνοψη, Issue Type, Description. Πρόσθεσε Priority, Component, Fix Version as needed.', 'Build the board', 'Create a Scrum or Kanban board with a clear filter and column mapping.', 'Δημιούργησε a Scrum or Kanban board with a clear filter and column mapping.', 'Πρόσθεσε guardrails', 'Πρόσθεσε one useful automation and one validator; document owners and purpose.', 'Πρόσθεσε one useful automation and one validator; document owners and purpose.']},
        {t:'code',lang:'text',title:'Starter JQL filter',code:`project = TEAM AND issuetype in (Story, Bug, Task) ORDER BY rank ASC`},
        {t:'callout',tone:'tip',title:'Success criteria',text:'A new team member should be able to create an issue, understand the workflow, and find their work on the board without training debt.', text_el: 'A new ομάδα member πρέπει να be able to δημιούργησε an issue, κατανόησε the workflow, and find their work on the board without training debt.'}
      ],
      keyPoints:[
        {front:'What is the goal of a good Jira project setup?', front_el: 'Τι είναι the goal of a good Jira project setup?',back:'A clear, usable system where team members can create, track, and find work with minimal confusion.', back_el: 'A clear, usable system where ομάδα members μπορεί να δημιούργησε, track, and find work with minimal confusion.'},
        {front:'What should you define before configuring Jira?', front_el: 'What πρέπει να you define πριν configuring Jira?',back:'The team\'s work types, process states, required decisions, and reporting needs.'},
        {front:'Why start with a simple workflow?', front_el: 'Γιατί start with a simple workflow?',back:'It is easier to adopt and maintain; complexity can be added only where it solves real problems.', back_el: 'It is easier to adopt and maintain; complexity μπορεί να be added only where it solves real problems.'}
      ],
      quiz:[
        {q:'What should come first in project setup?', q_el: 'What πρέπει να come first in project setup?',options: ['Understand work and process needs','Create 50 custom fields','Install every app','Make every transition restricted'], options_el: ['Understand work and process needs', 'Create 50 custom πεδία', 'Install κάθε app', 'Make κάθε transition restricted'],answer:0,why:'Configuration should follow real needs.', why_el: 'Configuration πρέπει να follow real needs.'},
        {q:'A good board filter should be?', q_el: 'A good board filter πρέπει να be?',options: ['Intentional and scoped','All issues in all projects','Only closed issues','Random'], options_el: ['Intentional and scoped', 'All issues in όλα projects', 'Only closed issues', 'Random'],answer:0,why:'Board filters determine what the team sees.', why_el: 'Board filters determine what the ομάδα sees.'},
        {q:'A useful Jira setup is one that?',options: ['Team members can understand and use','Has maximum customization','Uses every feature','Requires admin for every task'], options_el: ['Team members μπορεί να κατανόησε and use', 'Has maximum customization', 'Uses κάθε feature', 'Requires admin for κάθε task'],answer:0,why:'Usability and clarity are the goal.'}
      ]
    },
    { id:'troubleshooting-mindset', title:'Troubleshooting mindset', level:'beginner', minutes:10, summary:'Diagnose Jira problems by checking scope, configuration, permissions, and data.', tags:['troubleshooting','practice'],
      sections:[
        {t:'p',cls:'lead',text:'When Jira behaves unexpectedly, do not guess. Check the layer: issue data, workflow, board/filter, permissions, notification, or automation.', text_el: 'Πότε Jira behaves unexpectedly, do not guess. Έλεγξε the layer: issue data, workflow, board/filter, permissions, notification, or automation.'},
        {t:'table',head: ['Symptom','Check first','Common cause'], head_el: ['Symptom', 'Έλεγξε πρώτο', 'Συνηθισμένο αιτία'],rows: [
          ['Issue missing from board','Board filter, column mapping','Status unmapped or filter excludes issue'],
          ['Cannot transition issue','Workflow conditions/validators, permissions','User lacks permission or validator fails'],
          ['Field missing','Screen, field context, issue type','Wrong screen/scheme/context'],
          ['Too many notifications','Notification scheme, automation','Broad notification rules'],
          ['Automation unexpected','Rule audit log, trigger/conditions','Rule too broad or loop']
        ], rows_el: [['Issue missing from board', 'Board filter, column mapping', 'Status unmapped or filter excludes issue'], ['Cannot transition issue', 'Workflow conditions/validators, permissions', 'User lacks permission or validator fails'], ['Field missing', 'Screen, πεδίο context, issue τύπος', 'Wrong οθόνη/scheme/context'], ['Too many notifications', 'Notification scheme, automation', 'Broad notification rules'], ['Automation unexpected', 'Rule audit log, trigger/conditions', 'Rule too broad or loop']]},
        {t:'callout',tone:'tip',title:'Reproduce with a test issue',text:'Use a test issue and a known user/role to isolate whether the problem is data, configuration, or permission.', text_el: 'Χρησιμοποίησε a test issue and a known χρήστης/role to isolate whether the πρόβλημα is data, configuration, or permission.'}
      ],
      keyPoints:[
        {front:'What is the first step in Jira troubleshooting?', front_el: 'Τι είναι the first step in Jira troubleshooting?',back:'Identify the symptom and check the relevant layer: filter/board, workflow, screen/field, permission, or automation.', back_el: 'Identify the symptom and έλεγξε the relevant layer: filter/board, workflow, οθόνη/πεδίο, permission, or automation.'},
        {front:'Why use a test issue when troubleshooting?', front_el: 'Γιατί χρησιμοποίησε a test issue πότε troubleshooting?',back:'It isolates the problem safely without disrupting real work and makes reproduction clear.', back_el: 'It isolates the πρόβλημα safely without disrupting real work and makes reproduction clear.'},
        {front:'What often causes missing board issues?',back:'Board filter scope, unmapped statuses, quick filters, or rank/sub-filter behavior.'}
      ],
      quiz:[
        {q:'An issue is not on the board. First check?', q_el: 'An issue is not on the board. First έλεγξε?',options:['Board filter and column/status mapping','Delete the issue','Install an app','Change license'],answer:0,why:'Board visibility depends on filter and status mapping.'},
        {q:'A user cannot see a transition. Likely area?', q_el: 'A χρήστης δεν μπορεί να see a transition. Likely area?',options: ['Workflow condition or permission','Dashboard gadget','Issue attachment','Sprint name'], options_el: ['Workflow condition or permission', 'Dashboard gadget', 'Issue attachment', 'Sprint όνομα'],answer:0,why:'Conditions and permissions control transition availability.'},
        {q:'Troubleshooting should start with?', q_el: 'Troubleshooting πρέπει να start with?',options: ['Reproducing and isolating the symptom','Random configuration changes','Deleting schemes','Blaming users'], options_el: ['Reproducing and isolating the symptom', 'Random configuration changes', 'Deleting schemes', 'Blaming χρήστες'],answer:0,why:'Systematic isolation avoids making things worse.'}
      ]
    },
    { id:'governance-checklist', title:'Governance and review checklist', level:'advanced', minutes:10, summary:'Use a lightweight checklist to keep Jira clean over time.', summary_el: 'Χρησιμοποίησε a lightweight checklist to keep Jira clean over time.', tags:['governance','checklist'],
      sections:[
        {t:'p',cls:'lead',text:'Jira stays healthy when teams review configuration regularly. A small checklist prevents slow entropy.', text_el: 'Jira stays healthy πότε ομάδες review configuration regularly. A small checklist prevents slow entropy.'},
        {t:'list',checked:true,items: [
          'Every custom field has an owner, purpose, and scope.',
          'Workflows have clear Done criteria and no unused statuses.',
          'Board filters and columns match current process.',
          'Automation rules are named, documented, and audited.',
          'Permissions follow least privilege and use roles/groups.',
          'Dashboards answer real questions and have owners.',
          'Unused projects, fields, and versions are archived/reviewed.'
        ], items_el: ['Every custom πεδίο has an owner, purpose, and scope.', 'Workflows have clear Done criteria and no unused statuses.', 'Board filters and columns match current process.', 'Automation rules are named, documented, and audited.', 'Permissions follow least privilege and use roles/groups.', 'Dashboards απάντηση real ερωτήσεις and have owners.', 'Unused projects, πεδία, and versions are archived/reviewed.']},
        {t:'callout',tone:'why',title:'Make it routine',text:'A quarterly 30-minute review catches most configuration debt before it becomes a migration project.', text_el: 'A quarterly 30-minute review catches most configuration debt πριν it becomes a migration project.'}
      ],
      keyPoints:[
        {front:'What should a Jira governance review include?', front_el: 'What πρέπει να a Jira governance review include?',back:'Fields, workflows, boards/filters, automation, permissions, dashboards, and unused configuration.'},
        {front:'Why review automation rules?', front_el: 'Γιατί review automation rules?',back:'To catch loops, outdated actions, missing owners, and rules that no longer match the process.'},
        {front:'What is configuration entropy in Jira?', front_el: 'Τι είναι configuration entropy in Jira?',back:'Gradual buildup of unused, inconsistent, or unclear configuration that makes Jira harder to use and maintain.', back_el: 'Gradual buildup of unused, inconsistent, or unclear configuration that makes Jira harder to χρησιμοποίησε and maintain.'}
      ],
      quiz:[
        {q:'How often is a lightweight Jira review useful?',options: ['Periodically, e.g. quarterly','Never','Every hour','Only after migration'], options_el: ['Periodically, e.g. quarterly', 'Never', 'Every hour', 'Only μετά migration'],answer:0,why:'Regular small reviews prevent large cleanup projects.'},
        {q:'Which item belongs in governance review?',options:['Automation rule ownership','Coffee preferences','Laptop brand','Office paint'],answer:0,why:'Automation ownership and relevance are governance concerns.'},
        {q:'Unused configuration should be?', q_el: 'Unused configuration πρέπει να be?',options:['Reviewed and archived/retired where possible','Kept forever unnoticed','Duplicated','Hidden by renaming randomly'],answer:0,why:'Retiring unused config reduces complexity.'}
      ]
    }
  ]
});