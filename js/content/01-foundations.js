(window.JIRA_COACH_CONTENT = window.JIRA_COACH_CONTENT || []).push({
  "id": "m1",
  "title": "Foundations",
  "title_el": "Βασικές αρχές",
  "tagline": "What Jira is, how work flows, and why teams use it.",
  "tagline_el": "Τι είναι το Jira, πώς ρέει η εργασία και γιατί το χρησιμοποιούν οι ομάδες.",
  "description": "Build the mental model: projects, work items, issue types, workflows, and how a request moves from idea to done.",
  "lessons": [
    {
      "id": "why-jira",
      "title": "Jira in one page",
      "title_el": "Το Jira σε μία σελίδα",
      "level": "beginner",
      "minutes": 10,
      "summary": "The core building blocks, what Jira does for teams, and the path from backlog to done.",
      "summary_el": "The core building blocks, what Jira does for ομάδες, and the path from backlog to done.",
      "tags": [
        "foundations",
        "projects",
        "workflow"
      ],
      "sections": [
        {
          "t": "p",
          "cls": "lead",
          "text": "**Jira** is Atlassian's work management platform for tracking tasks, bugs, requests, and projects. You model work as *issues/work items*, move them through a *workflow*, and use boards, filters, and reports to keep teams aligned.",
          "text_el": "**Jira** is Atlassian's εργασία management platform για tracking tasks, bugs, requests, και projects. You model εργασία as *issues/εργασία items*, move them through a *workflow*, και χρησιμοποίησε boards, filters, και reports to κράτα ομάδες aligned."
        },
        {
          "t": "h",
          "text": "The building blocks",
          "text_el": "building blocks"
        },
        {
          "t": "p",
          "text": "A Jira setup is a stack of configuration choices. Understanding each layer prevents messy projects later.",
          "text_el": "A Jira setup is a stack of configuration choices. Understanding κάθε layer prevents messy projects later."
        },
        {
          "t": "table",
          "head": [
            "Layer",
            "Main artifacts",
            "What it is for"
          ],
          "rows": [
            [
              "Work items",
              "Issues, issue types, fields, comments, attachments",
              "The actual work: stories, bugs, tasks, epics, requests."
            ],
            [
              "Workflow",
              "Statuses, transitions, conditions, validators, post functions",
              "How work moves: To Do -> In Progress -> Done, with rules."
            ],
            [
              "Views & planning",
              "Boards, backlogs, filters, dashboards, JQL",
              "How teams see, prioritize, and query work."
            ],
            [
              "Governance",
              "Permissions, notifications, schemes, automation, apps",
              "Who can do what, who gets notified, and what happens automatically."
            ]
          ],
          "rows_el": [
            [
              "Work items",
              "Issues, issue τύποι, πεδία, comments, attachments",
              "The actual work: stories, bugs, tasks, epics, requests."
            ],
            [
              "Workflow",
              "Statuses, transitions, conditions, validators, post functions",
              "How work moves: To Do -> In Progress -> Done, with rules."
            ],
            [
              "Views & planning",
              "Boards, backlogs, filters, dashboards, JQL",
              "How ομάδες see, prioritize, and query work."
            ],
            [
              "Governance",
              "Permissions, notifications, schemes, automation, apps",
              "Who μπορεί να do what, who gets notified, and what happens automatically."
            ]
          ],
          "head_el": [
            "Layer",
            "Main artifacts",
            "What it is για"
          ]
        },
        {
          "t": "callout",
          "tone": "why",
          "title": "Why structure matters",
          "text": "The same Jira site can support software delivery, IT service, and business projects. Good structure lets teams share reporting and habits without forcing every team into the same workflow. Bad structure creates duplicate fields, confusing statuses, and reports nobody trusts.",
          "text_el": "The same Jira site μπορεί να support software delivery, IT service, and business projects. Good structure lets ομάδες share reporting and habits without forcing every ομάδα into the same workflow. Bad structure creates duplicate πεδία, confusing statuses, and αναφορές nobody trusts."
        },
        {
          "t": "h",
          "text": "The path of a work item",
          "text_el": "path of work item"
        },
        {
          "t": "steps",
          "items": [
            {
              "title": "Create",
              "body": "Someone creates an issue with a type, summary, description, and key fields like priority, assignee, or due date.",
              "body_el": "Someone creates an issue with a type, σύνοψη, description, and key πεδία like priority, assignee, or due date."
            },
            {
              "title": "Refine",
              "body": "The team adds context: labels, components, story points, acceptance criteria, attachments, linked issues.",
              "body_el": "The ομάδα adds context: labels, components, story points, acceptance criteria, attachments, linked issues."
            },
            {
              "title": "Plan",
              "body": "The item appears in a backlog or board filter. Scrum teams plan it into a sprint; Kanban teams pull it when capacity is available.",
              "body_el": "The item appears in a backlog or board filter. Scrum ομάδες plan it into a sprint; Kanban ομάδες pull it πότε capacity is available."
            },
            {
              "title": "Execute",
              "body": "The assignee moves it through workflow transitions. Comments, commits, pull requests, and automation rules add traceability.",
              "body_el": "The assignee moves it through workflow transitions. Comments, commits, pull requests, and automation rules πρόσθεσε traceability."
            },
            {
              "title": "Close & learn",
              "body": "The item reaches Done/Resolved. Reports, dashboards, and retrospectives use the data to improve the process.",
              "body_el": "The item reaches Done/Resolved. Reports, dashboards, and retrospectives χρησιμοποίησε the data to improve the process.",
              "title_el": "Close & μάθε"
            }
          ],
          "items_el": [
            "Create",
            "Someone creates an issue with a τύπος, σύνοψη, περιγραφή, and key πεδία like priority, assignee, or due date.",
            "Someone creates an issue with a τύπος, σύνοψη, περιγραφή, and key πεδία like priority, assignee, or due date.",
            "Refine",
            "The ομάδα adds context: labels, components, story points, acceptance criteria, attachments, linked issues.",
            "The ομάδα adds context: labels, components, story points, acceptance criteria, attachments, linked issues.",
            "Plan",
            "The item appears in a backlog or board filter. Scrum ομάδες plan it into a sprint; Kanban ομάδες pull it when capacity is available.",
            "The item appears in a backlog or board filter. Scrum ομάδες plan it into a sprint; Kanban ομάδες pull it πότε capacity is available.",
            "Execute",
            "The assignee moves it through workflow transitions. Comments, commits, pull requests, and automation rules add traceability.",
            "The assignee moves it through workflow transitions. Comments, commits, pull requests, and automation rules πρόσθεσε traceability.",
            "Close & μάθε",
            "The item reaches Done/Resolved. Reports, dashboards, and retrospectives use the data to improve the process.",
            "The item reaches Done/Resolved. Reports, dashboards, and retrospectives χρησιμοποίησε the data to improve the process."
          ]
        },
        {
          "t": "compare",
          "a": {
            "label": "Jira as a to-do list",
            "items": [
              "Tracks tasks in a flat list",
              "Little process enforcement",
              "Hard to report across teams",
              "Works only for simple personal tracking"
            ],
            "items_el": [
              "Tracks tasks in a flat λίστα",
              "Little process enforcement",
              "Hard to report across ομάδες",
              "Works only for απλό personal tracking"
            ],
            "label_el": "Jira as to-do list"
          },
          "b": {
            "label": "Jira as a work system",
            "items": [
              "Work items have types, fields, and workflow",
              "Rules guide transitions and quality",
              "JQL, boards, and dashboards enable reporting",
              "Scales from one team to many projects"
            ],
            "items_el": [
              "Work items have τύποι, πεδία, and workflow",
              "Rules guide transitions and quality",
              "JQL, boards, and dashboards enable reporting",
              "Scales from one ομάδα to many projects"
            ],
            "label_el": "Jira as work system"
          }
        },
        {
          "t": "callout",
          "tone": "tip",
          "title": "The key habit",
          "text": "Before creating fields, statuses, or automation, ask: \"What decision will this data support?\" Jira is easy to customize and easy to clutter.",
          "text_el": "Before creating πεδία, statuses, or automation, ask: \"What decision will this data support?\" Jira is easy to customize and easy to clutter.",
          "title_el": "key habit"
        }
      ],
      "keyPoints": [
        {
          "front": "What is a Jira work item?",
          "back": "A record representing work to track - such as a story, bug, task, epic, or request - with fields, status, and history.",
          "back_el": "A record representing work to track - such as a story, bug, task, epic, or request - with πεδία, status, and history.",
          "front_el": "Τι είναι Jira work item?"
        },
        {
          "front": "What are the four main Jira layers to understand?",
          "front_el": "Τι είναι the four main Jira layers to κατανόησε?",
          "back": "Work items, workflow, views/planning (boards/filters/JQL), and governance (permissions/notifications/schemes/automation).",
          "back_el": "Work items, workflow, views/planning (boards/filters/JQL), και governance (permissions/notifications/schemes/automation)."
        },
        {
          "front": "Why can Jira customization become a problem?",
          "front_el": "Γιατί μπορεί να Jira customization become a πρόβλημα?",
          "back": "Because unmanaged fields, statuses, and schemes create clutter, inconsistent reporting, and confusing user experience.",
          "back_el": "Because unmanaged πεδία, statuses, and schemes δημιούργησε clutter, inconsistent reporting, and confusing χρήστης experience."
        }
      ],
      "quiz": [
        {
          "q": "Which artifact primarily defines how work moves from To Do to Done?",
          "options": [
            "Workflow",
            "Dashboard",
            "Issue link",
            "Attachment"
          ],
          "answer": 0,
          "why": "Statuses and transitions in the workflow control movement through the process.",
          "q_el": "Ποιο στοιχείο ορίζει κυρίως how εργασία moves από To Do to Done?",
          "why_el": "Statuses και transitions in the workflow control movement through the διαδικασία.",
          "options_el": [
            "Workflow",
            "Dashboard",
            "Issue link",
            "Attachment"
          ]
        },
        {
          "q": "What is the main risk of adding fields without a clear purpose?",
          "q_el": "Τι είναι the main risk of adding πεδία without a clear purpose?",
          "options": [
            "Jira becomes cluttered and reporting becomes unreliable",
            "Jira cannot create issues",
            "Boards stop supporting Scrum",
            "Users lose their passwords"
          ],
          "answer": 0,
          "why": "Unnecessary fields add noise and inconsistent data, which hurts usability and reporting.",
          "why_el": "Unnecessary πεδία πρόσθεσε noise and inconsistent data, which hurts usability and reporting.",
          "options_el": [
            "Jira becomes cluttered and reporting becomes unreliable",
            "Jira δεν μπορεί να create issues",
            "Boards stop supporting Scrum",
            "Users lose their passwords"
          ]
        },
        {
          "q": "Which layer helps teams query and visualize work?",
          "q_el": "Which layer helps ομάδες query and visualize work?",
          "options": [
            "Views & planning",
            "DNS",
            "Database indexes",
            "Mail server"
          ],
          "answer": 0,
          "why": "Boards, filters, dashboards, and JQL are used to view and query work.",
          "why_el": "Boards, filters, dashboards, και JQL χρησιμοποιούνται για να view και query work.",
          "options_el": [
            "Views & planning",
            "DNS",
            "Database indexes",
            "Mail server"
          ]
        }
      ],
      "resources": [
        {
          "label": "Atlassian - What is Jira?",
          "label_el": "Atlassian - Τι είναι το Jira;",
          "url": "https://support.atlassian.com/jira-software-cloud/docs/what-is-jira-software/"
        }
      ]
    },
    {
      "id": "projects-and-issue-types",
      "title": "Projects, issue types, and work hierarchy",
      "title_el": "Projects, issue types και ιεραρχία εργασίας",
      "level": "beginner",
      "minutes": 11,
      "summary": "Choose the right container for work and model tasks at the right level of detail.",
      "summary_el": "Choose το σωστό container for work and model tasks at το σωστό level of detail.",
      "tags": [
        "projects",
        "issue-types",
        "epics"
      ],
      "sections": [
        {
          "t": "p",
          "cls": "lead",
          "text": "A **project** is the container for work. **Issue types** define what kind of work lives inside it. Getting this right early keeps boards, reports, and workflows understandable.",
          "text_el": "A **project** is the container for work. **Issue types** define what kind of work lives inside it. Getting this right early keeps boards, αναφορές, and workflows understandable."
        },
        {
          "t": "h",
          "text": "Common issue types"
        },
        {
          "t": "table",
          "head": [
            "Issue type",
            "Use it for",
            "Typical fields"
          ],
          "head_el": [
            "Issue type",
            "Χρησιμοποίησε it for",
            "Typical πεδία"
          ],
          "rows": [
            [
              "Epic",
              "Large body of work spanning multiple issues/sprints",
              "Summary, owner, target dates, child issues"
            ],
            [
              "Story / Task",
              "Deliverable user value or general work item",
              "Description, assignee, priority, story points"
            ],
            [
              "Bug",
              "Defect or incorrect behavior",
              "Steps to reproduce, expected/actual, severity"
            ],
            [
              "Subtask",
              "Small piece of work inside a parent issue",
              "Assignee, estimate, status"
            ]
          ],
          "rows_el": [
            [
              "Epic",
              "Large body of work spanning multiple issues/sprints",
              "Summary, owner, target dates, child issues"
            ],
            [
              "Story / Task",
              "Deliverable χρήστης value or general work item",
              "Description, assignee, priority, story points"
            ],
            [
              "Bug",
              "Defect or λάθος behavior",
              "Steps to reproduce, expected/actual, severity"
            ],
            [
              "Subtask",
              "Small piece of work inside a parent issue",
              "Assignee, estimate, status"
            ]
          ]
        },
        {
          "t": "callout",
          "tone": "warn",
          "title": "Do not model everything as a bug",
          "text": "Teams often overuse Bug because it feels precise. If the work is a feature, improvement, or operational task, use the appropriate type. Issue type drives workflow, fields, and reporting.",
          "text_el": "Teams often overuse Bug because it feels precise. If the work is a feature, improvement, or operational task, χρησιμοποίησε the appropriate type. Issue type drives workflow, πεδία, and reporting.",
          "title_el": "Μην model everything as bug"
        },
        {
          "t": "h",
          "text": "Hierarchy"
        },
        {
          "t": "list",
          "items": [
            "**Epic** groups related work and gives roadmap-level visibility.",
            "**Story/Task/Bug** are executable items planned and tracked by teams.",
            "**Subtask** breaks an issue into smaller steps; use sparingly, because subtasks can add overhead.",
            "**Links** express relationships like blocks/is blocked by, duplicates, or relates to."
          ],
          "items_el": [
            "**Epic** groups related work and gives roadmap-level visibility.",
            "**Story/Task/Bug** are executable items planned and tracked by ομάδες.",
            "**Subtask** breaks an issue into smaller βήματα; use sparingly, because subtasks μπορεί να add overhead.",
            "**Links** express relationships like blocks/is blocked by, duplicates, or relates to."
          ]
        },
        {
          "t": "code",
          "lang": "text",
          "title": "Example work breakdown",
          "code": "Epic: Improve checkout experience\n  Story: Add saved payment methods\n    Subtask: Design UI\n    Subtask: Implement API\n    Subtask: Add tests\n  Bug: Discount code fails on mobile\n  Task: Update analytics event",
          "title_el": "Example εργασία breakdown"
        },
        {
          "t": "callout",
          "tone": "tip",
          "title": "Naming rule",
          "text": "Issue summaries should read like work, not mystery novels. \"Checkout fails when coupon has spaces\" is useful; \"Fix issue\" is not.",
          "text_el": "Issue summaries πρέπει να read like work, not mystery novels. \"Checkout fails πότε coupon has spaces\" is useful; \"Fix issue\" is not."
        }
      ],
      "keyPoints": [
        {
          "front": "What is a Jira project?",
          "back": "A container for related work items, configuration, boards, and permissions.",
          "front_el": "Τι είναι Jira project?",
          "back_el": "A container για related εργασία items, configuration, boards, και permissions."
        },
        {
          "front": "When should you use an Epic?",
          "front_el": "Πότε πρέπει να you χρησιμοποίησε an Epic?",
          "back": "For a large body of work that groups multiple related issues and needs higher-level planning/visibility.",
          "back_el": "For a large body of εργασία that groups multiple related issues και needs higher-level planning/visibility."
        },
        {
          "front": "Why should subtasks be used sparingly?",
          "front_el": "Γιατί πρέπει να subtasks be used sparingly?",
          "back": "They add tracking overhead and can make boards/reports noisier if every small step becomes a subtask.",
          "back_el": "They πρόσθεσε tracking overhead and μπορεί να make boards/αναφορές noisier if every small step becomes a subtask."
        }
      ],
      "quiz": [
        {
          "q": "Which issue type is best for a large initiative spanning several stories?",
          "options": [
            "Epic",
            "Subtask",
            "Bug",
            "Comment"
          ],
          "answer": 0,
          "why": "Epics group related child issues for higher-level planning.",
          "q_el": "Which issue type is καλύτερο για a large initiative spanning several stories?",
          "why_el": "Epics group related child issues για higher-level planning.",
          "options_el": [
            "Epic",
            "Subtask",
            "Bug",
            "Comment"
          ]
        },
        {
          "q": "What is a good reason to avoid overusing subtasks?",
          "q_el": "Τι είναι a good reason to απέφυγε overusing subtasks?",
          "options": [
            "They can create unnecessary overhead",
            "They delete parent issues",
            "They disable workflows",
            "They replace JQL"
          ],
          "options_el": [
            "They μπορεί να create unnecessary overhead",
            "They delete parent issues",
            "They disable workflows",
            "They replace JQL"
          ],
          "answer": 0,
          "why": "Subtasks are useful, but too many create management noise.",
          "why_el": "Subtasks are useful, but too many δημιούργησε management noise."
        },
        {
          "q": "What should a good issue summary do?",
          "q_el": "What πρέπει να a good issue σύνοψη do?",
          "options": [
            "Clearly describe the work/problem",
            "Hide details to save space",
            "Use only internal codes",
            "Always include the assignee name"
          ],
          "options_el": [
            "Clearly describe the work/πρόβλημα",
            "Hide details to save space",
            "Χρησιμοποίησε only internal codes",
            "Always include the assignee όνομα"
          ],
          "answer": 0,
          "why": "Clear summaries make backlog, board, and search views usable.",
          "why_el": "Clear summaries make backlog, board, και search views usable."
        }
      ]
    },
    {
      "id": "fields-and-screens",
      "title": "Fields, screens, and data quality",
      "title_el": "Πεδία, οθόνες και ποιότητα δεδομένων",
      "level": "beginner",
      "minutes": 10,
      "summary": "Capture the information teams need without turning issue creation into a tax form.",
      "summary_el": "Capture the information ομάδες need without turning issue creation into a tax form.",
      "tags": [
        "fields",
        "screens",
        "data-quality"
      ],
      "sections": [
        {
          "t": "p",
          "cls": "lead",
          "text": "Fields store information on issues. Screens control where fields appear. Good field design makes Jira useful; bad field design makes people avoid Jira.",
          "text_el": "Fields store information on issues. Screens control where πεδία appear. Good πεδίο design makes Jira useful; bad πεδίο design makes people απέφυγε Jira."
        },
        {
          "t": "h",
          "text": "Field types you will use often",
          "text_el": "Field types you will χρησιμοποίησε often"
        },
        {
          "t": "table",
          "head": [
            "Field",
            "Good for",
            "Watch out for"
          ],
          "rows": [
            [
              "Summary / Description",
              "Core context",
              "Vague summaries make search and triage hard"
            ],
            [
              "Assignee / Reporter",
              "Ownership and source",
              "Unassigned work can disappear from accountability"
            ],
            [
              "Priority / Severity",
              "Triage",
              "Too many levels cause inconsistent use"
            ],
            [
              "Labels / Components",
              "Lightweight categorization",
              "Labels sprawl without conventions"
            ],
            [
              "Custom select/list",
              "Controlled reporting",
              "Every custom field has maintenance cost"
            ]
          ],
          "rows_el": [
            [
              "Summary / Description",
              "Core context",
              "Vague summaries make search and triage hard"
            ],
            [
              "Assignee / Reporter",
              "Ownership and source",
              "Unassigned work μπορεί να disappear from accountability"
            ],
            [
              "Priority / Severity",
              "Triage",
              "Too many levels αιτία inconsistent use"
            ],
            [
              "Labels / Components",
              "Lightweight categorization",
              "Labels sprawl without conventions"
            ],
            [
              "Custom select/λίστα",
              "Controlled reporting",
              "Every custom πεδίο has maintenance cost"
            ]
          ],
          "head_el": [
            "Field",
            "Good για",
            "Watch out για"
          ]
        },
        {
          "t": "callout",
          "tone": "why",
          "title": "Why fewer fields can be better",
          "title_el": "Γιατί fewer πεδία μπορεί να be better",
          "text": "Every required field is friction. Ask whether the field is needed at creation, refinement, or close. If it is only needed for reporting once a quarter, it may not belong on the create screen.",
          "text_el": "Every απαιτούμενο πεδίο is friction. Ask whether the πεδίο is needed at creation, refinement, or close. If it is only needed for reporting once a quarter, it may not belong on the δημιούργησε οθόνη."
        },
        {
          "t": "h",
          "text": "Screen design checklist"
        },
        {
          "t": "list",
          "checked": true,
          "items": [
            "Required fields are truly required for the next decision.",
            "Field names are unambiguous and documented.",
            "Select lists have clear options and owners.",
            "Create screen is short; edit/view screens can be richer.",
            "Custom fields are reused before creating new ones."
          ],
          "items_el": [
            "Required πεδία are truly απαιτούμενο for the επόμενο decision.",
            "Field names are unambiguous and documented.",
            "Επίλεξε lists have clear options and owners.",
            "Create οθόνη is short; edit/προβολή οθόνες μπορεί να είναι richer.",
            "Custom fields are reused πριν creating νέο ones."
          ]
        },
        {
          "t": "code",
          "lang": "text",
          "title": "Good bug report fields",
          "code": "Summary: Checkout fails when coupon has spaces\nEnvironment: Production, Chrome 126\nSteps to reproduce: 1) Add item 2) Apply coupon \"SAVE 10\" 3) Submit\nExpected: Coupon accepted or clear validation error\nActual: 500 error and order not created\nSeverity: High",
          "title_el": "Good bug αναφορά πεδία"
        }
      ],
      "keyPoints": [
        {
          "front": "What is the difference between a field and a screen?",
          "front_el": "Τι είναι the difference between a πεδίο and a οθόνη?",
          "back": "A field stores data on an issue; a screen controls when and where that field is displayed for create/edit/view/transition.",
          "back_el": "A πεδίο stores data on an issue; a οθόνη controls πότε and where that πεδίο is displayed for δημιούργησε/edit/view/transition."
        },
        {
          "front": "Why should create screens stay short?",
          "front_el": "Γιατί πρέπει να δημιούργησε οθόνες stay short?",
          "back": "To reduce friction and capture only information needed to start or triage the work; details can be added later.",
          "back_el": "To reduce friction and capture only information needed to start or triage the work; details μπορεί να be added later."
        },
        {
          "front": "What is the cost of custom fields?",
          "front_el": "Τι είναι the cost of custom πεδία?",
          "back": "They add configuration, maintenance, reporting complexity, and user friction if not governed.",
          "back_el": "They πρόσθεσε configuration, maintenance, reporting complexity, and χρήστης friction if not governed."
        }
      ],
      "quiz": [
        {
          "q": "Where does Jira control which fields appear during issue creation?",
          "q_el": "Where does Jira control which πεδία appear during issue creation?",
          "options": [
            "Screen",
            "Dashboard",
            "Sprint",
            "Release"
          ],
          "answer": 0,
          "why": "Screens determine field visibility in create/edit/view/transition contexts.",
          "why_el": "Screens determine πεδίο visibility in δημιούργησε/edit/view/transition contexts.",
          "options_el": [
            "Screen",
            "Dashboard",
            "Sprint",
            "Release"
          ]
        },
        {
          "q": "What is a good practice for required fields?",
          "q_el": "Τι είναι a good practice for απαιτούμενο πεδία?",
          "options": [
            "Require only fields needed for the next decision",
            "Make every field required",
            "Avoid required fields entirely",
            "Require fields only for admins"
          ],
          "options_el": [
            "Require only πεδία needed for the επόμενο decision",
            "Make κάθε πεδίο απαιτούμενο",
            "Avoid απαιτούμενο πεδία entirely",
            "Require πεδία only for admins"
          ],
          "answer": 0,
          "why": "Required fields should support decisions, not create unnecessary friction.",
          "why_el": "Required πεδία πρέπει να support decisions, not δημιούργησε unnecessary friction."
        },
        {
          "q": "Why can labels become messy?",
          "q_el": "Γιατί μπορεί να labels become messy?",
          "options": [
            "They are free-form and can sprawl without conventions",
            "They are stored in Git",
            "They replace workflows",
            "They only work in Scrum"
          ],
          "options_el": [
            "They are free-form and μπορεί να sprawl without conventions",
            "They are stored in Git",
            "They replace workflows",
            "They only work in Scrum"
          ],
          "answer": 0,
          "why": "Labels are flexible but need naming conventions to remain useful.",
          "why_el": "Labels are flexible but need naming conventions to remain useful."
        }
      ],
      "tags_el": [
        "πεδία",
        "οθόνες",
        "data-quality"
      ]
    },
    {
      "id": "workflow-basics",
      "title": "Workflow basics: statuses and transitions",
      "title_el": "Βασικά workflow: statuses και transitions",
      "level": "beginner",
      "minutes": 11,
      "summary": "Model how work moves, and keep statuses meaningful for humans and reports.",
      "summary_el": "Model how work moves, and keep statuses meaningful for humans and αναφορές.",
      "tags": [
        "workflow",
        "statuses",
        "transitions"
      ],
      "sections": [
        {
          "t": "p",
          "cls": "lead",
          "text": "A workflow is the lifecycle of an issue. **Statuses** are where work sits. **Transitions** are how work moves. The simplest useful workflow is usually better than a perfect theoretical one.",
          "text_el": "A workflow is the lifecycle of an issue. **Statuses** are where εργασία sits. **Transitions** are how εργασία moves. The simplest useful workflow is usually better than a perfect theoretical one."
        },
        {
          "t": "h",
          "text": "A simple workflow",
          "text_el": "simple workflow"
        },
        {
          "t": "code",
          "lang": "text",
          "title": "Basic software workflow",
          "code": "To Do -> In Progress -> In Review -> Done\n                 -> Blocked -> In Progress"
        },
        {
          "t": "table",
          "head": [
            "Concept",
            "Meaning",
            "Example"
          ],
          "head_el": [
            "Concept",
            "Meaning",
            "Παράδειγμα"
          ],
          "rows": [
            [
              "Status",
              "Current state of work",
              "In Progress"
            ],
            [
              "Transition",
              "Action moving between statuses",
              "Start Progress"
            ],
            [
              "Condition",
              "Who/when can transition",
              "Only assignee can move to In Review"
            ],
            [
              "Validator",
              "What must be true before transition",
              "Resolution required when moving to Done"
            ],
            [
              "Post function",
              "What happens after transition",
              "Set resolution, assign issue, trigger event"
            ]
          ],
          "rows_el": [
            [
              "Status",
              "Current state of work",
              "In Progress"
            ],
            [
              "Transition",
              "Action moving between statuses",
              "Start Progress"
            ],
            [
              "Condition",
              "Who/when μπορεί να transition",
              "Only assignee μπορεί να move to In Review"
            ],
            [
              "Validator",
              "What πρέπει be true πριν transition",
              "Resolution απαιτούμενο when moving to Done"
            ],
            [
              "Post function",
              "What happens μετά transition",
              "Set resolution, assign issue, trigger event"
            ]
          ]
        },
        {
          "t": "callout",
          "tone": "warn",
          "title": "Status sprawl",
          "text": "Every status should answer a real question: \"What is happening now?\" If two statuses mean the same thing to the team, merge them. Too many statuses make boards and cycle-time reports hard to interpret.",
          "text_el": "Every status πρέπει να answer a real question: \"Τι είναι happening now?\" If two statuses mean the same thing to the ομάδα, merge them. Too many statuses make boards and cycle-time αναφορές hard to interpret."
        },
        {
          "t": "h",
          "text": "Design rules"
        },
        {
          "t": "list",
          "items": [
            "Statuses describe state, transitions describe action.",
            "Use clear names: \"In Review\" is better than \"Phase 3\".",
            "Make Done mean done. Define resolution/acceptance criteria.",
            "Map workflow statuses to board columns intentionally."
          ],
          "items_el": [
            "Statuses describe state, transitions describe action.",
            "Χρησιμοποίησε clear names: \"In Review\" is better than \"Phase 3\".",
            "Make Done mean done. Define resolution/acceptance criteria.",
            "Map workflow statuses to board columns intentionally."
          ]
        }
      ],
      "keyPoints": [
        {
          "front": "What is the difference between a status and a transition?",
          "front_el": "Τι είναι the difference between a status and a transition?",
          "back": "A status is the current state of an issue; a transition is the action that moves it from one status to another.",
          "back_el": "A status is the current state of an issue; a transition is the action that moves it από one status to another."
        },
        {
          "front": "Why is status sprawl harmful?",
          "front_el": "Γιατί is status sprawl harmful?",
          "back": "It confuses users and makes board mapping, cycle time, and reporting harder to interpret.",
          "back_el": "It confuses χρήστες and makes board mapping, cycle time, and reporting harder to interpret."
        },
        {
          "front": "What is a workflow validator?",
          "front_el": "Τι είναι a workflow validator?",
          "back": "A rule that must be satisfied before a transition can complete, such as requiring a field value.",
          "back_el": "A rule that must be satisfied πριν a transition μπορεί να complete, such as requiring a πεδίο value."
        }
      ],
      "quiz": [
        {
          "q": "Which workflow element checks whether a transition is allowed to complete?",
          "options": [
            "Validator",
            "Dashboard gadget",
            "Board column",
            "Label"
          ],
          "answer": 0,
          "why": "Validators enforce conditions before a transition completes.",
          "why_el": "Validators enforce conditions πριν a transition completes.",
          "q_el": "Ποιο workflow element checks whether a transition is allowed to complete?",
          "options_el": [
            "Validator",
            "Dashboard gadget",
            "Board column",
            "Label"
          ]
        },
        {
          "q": "What should a good status name communicate?",
          "q_el": "What πρέπει να a good status name communicate?",
          "options": [
            "The current state of work",
            "The assignee's name",
            "The sprint number",
            "The project budget"
          ],
          "options_el": [
            "The current state of work",
            "The assignee\\'s όνομα",
            "The sprint number",
            "The project budget"
          ],
          "answer": 0,
          "why": "Statuses should clearly describe where work sits.",
          "why_el": "Statuses πρέπει να clearly describe where work sits."
        },
        {
          "q": "What happens after a transition completes?",
          "q_el": "What happens μετά a transition completes?",
          "options": [
            "Post functions may run",
            "The project is deleted",
            "JQL stops working",
            "Issue type changes automatically"
          ],
          "answer": 0,
          "why": "Post functions execute after a transition, e.g., setting fields or firing events.",
          "why_el": "Post functions execute μετά a transition, e.g., setting πεδία or firing events.",
          "options_el": [
            "Post functions may run",
            "project is deleted",
            "JQL stops working",
            "Issue type changes automatically"
          ]
        }
      ]
    }
  ],
  "description_el": "Build the mental model: projects, εργασία items, issue types, workflows, και how a request moves από idea to done."
});
