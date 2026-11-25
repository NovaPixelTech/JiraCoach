# Jira Coach

[![Deploy to GitHub Pages](https://github.com/NovaPixelTech/JiraCoach/actions/workflows/deploy.yml/badge.svg)](https://github.com/NovaPixelTech/JiraCoach/actions/workflows/deploy.yml)

A local-first study app for **Atlassian Jira**. It combines a structured course, spaced-repetition flashcards, quizzes, a Jira setup scaffolder, a heuristic configuration doctor, a reference library, and a place to keep your own Jira examples.

No install, no server, no account. Everything runs in the browser and your progress stays on your machine.

**Live app:** https://novapixeltech.github.io/JiraCoach/

---

## Quick start

1. Open the folder.
2. Double-click **`index.html`**.
3. That's it.

Works in current Chrome, Edge, Firefox and Safari. It loads from `file://`, needs no network connection, and has no build step.

> If your browser is configured to block local storage for local files, progress will not persist. Use a normal browser profile, or serve the folder with any static file server (`python -m http.server`) and open `http://localhost:8000`.

---

## Deployment

The app is plain static HTML, CSS and JavaScript, so GitHub Pages can host it directly with no build step.

- **Live site:** https://novapixeltech.github.io/JiraCoach/
- **Repository:** https://github.com/NovaPixelTech/JiraCoach
- **Pipeline:** every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), uploads the repository as a Pages artifact and publishes it.
- **Pages source:** Settings -> Pages -> Build and deployment -> Source: **GitHub Actions**.
- **Base path:** all asset URLs are relative, so the site works correctly under the `/JiraCoach/` project path.
- **Manual deploy:** Actions -> **Deploy to GitHub Pages** -> **Run workflow**.

To publish changes, commit and push to `main`:

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

---

## What is inside

| Area | What it does |
| --- | --- |
| **Dashboard** | Daily goal, streak, next lesson, due cards, quick entry points. |
| **Learn** | 6 modules, 27 lessons, from Jira fundamentals to practice and troubleshooting. Filter by level, module or text. |
| **Lesson** | Full lesson text, examples, comparison tables, key points becoming flashcards, per-lesson quiz, personal notes, completion tracking. |
| **Practice** | Due-first flashcard review with SM-2-style scheduling (Again / Hard / Good / Easy), mixed quizzes, and your own cards. |
| **Lab** | Jira project scaffolder and configuration doctor. |
| **Examples** | Personal library of Jira examples (create, edit, delete, filter, copy). |
| **Reference** | JQL, workflows, automation, naming conventions, snippets, glossary, curated Atlassian links. |
| **Troubleshoot** | Searchable library of 20 common Jira issues with symptom, cause, fix and example. |
| **Settings** | Name, daily goal, new-card limit, theme, JSON export/import, reset, study stats. |
| **Command palette** | `Ctrl/Cmd + K` (or `/`) searches lessons, examples and references. Prefix with `>` to run commands only. |

### Curriculum

1. **Foundations** - what Jira is, work items, projects, issue types, and the end-to-end workflow.
2. **Work items & fields** - issue types, fields, screens, priorities, labels, components, and versions.
3. **Workflows** - statuses, transitions, conditions, validators, post functions, and board mapping.
4. **Boards & JQL** - Scrum/Kanban boards, filters, JQL queries, dashboards, and reports.
5. **Advanced** - automation, permissions, notifications, apps/integrations, and administration at scale.
6. **Practice** - project setup, troubleshooting, governance, and review checklists.

### Jira project scaffolder

Produces a consistent starting point from a short description:

- Project key and setup checklist
- Issue type and workflow recommendations
- Board/filter/JQL starters
- Automation rule skeletons
- Permission/notification considerations
- Step-by-step setup order and caveats

### Configuration doctor

Paste workflow, JQL, or automation text and get heuristic findings: missing transitions, JQL pitfalls, permission gaps, automation loop risks, and more. It is a linting aid, not an Atlassian validator.

---

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| `Ctrl/Cmd + K` or `/` | Open command palette |
| `↑` / `↓` | Move in palette |
| `Enter` | Open selection / next quiz question |
| `Esc` | Close palette, modal or mobile nav |
| `1`-`4` | Answer a quiz question |
| `Space` | Reveal the flashcard |
| `1`-`4` | Grade a revealed card (Again / Hard / Good / Easy) |

---

## Your data

- Stored in `localStorage` under the key **`jiracoach.v1`**.
- Nothing is uploaded anywhere. There is no telemetry and no network call.
- **Settings -> Export** downloads a JSON snapshot. **Import** restores one. Export before clearing the browser profile.
- **Settings -> Reset** clears progress and personal content after a confirmation.

---

## Project layout

```text
index.html              App shell + script load order
assets/styles.css       Design tokens, layout, components, responsive rules
js/store.js             State, persistence, SRS, streaks, examples, import/export
js/reference.js         JQL, workflow, automation, glossary, troubleshooting, links
js/code.js              Syntax highlighting, generator, linter, copy registry
js/ui.js                Shell, markdown-lite renderer, palette, modal, toast
js/views.js             One function per route
js/app.js               Boot, hash routing, global keys, palette sources
js/content/01-foundations.js ... 06-practice.js
                        Course modules and lessons (data only)
```

Load order matters: content files must load **before** `store.js`, because the store builds the lesson/card index at startup. `store.js` must load before the UI and views.

---

## Limits

- The generator emits a sensible starting point, not a production-ready Jira configuration for every team. Adjust names, schemes, and permissions to your process.
- The configuration doctor is pattern-based. It catches common mistakes but does not replace Jira validation or admin review.
- Content reflects common Jira Software Cloud practices; check Atlassian documentation for product-specific behavior.
- This is an independent study tool, not an Atlassian product. Jira and Atlassian are trademarks of Atlassian.
