/* Jira Coach - reference data */
(function () {
  var RC = (window.RC = window.RC || {});
  RC.reference = {
  "jql": [
    {
      "name": "project = KEY",
      "target": "Scope",
      "effect": "Limits results to a project.",
      "example": "project = JIRA ORDER BY created DESC",
      "effect_el": "Limits results to project."
    },
    {
      "name": "status = \"In Progress\"",
      "target": "Status",
      "effect": "Filters by workflow status; quote values with spaces.",
      "example": "project = JIRA AND status = \"In Progress\"",
      "effect_el": "Filters by workflow status; quote τιμές με spaces."
    },
    {
      "name": "assignee = currentUser()",
      "target": "User",
      "effect": "Finds issues assigned to the logged-in user.",
      "effect_el": "Finds issues assigned to the logged-in χρήστης.",
      "example": "assignee = currentUser() AND resolution = Unresolved"
    },
    {
      "name": "reporter = currentUser()",
      "target": "User",
      "effect": "Finds issues reported by the logged-in user.",
      "effect_el": "Finds issues reported by the logged-in χρήστης.",
      "example": "reporter = currentUser() ORDER BY created DESC"
    },
    {
      "name": "issuetype in (Bug, Story)",
      "target": "Issue type",
      "effect": "Matches multiple issue types.",
      "example": "project = JIRA AND issuetype in (Bug, Story)"
    },
    {
      "name": "priority = High",
      "target": "Priority",
      "effect": "Filters by priority value.",
      "example": "priority = High AND resolution = Unresolved",
      "effect_el": "Filters by priority τιμή."
    },
    {
      "name": "resolution = Unresolved",
      "target": "Resolution",
      "effect": "Finds open/unresolved issues.",
      "example": "project = JIRA AND resolution = Unresolved",
      "effect_el": "Finds άνοιξε/unresolved issues."
    },
    {
      "name": "created >= -7d",
      "target": "Date",
      "effect": "Relative date filter for recent issues.",
      "example": "project = JIRA AND created >= -7d",
      "effect_el": "Relative date filter για recent issues."
    },
    {
      "name": "updated >= startOfWeek()",
      "target": "Date function",
      "effect": "Uses date functions for time windows.",
      "example": "updated >= startOfWeek() AND assignee = currentUser()",
      "effect_el": "Uses date functions για time windows."
    },
    {
      "name": "due <= endOfWeek()",
      "target": "Date",
      "effect": "Finds issues due soon.",
      "example": "due <= endOfWeek() AND resolution = Unresolved"
    },
    {
      "name": "labels = blocked",
      "target": "Labels",
      "effect": "Matches a label; labels are case-sensitive in practice depending on usage.",
      "example": "project = JIRA AND labels = blocked"
    },
    {
      "name": "component = Backend",
      "target": "Component",
      "effect": "Filters by component.",
      "example": "project = JIRA AND component = Backend"
    },
    {
      "name": "fixVersion = \"1.2.0\"",
      "target": "Version",
      "effect": "Filters by release/fix version.",
      "example": "fixVersion = \"1.2.0\" ORDER BY priority DESC"
    },
    {
      "name": "text ~ \"checkout\"",
      "target": "Text search",
      "effect": "Searches text fields using contains operator.",
      "effect_el": "Searches text πεδία using contains operator.",
      "example": "project = JIRA AND text ~ \"checkout\""
    },
    {
      "name": "status changed AFTER -1d",
      "target": "History",
      "effect": "Finds issues whose status changed recently.",
      "example": "status changed TO \"Done\" AFTER -1d"
    },
    {
      "name": "assignee in membersOf(\"jira-devs\")",
      "target": "Group",
      "effect": "Matches users in a group.",
      "example": "assignee in membersOf(\"jira-devs\") AND resolution = Unresolved",
      "effect_el": "Matches χρήστες in group."
    },
    {
      "name": "ORDER BY Rank ASC",
      "target": "Sorting",
      "effect": "Sorts by board/backlog rank.",
      "example": "project = JIRA ORDER BY Rank ASC"
    },
    {
      "name": "parent = JIRA-123",
      "target": "Hierarchy",
      "effect": "Finds child issues of a parent/epic depending on Jira setup.",
      "example": "parent = JIRA-123"
    }
  ],
  "workflow": [
    {
      "kw": "Status",
      "meaning": "Current state of an issue, such as To Do or In Progress.",
      "example": "To Do, In Progress, In Review, Done",
      "meaning_el": "Current state of an issue, όπως To Do ή In Progress."
    },
    {
      "kw": "Transition",
      "meaning": "Action that moves an issue between statuses.",
      "example": "Start Progress: To Do -> In Progress",
      "meaning_el": "Action that moves an issue μεταξύ statuses."
    },
    {
      "kw": "Condition",
      "meaning": "Controls who can see or execute a transition.",
      "meaning_el": "Controls who μπορεί να see or execute a transition.",
      "example": "Only users in Developers role can execute Start Progress"
    },
    {
      "kw": "Validator",
      "meaning": "Checks required data before a transition completes.",
      "meaning_el": "Checks απαιτούμενο data πριν a transition completes.",
      "example": "Resolution must be set before Complete transition"
    },
    {
      "kw": "Post function",
      "meaning": "Action executed after a transition succeeds.",
      "meaning_el": "Action executed μετά a transition succeeds.",
      "example": "Set Resolution = Done; fire Issue Closed event"
    },
    {
      "kw": "Assignee",
      "meaning": "Person responsible for the issue; can be set by transition/post function.",
      "meaning_el": "Person responsible for the issue; μπορεί να be set by transition/post function.",
      "example": "Post function: Assign to current user"
    },
    {
      "kw": "Resolution",
      "meaning": "Explains why an issue is closed (Done, Won't Do, Duplicate, etc.).",
      "meaning_el": "Explains γιατί an issue is closed (Done, Won\\'t Do, Duplicate, etc.).",
      "example": "Validator: require Resolution when moving to Done"
    },
    {
      "kw": "Workflow scheme",
      "meaning": "Maps issue types to workflows within a project.",
      "example": "Bug -> Bug Workflow; Story/Task -> Software Workflow",
      "meaning_el": "Maps issue types to workflows εντός a project."
    },
    {
      "kw": "Status category",
      "meaning": "High-level grouping: To Do, In Progress, Done; used in reports.",
      "meaning_el": "High-level grouping: To Do, In Progress, Done; used in αναφορές.",
      "example": "In Review should usually map to In Progress category"
    }
  ],
  "automation": [
    {
      "stmt": "Trigger: Issue created",
      "purpose": "Runs when a new issue is created.",
      "purpose_el": "Runs πότε a new issue is created.",
      "example": "Trigger: Issue created\nCondition: issuetype = Bug\nAction: Add comment \"Triage needed\""
    },
    {
      "stmt": "Trigger: Field value changed",
      "purpose": "Runs when a field changes.",
      "purpose_el": "Runs πότε a πεδίο changes.",
      "example": "Trigger: Field value changed (Status)\nCondition: Status = Done\nAction: Set Resolution = Done"
    },
    {
      "stmt": "Trigger: Scheduled",
      "purpose": "Runs on a schedule using JQL.",
      "example": "Trigger: Scheduled daily\nJQL: status = \"In Review\" AND updated <= -2d\nAction: Send reminder",
      "purpose_el": "Runs on schedule using JQL."
    },
    {
      "stmt": "Condition: Issue fields condition",
      "purpose": "Checks issue fields before actions run.",
      "purpose_el": "Checks issue πεδία πριν actions run.",
      "example": "Condition: issuetype = Bug AND priority = High"
    },
    {
      "stmt": "Action: Edit issue",
      "purpose": "Updates fields on the issue.",
      "purpose_el": "Updates πεδία on the issue.",
      "example": "Action: Edit issue\nField: Assignee = {{issue.reporter}}"
    },
    {
      "stmt": "Action: Transition issue",
      "purpose": "Moves issue through workflow.",
      "example": "Action: Transition issue to \"In Progress\""
    },
    {
      "stmt": "Action: Send web request",
      "purpose": "Calls external systems/webhooks.",
      "example": "Action: Send web request to Slack/Teams endpoint"
    },
    {
      "stmt": "Branch: For subtasks / related issues",
      "purpose": "Apply actions to related issues.",
      "example": "Branch: Subtasks\nAction: Transition subtask to Done"
    },
    {
      "stmt": "Audit log",
      "purpose": "Review automation executions, failures, and loop risks.",
      "example": "Check rule audit log after enabling a new rule",
      "purpose_el": "Review automation executions, failures, και loop risks."
    }
  ],
  "naming": [
    {
      "artifact": "Project key",
      "convention": "Short uppercase key",
      "example": "JIRA, TEAM, HELP"
    },
    {
      "artifact": "Issue summary",
      "convention": "Clear action/problem statement",
      "example": "Checkout fails when coupon has spaces"
    },
    {
      "artifact": "Component",
      "convention": "Product/system area",
      "example": "Frontend, API, Billing"
    },
    {
      "artifact": "Version",
      "convention": "Release identifier",
      "example": "1.2.0, 2026.05"
    },
    {
      "artifact": "Label",
      "convention": "lowercase-hyphen or consistent team convention",
      "example": "blocked, needs-triage"
    },
    {
      "artifact": "Status",
      "convention": "State, not action",
      "example": "In Review"
    },
    {
      "artifact": "Transition",
      "convention": "Action verb",
      "example": "Submit for Review"
    },
    {
      "artifact": "Automation rule",
      "convention": "[Team/Area] Purpose - Owner",
      "example": "[Checkout] Bug triage - Platform Team"
    },
    {
      "artifact": "Saved filter",
      "convention": "[Project/Team] Purpose",
      "example": "[TEAM] Unresolved bugs"
    }
  ],
  "snippets": [
    {
      "title": "Board filter",
      "lang": "jql",
      "note": "Use as a Scrum/Kanban board filter.",
      "note_el": "Χρησιμοποίησε as a Scrum/Kanban board filter.",
      "code": "project = TEAM AND issuetype in (Story, Bug, Task) AND statusCategory != Done ORDER BY Rank ASC"
    },
    {
      "title": "My open issues",
      "lang": "jql",
      "note": "Useful personal dashboard/filter.",
      "code": "assignee = currentUser() AND resolution = Unresolved ORDER BY priority DESC, updated DESC",
      "title_el": "My άνοιξε issues"
    },
    {
      "title": "Recently completed",
      "lang": "jql",
      "note": "Track recently done work.",
      "code": "project = TEAM AND status changed TO Done AFTER -7d ORDER BY updated DESC",
      "note_el": "Track recently done εργασία."
    },
    {
      "title": "Bugs due soon",
      "lang": "jql",
      "note": "Triage upcoming bug deadlines.",
      "code": "project = TEAM AND issuetype = Bug AND resolution = Unresolved AND due <= endOfWeek() ORDER BY due ASC"
    },
    {
      "title": "Simple workflow",
      "lang": "text",
      "note": "A clean starting workflow.",
      "code": "To Do -> In Progress -> In Review -> Done\nIn Review -> In Progress (Request Changes)\nValidator on Complete: Resolution required\nPost function on Complete: Set Resolution = Done",
      "note_el": "clean starting workflow."
    },
    {
      "title": "Automation: stale review reminder",
      "lang": "text",
      "note": "Scheduled rule pattern.",
      "code": "Trigger: Scheduled weekdays 9:00 AM\nJQL: project = TEAM AND status = \"In Review\" AND updated <= -2d\nAction: Comment \"This issue has been in review for 2+ days.\"\nAction: Notify assignee",
      "title_el": "Automation: stale επανεξέτασε reminder"
    }
  ],
  "glossary": [
    {
      "term": "Issue / Work item",
      "def": "A unit of work tracked in Jira, such as a story, bug, task, or epic.",
      "def_el": "A unit of εργασία tracked in Jira, όπως a story, bug, task, ή epic."
    },
    {
      "term": "Project",
      "def": "A container for issues, configuration, and boards.",
      "def_el": "A container για issues, configuration, και boards."
    },
    {
      "term": "Issue type",
      "def": "Category of work that can influence fields, workflow, and behavior.",
      "def_el": "Category of work that μπορεί να influence πεδία, workflow, and behavior."
    },
    {
      "term": "Workflow",
      "def": "Statuses and transitions that define how issues move through a process.",
      "def_el": "Statuses και transitions that όρισε how issues move through a διαδικασία."
    },
    {
      "term": "Status category",
      "def": "High-level Jira grouping: To Do, In Progress, Done."
    },
    {
      "term": "JQL",
      "def": "Jira Query Language for searching issues.",
      "def_el": "Jira Query Language για searching issues."
    },
    {
      "term": "Board",
      "def": "Visual view of issues, typically Scrum or Kanban, powered by a filter and column mapping.",
      "def_el": "Visual προβολή of issues, typically Scrum ή Kanban, powered by a filter και column mapping."
    },
    {
      "term": "Sprint",
      "def": "A fixed timebox used by Scrum teams to plan and complete work.",
      "def_el": "A fixed timebox used by Scrum ομάδες to plan and complete work."
    },
    {
      "term": "Backlog",
      "def": "List of work items to be prioritized and planned.",
      "def_el": "List of εργασία items to be prioritized και planned."
    },
    {
      "term": "Component",
      "def": "A project sub-area used for categorization and ownership.",
      "def_el": "A project sub-area used για categorization και ownership."
    },
    {
      "term": "Fix version",
      "def": "Version/release field used for release planning and tracking.",
      "def_el": "Version/release πεδίο used for release planning and tracking."
    },
    {
      "term": "Automation rule",
      "def": "Trigger-condition-action rule that automates Jira behavior."
    },
    {
      "term": "Permission scheme",
      "def": "Set of permissions applied to a project."
    },
    {
      "term": "Notification scheme",
      "def": "Configuration that determines who receives notifications for events.",
      "def_el": "Configuration that determines who receives notifications για events."
    },
    {
      "term": "Issue security level",
      "def": "Restriction controlling who can view specific issues.",
      "def_el": "Restriction controlling who μπορεί να view specific issues."
    }
  ],
  "troubleshooting": [
    {
      "title": "Issue missing from board",
      "symptom": "An issue exists but does not appear on the board.",
      "cause": "Board filter excludes it, status is unmapped, or quick filter hides it.",
      "fix": "Check board filter JQL, column/status mapping, quick filters, and issue type/project scope.",
      "fix_el": "Έλεγξε board filter JQL, column/status mapping, quick filters, and issue type/project scope.",
      "code": "project = TEAM AND statusCategory != Done ORDER BY Rank ASC",
      "title_el": "Issue missing από board",
      "symptom_el": "An issue exists but does όχι appear on the board.",
      "cause_el": "Board filter excludes it, status is unmapped, ή quick filter hides it."
    },
    {
      "title": "Cannot transition issue",
      "symptom": "Transition button is missing or fails.",
      "cause": "Workflow condition, validator, missing permission, or wrong status.",
      "fix": "Check workflow conditions/validators, user permissions, and current issue status.",
      "fix_el": "Έλεγξε workflow conditions/validators, χρήστης permissions, and current issue status.",
      "code": "Validator: Resolution required when transitioning to Done",
      "symptom_el": "Transition button is missing ή fails.",
      "cause_el": "Workflow condition, validator, missing permission, ή λάθος status."
    },
    {
      "title": "Field not visible on create screen",
      "title_el": "Field not visible on δημιούργησε οθόνη",
      "symptom": "A field exists but users cannot see it when creating issues.",
      "symptom_el": "A πεδίο exists but χρήστες δεν μπορεί να see it πότε creating issues.",
      "cause": "Field not on screen, wrong screen scheme, or field context/issue type mismatch.",
      "cause_el": "Field not on οθόνη, wrong οθόνη scheme, or πεδίο context/issue type mismatch.",
      "fix": "Check screen, screen scheme, issue type screen scheme, and custom field context.",
      "fix_el": "Έλεγξε οθόνη, οθόνη scheme, issue type οθόνη scheme, and custom πεδίο context.",
      "code": "Project settings > Screens > Create issue screen"
    },
    {
      "title": "Required field blocks transition",
      "title_el": "Required πεδίο blocks transition",
      "symptom": "Users cannot complete a transition due to missing field.",
      "symptom_el": "Users δεν μπορεί να complete a transition due to missing πεδίο.",
      "cause": "Validator requires field that is not on transition screen or not filled.",
      "cause_el": "Validator requires πεδίο that is not on transition οθόνη or not filled.",
      "fix": "Add field to transition screen or adjust validator; ensure users can provide value.",
      "fix_el": "Πρόσθεσε πεδίο to transition οθόνη or adjust validator; ensure χρήστες μπορεί να provide value.",
      "code": "Validator: Field \"Fix Version\" is required"
    },
    {
      "title": "JQL returns unexpected results",
      "symptom": "Search results include wrong issues or miss expected ones.",
      "cause": "Incorrect field/operator, missing quotes, wrong project scope, or permissions.",
      "cause_el": "Incorrect πεδίο/operator, missing quotes, wrong project scope, or permissions.",
      "fix": "Simplify query, test clauses incrementally, quote spaced values, and confirm permissions.",
      "code": "status = \"In Progress\" AND project = TEAM",
      "symptom_el": "Search results include λάθος issues ή miss expected ones.",
      "fix_el": "Simplify query, test clauses incrementally, quote spaced τιμές, και confirm permissions."
    },
    {
      "title": "JQL function error",
      "symptom": "JQL fails with function/syntax error.",
      "cause": "Missing parentheses, unsupported function, or typo.",
      "fix": "Use correct function syntax and supported JQL functions for your Jira product.",
      "fix_el": "Χρησιμοποίησε correct function syntax and supported JQL functions for your Jira product.",
      "code": "assignee = currentUser()",
      "symptom_el": "JQL fails με function/syntax error.",
      "cause_el": "Missing parentheses, unsupported function, ή typo."
    },
    {
      "title": "Automation rule did not run",
      "symptom": "Expected automation action never happened.",
      "cause": "Trigger/condition mismatch, rule disabled, scope/project mismatch, or permissions.",
      "fix": "Check audit log, rule scope, trigger, conditions, and actor permissions.",
      "fix_el": "Έλεγξε audit log, rule scope, trigger, conditions, and actor permissions.",
      "code": "Automation > Rule > Audit log",
      "title_el": "Automation rule did όχι run",
      "cause_el": "Trigger/condition mismatch, rule disabled, scope/project mismatch, ή permissions."
    },
    {
      "title": "Automation loop",
      "symptom": "Rule keeps firing or issues repeatedly change.",
      "cause": "Rule triggers itself or another rule creates a feedback loop.",
      "fix": "Add narrow conditions, avoid transition loops, use rule actor carefully, and check audit log.",
      "fix_el": "Πρόσθεσε narrow conditions, απέφυγε transition loops, χρησιμοποίησε rule actor carefully, and έλεγξε audit log.",
      "code": "Condition: {{initiator}} is not Automation for Jira",
      "symptom_el": "Rule keeps firing ή issues repeatedly change.",
      "cause_el": "Rule triggers itself ή another rule creates a feedback loop."
    },
    {
      "title": "Notification noise",
      "symptom": "Users receive too many Jira emails/alerts.",
      "cause": "Broad notification scheme or noisy automation.",
      "fix": "Review notification scheme and automation actions; notify only on actionable events.",
      "code": "Notification scheme: Issue Updated -> watchers only (example)",
      "cause_el": "Broad notification scheme ή noisy automation.",
      "fix_el": "Review notification scheme και automation actions; notify only on actionable events."
    },
    {
      "title": "User cannot see project/issues",
      "title_el": "User δεν μπορεί να see project/issues",
      "symptom": "A user gets permission errors or empty project.",
      "symptom_el": "A χρήστης gets permission errors or empty project.",
      "cause": "Missing Browse Projects permission, issue security, or filter restriction.",
      "fix": "Check permission scheme, project role/group membership, and issue security levels.",
      "fix_el": "Έλεγξε permission scheme, project role/group membership, and issue security levels.",
      "code": "Project settings > Permissions > Browse Projects",
      "cause_el": "Missing Browse Projects permission, issue security, ή filter restriction."
    },
    {
      "title": "Done issues look incomplete",
      "symptom": "Issues are Done but missing resolution or still appear in open reports.",
      "symptom_el": "Issues are Done but missing resolution or still appear in open αναφορές.",
      "cause": "Workflow does not set Resolution or board/report uses wrong status criteria.",
      "cause_el": "Workflow does not set Resolution or board/αναφορά uses wrong status criteria.",
      "fix": "Add Resolution post function/validator and align reports with statusCategory/resolution.",
      "fix_el": "Πρόσθεσε Resolution post function/validator and align αναφορές with statusCategory/resolution.",
      "code": "resolution = Unresolved"
    },
    {
      "title": "Board columns do not match workflow",
      "symptom": "Issues appear in wrong column or disappear.",
      "cause": "Column-status mapping outdated after workflow changes.",
      "cause_el": "Column-status mapping outdated μετά workflow changes.",
      "fix": "Update board column mapping and map all statuses.",
      "code": "Board settings > Columns",
      "title_el": "Board columns do όχι match workflow",
      "symptom_el": "Issues appear in λάθος column ή disappear.",
      "fix_el": "Update board column mapping και map όλα statuses."
    },
    {
      "title": "Sprint scope confusion",
      "symptom": "Issues unexpectedly move between sprints or reports look wrong.",
      "symptom_el": "Issues unexpectedly move between sprints or αναφορές look wrong.",
      "cause": "Issues incomplete at sprint close, moved manually, or filter mismatch.",
      "fix": "Review sprint close behavior, board filter, and issue status at sprint end.",
      "code": "Sprint report vs Burndown scope",
      "cause_el": "Issues incomplete at sprint close, moved manually, ή filter mismatch.",
      "fix_el": "Review sprint close behavior, board filter, και issue status at sprint end."
    },
    {
      "title": "Duplicate issues",
      "symptom": "Same problem tracked in multiple issues.",
      "symptom_el": "Same πρόβλημα tracked in multiple issues.",
      "cause": "No triage/search process or unclear intake.",
      "fix": "Search before creating, link duplicates, and close per team process.",
      "fix_el": "Search πριν creating, link duplicates, and close per ομάδα process.",
      "code": "issuekey in linkedIssues(JIRA-123, \"duplicates\")",
      "cause_el": "No triage/search διαδικασία ή unclear intake."
    },
    {
      "title": "Custom field clutter",
      "symptom": "Too many similar/confusing fields.",
      "symptom_el": "Too many similar/confusing πεδία.",
      "cause": "No field governance or ownership.",
      "cause_el": "No πεδίο governance or ownership.",
      "fix": "Audit fields, merge/reuse where possible, define owners, and restrict creation.",
      "fix_el": "Audit πεδία, merge/reuse where possible, define owners, and restrict creation.",
      "code": "Admin > Issues > Custom fields"
    },
    {
      "title": "Dashboard is misleading",
      "symptom": "Charts look wrong or contradict team reality.",
      "symptom_el": "Charts look wrong or contradict ομάδα reality.",
      "cause": "Bad JQL, inconsistent status/resolution hygiene, or wrong gadget config.",
      "fix": "Validate gadget filters, check issue hygiene, and use metrics with clear definitions.",
      "fix_el": "Validate gadget filters, έλεγξε issue hygiene, and χρησιμοποίησε metrics with clear definitions.",
      "code": "Filter Results gadget: project = TEAM AND resolution = Unresolved",
      "cause_el": "Bad JQL, inconsistent status/resolution hygiene, ή λάθος gadget config."
    },
    {
      "title": "Attachments/comments missing context",
      "symptom": "Issues lack reproduction steps or evidence.",
      "cause": "Create/edit screen lacks guidance; team process unclear.",
      "cause_el": "Δημιούργησε/edit οθόνη lacks guidance; ομάδα process unclear.",
      "fix": "Add description templates/guidance and require key info at appropriate stage.",
      "fix_el": "Πρόσθεσε description templates/guidance and require key info at appropriate stage.",
      "code": "Description template: Steps / Expected / Actual",
      "title_el": "Attachments/σχόλια missing context",
      "symptom_el": "Issues lack reproduction steps ή evidence."
    },
    {
      "title": "Permission changes broke work",
      "symptom": "Users suddenly cannot edit/transition.",
      "symptom_el": "Users suddenly δεν μπορεί να edit/transition.",
      "cause": "Scheme change applied broadly without testing.",
      "fix": "Review recent scheme changes, test with affected role, and apply least-privilege fixes.",
      "code": "Project settings > Permissions",
      "title_el": "Permission changes broke εργασία",
      "cause_el": "Scheme change applied broadly χωρίς testing.",
      "fix_el": "Review recent scheme changes, test με affected role, και apply least-privilege fixes."
    },
    {
      "title": "Release reporting inaccurate",
      "symptom": "Fix version/release reports are wrong.",
      "symptom_el": "Fix version/release αναφορές are wrong.",
      "cause": "Issues missing fix version or versions not maintained.",
      "fix": "Define version process, set fixVersion at appropriate workflow stage, and review release scope.",
      "code": "fixVersion = \"1.2.0\"",
      "cause_el": "Issues missing fix version ή versions όχι maintained.",
      "fix_el": "Define version διαδικασία, set fixVersion at appropriate workflow stage, και επανεξέτασε release scope."
    },
    {
      "title": "Slow triage",
      "symptom": "New issues pile up untriaged.",
      "cause": "No owner, unclear priority rules, or missing filters/dashboard.",
      "fix": "Create triage filter/dashboard, define priority criteria, and assign triage owner/rotation.",
      "fix_el": "Δημιούργησε triage filter/dashboard, define priority criteria, and assign triage owner/rotation.",
      "code": "project = TEAM AND status = \"To Do\" AND assignee is EMPTY ORDER BY created ASC",
      "cause_el": "No owner, unclear priority rules, ή missing filters/dashboard."
    }
  ],
  "resources": [
    {
      "label": "Atlassian Support - Jira Software Cloud",
      "url": "https://support.atlassian.com/jira-software-cloud/",
      "note": "Official product documentation and how-tos.",
      "note_el": "Official product documentation και how-tos."
    },
    {
      "label": "Atlassian - JQL",
      "url": "https://support.atlassian.com/jira-service-management-cloud/docs/use-advanced-search-with-jira-query-language-jql/",
      "note": "JQL syntax, fields, operators, and functions.",
      "note_el": "JQL syntax, πεδία, operators, and functions."
    },
    {
      "label": "Atlassian - Jira automation",
      "url": "https://support.atlassian.com/cloud-automation/docs/jira-cloud-automation/",
      "note": "Automation rules, triggers, conditions, actions, and audit logs.",
      "note_el": "Κανόνες automation, triggers, conditions, actions, and audit logs."
    },
    {
      "label": "Atlassian - Workflows",
      "url": "https://support.atlassian.com/jira-cloud-administration/docs/manage-issue-workflows/",
      "note": "Workflow statuses, transitions, schemes, and best practices.",
      "note_el": "Workflow statuses, transitions, schemes, και καλύτερο practices."
    },
    {
      "label": "Atlassian Community",
      "url": "https://community.atlassian.com/",
      "note": "Questions, answers, and real-world Jira patterns.",
      "note_el": "Questions, απαντήσεις, και real-world Jira patterns."
    }
  ]
};
})();
