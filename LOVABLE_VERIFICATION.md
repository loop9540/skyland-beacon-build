# Lovable Verification

This branch is the Lovable-compatible rebuild of the deployed `v1` site.

## Current State

- Production baseline: `main` at `89d8f9d96f7f39448d9bb86661b1f0bb5656ee71`
- Production tag: `v1`
- Lovable branch: `lovable`
- Lovable branch rebuild commit: `7794a0a7d3d950d069424345574ac5640a6317bd`
- Lovable template marker: `.lovable/project.json`
- Template: `tanstack_start_ts_2026-05-29`

## Repo-Side Verification Already Completed

- `npm run build` passed locally.
- `npm run typecheck` passed locally.
- `npm run lint` passed locally with only existing shadcn Fast Refresh warnings.
- `npm audit --audit-level=high` reported `0 vulnerabilities`.
- GitHub Actions CI passed on `origin/lovable`.
- Browser checks passed for desktop home, mobile home/menu, privacy page, video modal, sitemap XML, and live-vs-local content parity.

## Required Lovable Workspace Check

This final check requires a Lovable account/workspace with access to the original Skyland Ranch project.

1. Open the Skyland Ranch project in Lovable.
2. Confirm the connected GitHub repository is `loop9540/skyland-beacon-build`.
3. Switch Lovable's active branch to `lovable`.
4. Wait for Lovable to sync the branch.
5. Confirm Lovable displays the TanStack Start + React project without import or build errors.
6. Make a trivial reversible edit in Lovable, for example change one non-user-facing whitespace or a short test word in README/project knowledge if Lovable offers a safe edit target.
7. Confirm Lovable syncs that edit back to GitHub on branch `lovable`.
8. Revert the trivial edit in Lovable or by Git, then confirm the branch returns to parity.
9. Re-run GitHub Actions CI on `lovable` after the revert.

## Acceptance Criteria

The goal can be marked complete only when:

- `main` remains unchanged and tagged as `v1`.
- `origin/lovable` remains a Lovable-compatible TanStack Start + React rebuild.
- `origin/lovable` and `main` are functionally, aesthetically, and content-wise equivalent when rendered.
- Lovable can open and edit the `lovable` branch, and the edit can sync back to GitHub.
- CI passes after any Lovable-side verification edit is reverted.

## Current Blocker

The repo-side work is complete, but this environment does not have a Lovable OAuth session, Lovable API key, or Lovable MCP connector. The Lovable MCP endpoint is reachable at `https://mcp.lovable.dev`, but it requires OAuth-protected access before projects can be enumerated or edited.
