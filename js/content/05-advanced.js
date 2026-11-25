(window.JIRA_COACH_CONTENT = window.JIRA_COACH_CONTENT || []).push({
  "id": "m5",
  "title": "Advanced Jira",
  "title_el": "Προχωρημένο Jira",
  "tagline": "Automation, permissions, notifications, and scale.",
  "description": "Go beyond basics: automate work safely, control access, design notifications, and manage Jira at team and org scale.",
  "lessons": [
    {
      "id": "automation-basics",
      "title": "Automation rules",
      "title_el": "Κανόνες automation",
      "level": "intermediate",
      "minutes": 12,
      "summary": "Use Jira automation to remove repetitive work while avoiding loops and surprises.",
      "summary_el": "Χρησιμοποίησε Jira automation to remove repetitive work while avoiding loops and surprises.",
      "tags": [
        "automation",
        "rules"
      ],
      "sections": [
        {
          "t": "p",
          "cls": "lead",
          "text": "Automation rules follow **trigger -> conditions -> actions**. They save time when they are simple, visible, and owned.",
          "text_el": "Κανόνες automation follow **trigger -> conditions -> actions**. They save time πότε they are simple, visible, and owned."
        },
        {
          "t": "code",
          "lang": "text",
          "title": "Automation rule example",
          "code": "Trigger: Issue transitioned to Done\nCondition: Issue type is Bug\nAction: Comment \"Bug resolved. Please verify in next release.\"\nAction: Send Slack message to #qa-alerts",
          "title_el": "Automation rule παράδειγμα"
        },
        {
          "t": "table",
          "head": [
            "Part",
            "Purpose",
            "Example"
          ],
          "head_el": [
            "Part",
            "Purpose",
            "Παράδειγμα"
          ],
          "rows": [
            [
              "Trigger",
              "What starts the rule",
              "Issue created, field changed, scheduled"
            ],
            [
              "Condition",
              "When rule should continue",
              "If issue type = Bug"
            ],
            [
              "Action",
              "What Jira does",
              "Edit issue, comment, transition, send web request"
            ]
          ],
          "rows_el": [
            [
              "Trigger",
              "What starts the rule",
              "Issue created, πεδίο changed, scheduled"
            ],
            [
              "Condition",
              "When rule πρέπει να continue",
              "If issue τύπος = Bug"
            ],
            [
              "Action",
              "What Jira does",
              "Edit issue, comment, transition, send web request"
            ]
          ]
        },
        {
          "t": "callout",
          "tone": "danger",
          "title": "Avoid automation loops",
          "text": "A rule that transitions an issue can trigger another rule that transitions it back. Use specific conditions, audit logs, and naming/ownership.",
          "text_el": "A rule that transitions an issue μπορεί να trigger another rule that transitions it back. Χρησιμοποίησε specific conditions, audit logs, and naming/ownership."
        }
      ],
      "keyPoints": [
        {
          "front": "What are the three core parts of a Jira automation rule?",
          "front_el": "Τι είναι the three core parts of a Jira automation rule?",
          "back": "Trigger, conditions, and actions.",
          "back_el": "Trigger, conditions, και actions."
        },
        {
          "front": "What is an automation loop?",
          "front_el": "Τι είναι an automation loop?",
          "back": "When automation rules trigger each other repeatedly, causing repeated/unintended changes.",
          "back_el": "Πότε automation rules trigger each other repeatedly, causing repeated/unintended changes."
        },
        {
          "front": "What makes automation maintainable?",
          "back": "Clear naming, owner, documented purpose, narrow conditions, and audit/log review.",
          "front_el": "What κάνει automation maintainable?",
          "back_el": "Clear naming, owner, documented purpose, narrow conditions, και audit/log επανεξέτασε."
        }
      ],
      "quiz": [
        {
          "q": "Which part determines when an automation rule starts?",
          "q_el": "Which part determines πότε an automation rule starts?",
          "options": [
            "Trigger",
            "Condition",
            "Action",
            "Dashboard"
          ],
          "answer": 0,
          "why": "Triggers start automation rules.",
          "why_el": "Triggers start automation rules.",
          "options_el": [
            "Trigger",
            "Condition",
            "Action",
            "Dashboard"
          ]
        },
        {
          "q": "A rule that keeps re-triggering itself is called?",
          "options": [
            "Automation loop",
            "Sprint",
            "JQL filter",
            "Epic"
          ],
          "answer": 0,
          "why": "Loops happen when rules trigger each other or themselves.",
          "why_el": "Loops happen πότε rules trigger each other or themselves.",
          "q_el": "A rule that keeps re-triggering itself is called?",
          "options_el": [
            "Automation loop",
            "Sprint",
            "JQL filter",
            "Epic"
          ]
        },
        {
          "q": "Good automation should be?",
          "q_el": "Good automation πρέπει να be?",
          "options": [
            "Narrow, documented, and owned",
            "Hidden and complex",
            "Applied to every project by default",
            "Without conditions"
          ],
          "options_el": [
            "Narrow, documented, and owned",
            "Hidden and πολύπλοκο",
            "Applied to κάθε project by default",
            "Without conditions"
          ],
          "answer": 0,
          "why": "Maintainability and safety matter.",
          "why_el": "Maintainability και safety matter."
        }
      ]
    },
    {
      "id": "permissions-basics",
      "title": "Permissions and access",
      "level": "intermediate",
      "minutes": 11,
      "summary": "Control who can browse, create, edit, transition, and administer work.",
      "summary_el": "Control who μπορεί να browse, δημιούργησε, edit, transition, and administer work.",
      "tags": [
        "permissions",
        "security"
      ],
      "sections": [
        {
          "t": "p",
          "cls": "lead",
          "text": "Jira permissions answer: who can see or do what? Use groups/roles and schemes consistently; avoid granting permissions to individuals ad hoc.",
          "text_el": "Jira permissions answer: who μπορεί να see or do what? Χρησιμοποίησε groups/roles and schemes consistently; απέφυγε granting permissions to individuals ad hoc."
        },
        {
          "t": "table",
          "head": [
            "Concept",
            "Purpose",
            "Example"
          ],
          "head_el": [
            "Concept",
            "Purpose",
            "Παράδειγμα"
          ],
          "rows": [
            [
              "Permission scheme",
              "Project permissions set",
              "Browse Projects, Create Issues"
            ],
            [
              "Project role",
              "Role mapped to users/groups",
              "Administrators, Developers"
            ],
            [
              "Issue security level",
              "Restrict specific issues",
              "HR-only issue visibility"
            ],
            [
              "Global permission",
              "Site-wide capability",
              "Administer Jira"
            ]
          ],
          "rows_el": [
            [
              "Permission scheme",
              "Project permissions set",
              "Browse Projects, Create Issues"
            ],
            [
              "Project role",
              "Role mapped to χρήστες/groups",
              "Administrators, Developers"
            ],
            [
              "Issue security level",
              "Restrict specific issues",
              "HR-only issue visibility"
            ],
            [
              "Global permission",
              "Site-wide capability",
              "Administer Jira"
            ]
          ]
        },
        {
          "t": "callout",
          "tone": "warn",
          "title": "Least privilege",
          "text": "Give users the minimum access they need. Overly broad admin permissions create accidental configuration damage.",
          "text_el": "Give χρήστες the minimum access they need. Overly broad admin permissions δημιούργησε accidental configuration damage."
        }
      ],
      "keyPoints": [
        {
          "front": "What is a permission scheme?",
          "front_el": "Τι είναι a permission scheme?",
          "back": "A set of permissions applied to projects that determines who can perform project actions.",
          "back_el": "A set of permissions applied to projects that determines who μπορεί να perform project actions."
        },
        {
          "front": "What is issue security level used for?",
          "front_el": "Τι είναι issue security level used for?",
          "back": "Restricting visibility of specific issues within a project to certain users/groups/roles.",
          "back_el": "Restricting visibility of specific issues within a project to certain χρήστες/groups/roles."
        },
        {
          "front": "What is the least privilege principle?",
          "front_el": "Τι είναι the least privilege principle?",
          "back": "Grant only the access required to perform needed tasks, reducing risk and accidental changes.",
          "back_el": "Grant only the access απαιτούμενο to perform needed tasks, reducing risk and accidental changes."
        }
      ],
      "quiz": [
        {
          "q": "Which feature restricts visibility of specific issues?",
          "options": [
            "Issue security level",
            "Sprint goal",
            "Label",
            "Quick filter"
          ],
          "answer": 0,
          "why": "Issue security levels control issue visibility.",
          "q_el": "Ποιο feature restricts visibility of specific issues?",
          "why_el": "Issue security levels control issue visibility.",
          "options_el": [
            "Issue security level",
            "Sprint goal",
            "Label",
            "Quick filter"
          ]
        },
        {
          "q": "Best practice for granting permissions is?",
          "q_el": "Καλής πρακτική for granting permissions is?",
          "options": [
            "Use groups/roles and least privilege",
            "Grant everyone admin",
            "Assign permissions per issue manually",
            "Avoid schemes"
          ],
          "options_el": [
            "Χρησιμοποίησε groups/roles and least privilege",
            "Grant everyone admin",
            "Assign permissions per issue manually",
            "Avoid schemes"
          ],
          "answer": 0,
          "why": "Role/group-based least privilege is maintainable and safer.",
          "why_el": "Role/group-based least privilege is maintainable και safer."
        },
        {
          "q": "A permission scheme is applied to?",
          "options": [
            "Projects",
            "Individual comments",
            "Dashboards only",
            "Attachments"
          ],
          "answer": 0,
          "why": "Permission schemes define project permissions.",
          "q_el": "permission scheme is applied to?",
          "options_el": [
            "Projects",
            "Individual σχόλια",
            "Dashboards only",
            "Attachments"
          ],
          "why_el": "Permission schemes όρισε project permissions."
        }
      ],
      "title_el": "Permissions και access"
    },
    {
      "id": "notifications-integrations",
      "title": "Notifications, integrations, and apps",
      "level": "intermediate",
      "minutes": 10,
      "summary": "Send the right signals to the right people and systems.",
      "summary_el": "Send το σωστό signals to το σωστό people and systems.",
      "tags": [
        "notifications",
        "integrations"
      ],
      "sections": [
        {
          "t": "p",
          "cls": "lead",
          "text": "Notifications keep people informed, but too many create noise. Integrations connect Jira to Slack, Git, CI/CD, docs, and service tools.",
          "text_el": "Notifications keep people informed, but too many δημιούργησε noise. Integrations connect Jira to Slack, Git, CI/CD, docs, and service tools."
        },
        {
          "t": "list",
          "items": [
            "Use notification schemes thoughtfully; avoid emailing everyone on every change.",
            "Integrate commits/PRs/deployments for traceability.",
            "Use automation/webhooks for system-to-system updates.",
            "Evaluate apps for security, maintenance, and ownership before installing."
          ],
          "items_el": [
            "Χρησιμοποίησε notification schemes thoughtfully; avoid emailing everyone on κάθε change.",
            "Integrate commits/PRs/deployments for traceability.",
            "Χρησιμοποίησε automation/webhooks for system-to-system updates.",
            "Evaluate apps for security, maintenance, and ownership πριν installing."
          ]
        },
        {
          "t": "callout",
          "tone": "tip",
          "title": "Signal over noise",
          "text": "If users ignore Jira emails, the notification design has failed. Notify on actionable events.",
          "text_el": "If χρήστες ignore Jira emails, the notification design has failed. Notify on actionable events."
        }
      ],
      "keyPoints": [
        {
          "front": "What is the risk of excessive notifications?",
          "front_el": "Τι είναι the risk of excessive notifications?",
          "back": "Users ignore them, missing important updates and losing trust in the system.",
          "back_el": "Users ignore them, missing σημαντικό updates και losing trust in the system."
        },
        {
          "front": "Why integrate Jira with dev tools?",
          "front_el": "Γιατί integrate Jira with dev tools?",
          "back": "To provide traceability from issue to code, pull request, build, and deployment.",
          "back_el": "To provide traceability από issue to code, pull request, build, και deployment."
        },
        {
          "front": "What should you evaluate before installing a Jira app?",
          "front_el": "What πρέπει να you evaluate πριν installing a Jira app?",
          "back": "Security, maintenance, cost, ownership, and whether native Jira features already solve the need.",
          "back_el": "Security, maintenance, cost, ownership, και whether native Jira features already solve the need."
        }
      ],
      "quiz": [
        {
          "q": "What is a good notification principle?",
          "q_el": "Τι είναι a good notification principle?",
          "options": [
            "Notify on actionable events",
            "Email everyone for every comment",
            "Disable all notifications",
            "Only notify admins"
          ],
          "options_el": [
            "Notify on actionable events",
            "Email everyone for κάθε comment",
            "Disable όλα notifications",
            "Only notify admins"
          ],
          "answer": 0,
          "why": "Actionable signals are more effective than noise.",
          "why_el": "Actionable signals are more effective than noise."
        },
        {
          "q": "Why connect Jira to Git/CI?",
          "q_el": "Γιατί connect Jira to Git/CI?",
          "options": [
            "For traceability across delivery lifecycle",
            "To replace issue types",
            "To remove workflows",
            "To disable boards"
          ],
          "options_el": [
            "For traceability across delivery lifecycle",
            "To replace issue τύποι",
            "To remove workflows",
            "To disable boards"
          ],
          "answer": 0,
          "why": "Integrations link work items to development and deployment artifacts.",
          "why_el": "Integrations link εργασία items to development και deployment artifacts."
        },
        {
          "q": "Before installing an app, check?",
          "q_el": "Before installing an app, έλεγξε?",
          "options": [
            "Security/maintenance/need",
            "Only icon color",
            "Whether it has animations",
            "Nothing"
          ],
          "answer": 0,
          "why": "Apps have cost and operational impact.",
          "why_el": "Apps have cost και operational impact.",
          "options_el": [
            "Security/maintenance/need",
            "Only icon color",
            "Whether it has animations",
            "Nothing"
          ]
        }
      ],
      "title_el": "Notifications, integrations, και apps"
    },
    {
      "id": "admin-at-scale",
      "title": "Admin at scale and governance",
      "title_el": "Διαχείριση σε κλίμακα και governance",
      "level": "advanced",
      "minutes": 11,
      "summary": "Keep Jira healthy as teams, projects, and customizations grow.",
      "summary_el": "Keep Jira healthy as ομάδες, projects, and customizations grow.",
      "tags": [
        "admin",
        "governance",
        "scale"
      ],
      "sections": [
        {
          "t": "p",
          "cls": "lead",
          "text": "Jira at scale is a governance problem. Without owners and conventions, every team creates its own fields, statuses, and workflows.",
          "text_el": "Jira at scale is a governance πρόβλημα. Without owners and conventions, every ομάδα creates its own πεδία, statuses, and workflows."
        },
        {
          "t": "list",
          "checked": true,
          "items": [
            "Name and document schemes, custom fields, and automation rules.",
            "Assign owners for fields, workflows, and apps.",
            "Archive unused projects and fields where possible.",
            "Use templates for common project types.",
            "Review permission and notification schemes periodically."
          ],
          "items_el": [
            "Name and document schemes, custom πεδία, and automation rules.",
            "Assign owners for πεδία, workflows, and apps.",
            "Archive unused projects and πεδία where possible.",
            "Χρησιμοποίησε templates for συνηθισμένο project τύποι.",
            "Review permission and notification schemes periodically."
          ]
        },
        {
          "t": "code",
          "lang": "text",
          "title": "Governance checklist",
          "code": "Owner: Who maintains this configuration?\nPurpose: What decision/process does it support?\nScope: Which projects/teams use it?\nChange: How is it reviewed and rolled out?\nRetire: When should it be removed?"
        },
        {
          "t": "callout",
          "tone": "why",
          "title": "Governance enables speed",
          "text": "Good governance is not bureaucracy. It prevents cleanup projects that slow everyone down later.",
          "text_el": "Good governance is όχι bureaucracy. It prevents cleanup projects that slow everyone down later."
        }
      ],
      "keyPoints": [
        {
          "front": "Why is governance important in Jira?",
          "front_el": "Γιατί is governance important in Jira?",
          "back": "It prevents configuration sprawl, inconsistency, and maintenance burden as teams and projects grow.",
          "back_el": "It prevents configuration sprawl, inconsistency, and maintenance burden as ομάδες and projects grow."
        },
        {
          "front": "What should every custom field or automation rule have?",
          "front_el": "What πρέπει να every custom πεδίο or automation rule have?",
          "back": "A clear owner, purpose, and scope.",
          "back_el": "clear owner, purpose, και scope."
        },
        {
          "front": "What is a sign Jira needs governance?",
          "front_el": "Τι είναι a sign Jira needs governance?",
          "back": "Duplicate fields/statuses, unclear workflows, unused projects, and inconsistent reporting across teams.",
          "back_el": "Duplicate πεδία/statuses, unclear workflows, unused projects, and inconsistent reporting across ομάδες."
        }
      ],
      "quiz": [
        {
          "q": "What helps prevent Jira configuration sprawl?",
          "options": [
            "Ownership, conventions, and periodic review",
            "Letting everyone create anything",
            "Avoiding documentation",
            "Never archiving projects"
          ],
          "answer": 0,
          "why": "Governance controls growth and complexity.",
          "q_el": "What βοηθά prevent Jira configuration sprawl?",
          "options_el": [
            "Ownership, conventions, και periodic επανεξέτασε",
            "Letting everyone δημιούργησε anything",
            "Avoiding documentation",
            "Never archiving projects"
          ],
          "why_el": "Governance controls growth και complexity."
        },
        {
          "q": "A custom field should have?",
          "q_el": "A custom πεδίο πρέπει να have?",
          "options": [
            "Owner and purpose",
            "No name",
            "Multiple duplicate copies",
            "Random permissions"
          ],
          "options_el": [
            "Owner and purpose",
            "No όνομα",
            "Multiple duplicate copies",
            "Random permissions"
          ],
          "answer": 0,
          "why": "Ownership and purpose support maintainability.",
          "why_el": "Ownership και purpose support maintainability."
        },
        {
          "q": "Governance is valuable because it?",
          "options": [
            "Prevents future cleanup and confusion",
            "Eliminates all change",
            "Replaces teams",
            "Makes Jira optional"
          ],
          "options_el": [
            "Prevents future cleanup and confusion",
            "Eliminates όλα change",
            "Replaces ομάδες",
            "Makes Jira προαιρετικό"
          ],
          "answer": 0,
          "why": "It keeps systems usable as they scale.",
          "q_el": "Governance is valuable because it?",
          "why_el": "It keeps systems usable as they scale."
        }
      ]
    }
  ],
  "tagline_el": "Automation, permissions, notifications, και scale.",
  "description_el": "Go beyond basics: automate εργασία safely, control access, design notifications, και manage Jira at ομάδα και org scale."
});
