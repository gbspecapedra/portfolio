import assert from "node:assert/strict";
import test from "node:test";
import { ESLint } from "eslint";

const eslint = new ESLint();

test("accepts typed React components with valid hooks, JSX keys, and ARIA", async () => {
  const [result] = await eslint.lintText(
    `"use client";
    import { useState } from "react";
    export default function Example({ items }: { items: string[] }) {
      const [count, setCount] = useState(0);
      return <section>
        <button type="button" onClick={() => setCount(count + 1)}>{count}</button>
        <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
      </section>;
    }`,
    { filePath: "app/lint-fixture.tsx" },
  );

  assert.deepEqual(result.messages, []);
});

const violations = [
  {
    name: "TypeScript explicit any",
    source: "export const value: any = 1;",
    rule: "@typescript-eslint/no-explicit-any",
    severity: 2,
  },
  {
    name: "conditional React hooks",
    source: `"use client";
      import { useState } from "react";
      export function Example({ active }: { active: boolean }) {
        if (active) useState(0);
        return null;
      }`,
    rule: "react-hooks/rules-of-hooks",
    severity: 2,
  },
  {
    name: "missing JSX keys",
    source: "export function Example() { return [1, 2].map(value => <p>{value}</p>); }",
    rule: "@eslint-react/no-missing-key",
    severity: 2,
  },
  {
    name: "Next.js synchronous scripts",
    source: 'export function Example() { return <script src="/test.js" />; }',
    rule: "@next/next/no-sync-scripts",
    severity: 2,
  },
  {
    name: "unoptimized Next.js images",
    source: 'export function Example() { return <img src="/test.png" alt="Example" />; }',
    rule: "@next/next/no-img-element",
    severity: 1,
  },
  {
    name: "missing native image alt text",
    source: 'export function Example() { return <img src="/test.png" />; }',
    rule: "jsx-a11y-x/alt-text",
    severity: 1,
  },
  {
    name: "missing Next.js Image alt text",
    source: `import Image from "next/image";
      export function Example() { return <Image src="/test.png" width={10} height={10} />; }`,
    rule: "jsx-a11y-x/alt-text",
    severity: 1,
  },
  {
    name: "invalid ARIA property names",
    source: 'export function Example() { return <div aria-imaginary="true" />; }',
    rule: "jsx-a11y-x/aria-props",
    severity: 1,
  },
  {
    name: "invalid ARIA property values",
    source: 'export function Example() { return <div aria-hidden="sometimes" />; }',
    rule: "jsx-a11y-x/aria-proptypes",
    severity: 1,
  },
  {
    name: "ARIA on unsupported elements",
    source: 'export function Example() { return <meta aria-label="Example" />; }',
    rule: "jsx-a11y-x/aria-unsupported-elements",
    severity: 1,
  },
  {
    name: "missing required role properties",
    source: 'export function Example() { return <div role="checkbox" />; }',
    rule: "jsx-a11y-x/role-has-required-aria-props",
    severity: 1,
  },
  {
    name: "ARIA properties unsupported by a role",
    source: 'export function Example() { return <div role="button" aria-checked="true" />; }',
    rule: "jsx-a11y-x/role-supports-aria-props",
    severity: 1,
  },
  {
    name: "anonymous default exports",
    source: "export default () => null;",
    filePath: "lint-fixture.mjs",
    rule: "import-x/no-anonymous-default-export",
    severity: 1,
  },
  {
    name: "undefined JSX components in JavaScript",
    source: "export function Example() { return <Missing />; }",
    filePath: "app/lint-fixture.jsx",
    rule: "no-undef",
    severity: 2,
  },
];

for (const { name, source, filePath = "app/lint-fixture.tsx", rule, severity } of violations) {
  test(`reports ${name}`, async () => {
    const [result] = await eslint.lintText(source, { filePath });

    assert.equal(result.fatalErrorCount, 0);
    assert.ok(
      result.messages.some(message => message.ruleId === rule && message.severity === severity),
      `Expected ${rule} at severity ${severity}: ${JSON.stringify(result.messages)}`,
    );
  });
}
