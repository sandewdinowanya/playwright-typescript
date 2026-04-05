# Playwright + TypeScript Test Suite

A browser end-to-end test project built with [Playwright](https://playwright.dev/) and TypeScript. It demonstrates how to write, organise, and run automated UI tests across Chromium, Firefox, and WebKit.

---

## Prerequisites

| Tool | Version |
|------|---------|
| [Node.js](https://nodejs.org/) | 18 or later |
| npm (bundled with Node.js) | — |

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sandewdinowanya/playwright-typescript.git
   cd playwright-typescript
   ```

2. **Install Node.js dependencies**

   ```bash
   npm install
   ```

3. **Install Playwright browsers** (Chromium, Firefox, WebKit)

   ```bash
   npx playwright install
   ```

---

## Running Tests

### All tests (headed mode — default)

The project is configured to run **headed** (browser window visible) with a 1 s slow-motion delay so you can follow what is happening:

```bash
npm test
# or directly:
npx playwright test
```

### Headless mode

```bash
npx playwright test --headless
```

### Headed mode (explicit)

```bash
npm run test:headed
# or directly:
npx playwright test --headed
```

### Interactive UI mode

Opens the Playwright Test UI for step-by-step test exploration:

```bash
npm run test:ui
# or directly:
npx playwright test --ui
```

### Run a single test file

```bash
npx playwright test tests/example.spec.ts
```

### Run tests matching a title

```bash
npx playwright test -g "has title"
```

### Run tests in a specific browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### View the HTML report

After a test run an HTML report is generated automatically. Open it with:

```bash
npm run report
# or directly:
npx playwright show-report
```

---

## npm Scripts Reference

| Script | Command | Description |
|--------|---------|-------------|
| `npm test` | `npx playwright test` | Run all tests |
| `npm run test:headed` | `npx playwright test --headed` | Run all tests with browser visible |
| `npm run test:ui` | `npx playwright test --ui` | Open the interactive Playwright UI |
| `npm run report` | `npx playwright show-report` | Open the last HTML report |

---

## Project Structure

```
playwright-typescript/
├── tests/                    # All test files
│   ├── example.spec.ts       # Playwright.dev smoke tests
│   ├── mytest.spec.ts        # Google search example
│   ├── login.demo.spec.ts    # Login demo (TypeScript)
│   └── login.demo.spec.js    # Login demo (JavaScript)
├── playwright.config.ts      # Playwright configuration
├── package.json              # Node dependencies & scripts
└── README.md
```

---

## Adding New Tests

1. Create a new file inside the `tests/` directory, e.g. `tests/my-feature.spec.ts`.
2. Import Playwright's test helpers and write your tests:

   ```typescript
   import { test, expect } from '@playwright/test';

   test('page loads correctly', async ({ page }) => {
     await page.goto('https://example.com');
     await expect(page).toHaveTitle(/Example/);
   });
   ```

3. Run your new test file:

   ```bash
   npx playwright test tests/my-feature.spec.ts
   ```

---

## Configuration Highlights (`playwright.config.ts`)

| Setting | Value | Notes |
|---------|-------|-------|
| `testDir` | `./tests` | All spec files must live here |
| `fullyParallel` | `true` | Files run in parallel by default |
| `reporter` | `html` | Report saved to `playwright-report/` |
| `headless` | `false` | Headed by default; override with `--headless` |
| `slowMo` | 1000 ms | Slows each action for visibility |
| `trace` | `on-first-retry` | Trace captured when a test is retried |
| Browsers | Chromium, Firefox, WebKit | All three run by default |

---

## CI Usage

The configuration automatically detects a CI environment via the `CI` environment variable:

- **Retries**: tests are retried up to **2 times** on CI (`retries: 2`).
- **Workers**: reduced to **1** worker on CI to avoid resource contention.
- **Forbidden `test.only`**: the build fails if `test.only` is left in any file.

Set `CI=true` in your pipeline (GitHub Actions does this automatically).

**Example GitHub Actions step:**

```yaml
- name: Install dependencies
  run: npm ci

- name: Install Playwright browsers
  run: npx playwright install --with-deps

- name: Run Playwright tests
  run: npx playwright test --headless
```

---

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `CI` | Detected automatically; enables CI-specific settings (retries, single worker) |

> **dotenv support** is available but commented out in `playwright.config.ts`. To use a `.env` file, install `dotenv` (`npm install dotenv`) and uncomment the relevant lines in the config.

---

## Useful Links

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
