# Reetai Accounting MCP Server Guidelines

## Core CLI Build and Testing Targets
- Initialize Environment: `npm install`
- Compile TypeScript Profile: `npm run build`
- Run Test Harness (Vitest): `npm run test` or `npx vitest`
- Single Test Suite Target: `npx vitest src/tools/invoices.test.ts`
- Format and Quality Lint: `npm run lint`

## Strict Software Architecture Principles
- Language standard: TypeScript strict mode targeting Node.js execution environments.
- Strict Type Safety: Enforce accurate schemas. Do not use open type fallbacks (`any`).
- QuickBooks Schema Integrity: Bind all QuickBooks API ingress and egress layers utilizing comprehensive schema libraries (e.g., Zod) to guarantee runtime protection.
- Error Protocol Response: If any QuickBooks tool execution fails or experiences credential expiration, gracefully intercept the throw logic and issue a message packet bearing `isError: true`. Never return unchecked trace text strings directly to the prompt context canvas.
