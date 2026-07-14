/**
 * The resource kinds a subnet is missing, in the given kind order — derived
 * from a coverage row's per-kind cell states (`"present" | "candidate" |
 * "missing" | "unknown"`). Kept pure so the mobile "N missing" summary — which
 * surfaces the gap columns the horizontally-scrolled matrix hides on narrow
 * viewports (#5310) — is unit-tested apart from the DOM.
 */
export function missingKinds<K extends string>(cells: Record<K, string>, kinds: readonly K[]): K[] {
  return kinds.filter((k) => cells[k] === "missing");
}
