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

### Define all of the testing scenarios and refactor all of the documentation

#### Description

PR changes consist of updating all of the documentation in docusaurus as well as implementing all of the core test scenarios for the application. Along side:
- Removing CI/CD script (temporarily)

#### Instructions

To see the documentation and scenarios, run:

- `npm run docs` (Build and serve documentation)

---

## Task 3 (25.1.25)

### Implement homepage spec

#### Description

PR changes consist of implementing the homepage spec. Along side:
- Added `homepageCommands.ts` helper
- Added `products.ts` containing information of the products
- Updated `.env` file to include number of retries for failing tests

#### Instructions

To run the spec, run:

- `npm run e2e`

---

## Task 4 (26.1.25)

### Implement product spec

#### Description

PR changes consist of implementing the product spec. Along side:
- Added `productCommands.ts` and `myCartCommands.ts` helpers
- Updated and added new fixtures
- Updated a the `Post a comment on a product` scenario to match the rest in the category

#### Instructions

To run the spec, run:

- `npm run e2e`

---

## Task 5 (26.1.25)

### Implement my-cart spec

#### Description

PR changes consist of implementing the my-cart spec. Along side:
- Refactoring fixtures and adding new ones
- Updated some scenarios for better coverage

#### Instructions

To run the spec, run:

- `npm run e2e`