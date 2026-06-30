# Gotham — Architecture Decision Record

Synced from AI handoff (July 2026).

| ID | Decision | Status | Code impact |
| --- | --- | --- | --- |
| ADR-001 | Uncut Sans + Commit Mono only | Locked | Uncut local + `@fontsource/commit-mono` |
| ADR-002 | Editorial asymmetric layout | Locked | `components/layout/`, `styles/layout.css` |
| ADR-003 | Routes include `/about` | Locked | `app/about/page.tsx` |
| ADR-004 | AI implements, human art directs | Locked | Process |
| ADR-005 | Forest Green → Electric Lime + Ultraviolet | **Waiting on Figma** | `--accent-signal` uses neutral interim, not lime |
| ADR-006 | Horizontal scroll work index (desktop) | Locked | `components/sections/selected-work/` |
| ADR-007 | Locked case studies use request-access email gate | Locked | `components/work/request-access-form.tsx` |
| ADR-008 | `/now` page for personal layer | Locked | Homepage teasers → `/now` |
| ADR-009 | `/colophon` and `/handbook` routes | Locked | Scaffolded |

## Workflow (agreed)

**Parallel track:** Figma owns foundations (type scale, color, components). Code owns structure, routes, content shells, and IA. Do not lock visual tokens in code until Figma DS v1.0 is approved.

**Hero display name:** Moontakim Hassan (not full legal name).

## Pending (circle back)

- Contact links — calendar, LinkedIn, GitHub, resume
- Request-access delivery — server-side email vs mailto
- Mobile nav drawer
- Accent hex + Ultraviolet from Figma

## Font setup

See `assets/fonts/README.md`. Drop files → restart dev → ping Cursor.
