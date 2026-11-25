/* ==========================================================================
   Module 3 — Workflows
   ========================================================================== */
(window.JIRA_COACH_CONTENT = window.JIRA_COACH_CONTENT || []).push({
  id: 'm3',
  title: 'Workflows',
  tagline: 'Design statuses and transitions that reflect real work.',
  description: 'Learn how to build workflows with clear statuses, transitions, conditions, validators, post functions, and board mappings.',
  lessons: [
    { id:'workflow-design', title:'Designing a useful workflow', level:'beginner', minutes:11, summary:'Create workflows that match how work actually happens.', tags:['workflow','design'],
      sections:[
        {t:'p',cls:'lead',text:'A workflow should model real team behavior, not an idealized process nobody follows. Start simple and add controls where they prevent real mistakes.'},
        {t:'list',items:['Map the real states of work before configuring Jira.','Use the fewest statuses that still answer important questions.','Make transitions explicit actions people understand.','Define what Done means.']},
        {t:'code',lang:'text',title:'Simple workflow',code:`Backlog -> Selected -> In Progress -> In Review -> Done
                         \-> Blocked -> In Progress`},
        {t:'callout',tone:'warn',title:'Avoid mirror statuses',text:'"QA", "In QA", "Testing", and "Ready for QA" often mean the same thing. Consolidate unless the team makes different decisions in each state.'}
      ],
      keyPoints:[
        {front:'What is the first step in workflow design?',back:'Understand the real states and decisions in the team’s process before configuring statuses and transitions.'},
        {front:'Why keep workflows simple?',back:'Simple workflows are easier to use, map to boards, and report on accurately.'},
        {front:'What should Done mean?',back:'A clearly agreed completed state, often including acceptance, review, or release criteria depending on the team.'}
      ],
      quiz:[
        {q:'What makes a workflow status useful?',options:['It represents a meaningful state for decisions/reporting','It has a unique color','It exists in every project','It requires admin rights'],answer:0,why:'Statuses should reflect meaningful work states.'},
        {q:'What is a risk of too many statuses?',options:['Confusing boards and unreliable cycle-time reporting','Faster delivery','Better JQL automatically','Fewer permissions needed'],answer:0,why:'Status sprawl makes process and metrics harder to interpret.'},
        {q:'Transitions should be named as?',options:['Clear actions','Random codes','Database columns','Usernames'],answer:0,why:'Transitions are actions users take.'}
      ]
    },
    { id:'conditions-validators', title:'Conditions, validators, and post functions', level:'intermediate', minutes:12, summary:'Add rules to transitions without blocking legitimate work.', tags:['workflow','validators'],
      sections:[
        {t:'p',cls:'lead',text:'Transition rules protect data quality and process integrity. Use them where mistakes are costly, not everywhere.'},
        {t:'table',head:['Rule','When it runs','Example'],rows:[
          ['Condition','Before transition is shown/available','Only developers can move to In Progress'],
          ['Validator','When user submits transition','Fix Version required before Release'],
          ['Post function','After transition succeeds','Set Resolution to Done, fire event']
        ]},
        {t:'callout',tone:'danger',title:'Over-restricting transitions',text:'If validators block normal work, people will find workarounds or stop updating Jira. Every rule should have a clear owner and reason.'}
      ],
      keyPoints:[
        {front:'What does a condition do?',back:'It controls whether a transition is available to a user in a given context.'},
        {front:'What does a validator do?',back:'It checks data before allowing a transition to complete.'},
        {front:'What does a post function do?',back:'It performs actions after a transition succeeds, such as updating fields or triggering events.'}
      ],
      quiz:[
        {q:'Which rule prevents a transition if a required field is missing?',options:['Validator','Condition','Post function','Dashboard filter'],answer:0,why:'Validators check input before transition completion.'},
        {q:'Which rule can hide a transition from some users?',options:['Condition','Validator','Post function','Version'],answer:0,why:'Conditions control availability/visibility of transitions.'},
        {q:'Setting Resolution after moving to Done is typically a?',options:['Post function','Condition','JQL function','Board column'],answer:0,why:'Post functions run after transition success.'}
      ]
    },
    { id:'workflow-schemes', title:'Workflow schemes and reuse', level:'intermediate', minutes:10, summary:'Assign workflows to issue types and projects with maintainable schemes.', tags:['workflow-schemes','admin'],
      sections:[
        {t:'p',cls:'lead',text:'Workflow schemes map issue types to workflows in a project. Reuse where sensible, but do not force unrelated teams into one complex workflow.'},
        {t:'list',items:['Use shared workflows for similar processes.','Allow different issue types to have different workflows when needed.','Test scheme changes in a non-production project when possible.','Document why a workflow is shared or specialized.']},
        {t:'callout',tone:'tip',title:'Change carefully',text:'Workflow changes affect active issues. Moving statuses can require mapping old statuses to new ones.'}
      ],
      keyPoints:[
        {front:'What is a workflow scheme?',back:'A configuration that maps issue types in a project to workflows.'},
        {front:'Why be careful changing workflows?',back:'Active issues may be in statuses/transitions affected by the change and may require migration mapping.'},
        {front:'When should issue types share a workflow?',back:'When their process, states, and rules are genuinely similar.'}
      ],
      quiz:[
        {q:'What does a workflow scheme map?',options:['Issue types to workflows','Users to groups','Boards to dashboards','Labels to components'],answer:0,why:'Workflow schemes assign workflows by issue type within projects.'},
        {q:'Changing a workflow on active issues may require?',options:['Status mapping/migration','Deleting the project','New licenses','Changing DNS'],answer:0,why:'Existing issues in old statuses need a valid target status.'},
        {q:'Shared workflows are good when?',options:['Processes are genuinely similar','Teams want different rules','Every issue type is unique','You want maximum complexity'],answer:0,why:'Reuse works when processes align.'}
      ]
    },
    { id:'board-mapping', title:'Mapping workflows to boards', level:'beginner', minutes:9, summary:'Make board columns reflect workflow states clearly.', tags:['boards','workflow'],
      sections:[
        {t:'p',cls:'lead',text:'Boards visualize workflow. A column can contain one or more statuses, but the mapping should be obvious to the team.'},
        {t:'code',lang:'text',title:'Column mapping example',code:`Board Column: To Do      -> Status: Backlog, Selected
Board Column: In Progress -> Status: In Progress, Blocked
Board Column: Review      -> Status: In Review
Board Column: Done        -> Status: Done`},
        {t:'callout',tone:'warn',title:'Hidden status problem',text:'If a status is not mapped to a board column, issues can disappear from the board view. Always check unmapped statuses.'}
      ],
      keyPoints:[
        {front:'How do board columns relate to workflow statuses?',back:'Board columns display issues by mapping one or more workflow statuses to each column.'},
        {front:'What happens if a status is unmapped on a board?',back:'Issues in that status may not appear in the expected board view, causing confusion.'},
        {front:'Should multiple statuses be mapped to one column?',back:'Sometimes, if it improves clarity; but avoid hiding meaningful differences the team needs to see.'}
      ],
      quiz:[
        {q:'A board column can contain?',options:['One or more statuses','Only one issue','Only subtasks','Only epics'],answer:0,why:'Columns map to statuses; multiple statuses can feed one column.'},
        {q:'An unmapped status can cause issues to?',options:['Disappear from board view','Be deleted','Lose assignee','Change project'],answer:0,why:'Unmapped statuses are not shown in mapped board columns.'},
        {q:'Board mapping should be?',options:['Clear to the team','Hidden from users','Random','Based on colors only'],answer:0,why:'The board should reflect the team’s understanding of workflow.'}
      ]
    },
    { id:'workflow-antipatterns', title:'Workflow anti-patterns', level:'intermediate', minutes:9, summary:'Spot common workflow mistakes before they become process debt.', tags:['workflow','antipatterns'],
      sections:[
        {t:'p',cls:'lead',text:'Most Jira pain comes from workflow decisions made with good intentions and no maintenance plan.'},
        {t:'list',items:['**Status graveyard:** too many statuses nobody understands.','**Validator wall:** transitions blocked by fields users cannot fill.','**Done but not done:** Done has no resolution/definition.','**One workflow for everything:** unrelated teams forced into same process.','**Invisible automation:** post functions change fields with no documentation.']},
        {t:'callout',tone:'tip',title:'Review quarterly',text:'Review workflows, fields, and automation with actual users. Unused complexity is technical debt.'}
      ],
      keyPoints:[
        {front:'What is status graveyard?',back:'A workflow with too many statuses that add confusion instead of clarity.'},
        {front:'Why is "Done but not done" dangerous?',back:'It makes reporting unreliable because issues marked Done may not actually meet completion criteria.'},
        {front:'How often should workflows be reviewed?',back:'Periodically, such as quarterly or when process pain appears, with input from actual users.'}
      ],
      quiz:[
        {q:'Which is a workflow anti-pattern?',options:['Too many unclear statuses','Clear Done criteria','Simple transitions','Documented automation'],answer:0,why:'Unclear status sprawl is a common anti-pattern.'},
        {q:'Why document post functions/automation?',options:['So changes are understandable and maintainable','To make Jira slower','Because JQL requires it','To hide behavior'],answer:0,why:'Invisible behavior creates confusion and maintenance risk.'},
        {q:'A good Done status should have?',options:['Clear completion criteria','No meaning','Random transitions','Mandatory subtasks always'],answer:0,why:'Done should be trustworthy for humans and reports.'}
      ]
    }
  ]
});