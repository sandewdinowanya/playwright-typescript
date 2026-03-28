# playwright-typescript

End-to-end (E2E) test automation project using **Playwright** + **TypeScript**.

This repo is set up to run Playwright tests from the `./tests` folder and generate an **HTML report**.

## Tech stack

- Node.js + npm
- TypeScript
- Playwright Test (`@playwright/test`)

## Project structure

- `playwright.config.ts` — Playwright test runner configuration
- `tests/` — test specs (example: `tests/example.spec.ts`)
- `package.json` — scripts and dev dependencies

## Prerequisites

- Node.js (LTS recommended)
- npm

## Install

```bash
npm install
```

## Run tests

Run all tests:

```bash
npm test
# or
npx playwright test
```

Run tests with Playwright UI mode:

```bash
npm run test:ui
```

## Reports

This project uses the **HTML reporter**.

Run tests and open the report:

```bash
npm run test:report
```
