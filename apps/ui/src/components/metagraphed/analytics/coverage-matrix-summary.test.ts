import { describe, expect, it } from "vitest";

import { missingKinds } from "./coverage-matrix-summary";

const KINDS = ["docs", "repo", "openapi", "endpoint", "dashboard"] as const;

describe("missingKinds", () => {
  it("returns only the kinds whose cell is 'missing', in kind order", () => {
    const cells = {
      docs: "present",
      repo: "missing",
      openapi: "candidate",
      endpoint: "present",
      dashboard: "missing",
    };
    expect(missingKinds(cells, KINDS)).toEqual(["repo", "dashboard"]);
  });

  it("returns an empty array when nothing is missing", () => {
    const cells = {
      docs: "present",
      repo: "present",
      openapi: "candidate",
      endpoint: "unknown",
      dashboard: "present",
    };
    expect(missingKinds(cells, KINDS)).toEqual([]);
  });

  it("returns every kind when all are missing", () => {
    const cells = {
      docs: "missing",
      repo: "missing",
      openapi: "missing",
      endpoint: "missing",
      dashboard: "missing",
    };
    expect(missingKinds(cells, KINDS)).toEqual([...KINDS]);
  });

  it("does not count 'candidate' or 'unknown' as missing", () => {
    const cells = {
      docs: "candidate",
      repo: "unknown",
      openapi: "present",
      endpoint: "candidate",
      dashboard: "unknown",
    };
    expect(missingKinds(cells, KINDS)).toEqual([]);
  });
});
