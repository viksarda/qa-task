---
sidebar_position: 1
---

# Patch Notes

This page is dedicated to keep track of changes

---

## Task 1 (24.1.25)

### Add initial project structure with documentation and Cypress

#### Description

PR changes consist of implementing baseline solution for documentation and cypress. Along side:
- Structured documentation pages
- Added initial specs
- Updated project structure to recognize newly added packages
- Added optional dependencies such as Prettier, dotenv, mocha
- Added scripts to run core functions (run documentation, cypress and prettier)
- Added Global variables to the monorepo

#### Instructions

To to start setting up the project, you first need `node` and `npm`

Afterwards navigate to the root directory and run:

1. `npm i`

2. `cp .env.example .env`

3. Lastly replace the `BASE_URL`  with any valid URL in order to check values are injected correctly when executing the tests

Now you should be able to open the documentation and execute Cypress tests

- `npm run docs` (Build and serve documentation)
- `npm run e2e` (Execute E2E tests)

---

## Task 2 (25.1.25)

### 