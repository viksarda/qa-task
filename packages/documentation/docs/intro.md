---
sidebar_position: 1
---

# Documentation

This project contains an NX Monorepo configuration with 2 packages:

- Cypress (used for E2E tests)
- Docusaurus (used for documentation)

## Setup

Before getting started you will need to install some basic packages:

- [Node.js](https://nodejs.org/en)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Once you have installed the aforementioned packages, you can now successfully install all the dependencies inside the project:

```sh
npm install
```

Lastly you will need to create a `.env` from the template and replace the values inside:

```sh
cp .env.example .env
```

```sh
BASE_URL="https://academybugs.com/store/"
```

## Cypress

[Cypress](https://www.cypress.io/) is a handy testing framework that excels in testing web applications.

Once you have successfully added all the dependencies, you will need to replace the project variable:

```sh
npm run e2e
```

NOTE: Tests cover core features. However the application is riddled with bugs that are present in those same core features. `Because of this, some of the tests will purposefully fail because the expected outcome is unknown and not defined`

If you wish to open the Cypress GUI and go in more depth on the steps and results, you can run:

```sh
npm run e2e:debug
```

## Docusaurus

[Docusaurus](https://docusaurus.io/) is its own application with the sole purpose of storing all the information of the project, web application and more...

I used it as means to store the testing scenaios, setup instructions and to define a clear roadmap.

You can build the documentation by running:

```sh
npm run docs
```

One the build finishes and is served, you can visit `localhost:3000` to access the docs.

NOTE: If the port `3000` is already allocated, it will change the port and inform you in console how to access the documentation.


## Docker (TODO)