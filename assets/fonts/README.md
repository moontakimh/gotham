# Gotham fonts (ADR-001)

| Source | Role |
| --- | --- |
| `UncutSans-Variable.woff2` in this folder | Display, headings, body, nav |
| `@fontsource/commit-mono` (npm) | Metadata labels, years, captions |

## Uncut Sans

1. Place `UncutSans-Variable.woff2` here (already done if build passes).
2. Licensed — gitignored by default.

## Commit Mono

Installed via:

```bash
npm install @fontsource/commit-mono
```

Loaded in `app/globals.css`. No local file needed.

## Verify

Restart dev server. Check:

- Hero + body → Uncut Sans
- PRACTICE, SCROLL, years → Commit Mono
