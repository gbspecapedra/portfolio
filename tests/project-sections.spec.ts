import { expect, test } from "@playwright/test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { ProjectSections } from "@/components/projects/project-sections";
import type { ProjectSection } from "@/data/project-types";

test("omits empty case study sections, including groups with only empty descendants", () => {
  const sections: ProjectSection[] = [
    { id: "empty", title: "Empty", body: ["  "], bullets: [""], decision: " " },
    { id: "group", title: "Group", sections: [{ id: "child", title: "Child", tradeOff: " " }] },
  ];

  expect(renderToStaticMarkup(createElement(ProjectSections, { sections }))).toBe("");
});

test("keeps deeply nested content and caps its heading at level six", async ({ page }) => {
  const nested = ["Overview", "Context", "Decision", "Rationale", "Details"].reduceRight<ProjectSection>(
    (section, title) => ({ id: title.toLowerCase(), title, sections: [section] }),
    { id: "notes", title: "Notes", body: ["A deeply nested detail."] },
  );
  await page.setContent(renderToStaticMarkup(createElement(ProjectSections, { sections: [nested] })));

  await expect(page.getByRole("heading", { name: "Overview", level: 2 })).toBeVisible();
  const detail = page.locator("#overview-context-decision-rationale-details-notes");
  await expect(detail.getByRole("heading", { name: "Notes", level: 6 })).toBeVisible();
  await expect(detail.getByText("A deeply nested detail.")).toBeVisible();
});
