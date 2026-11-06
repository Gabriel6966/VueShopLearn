## YYYY-MM-DD - Fix Raw Axios Error Logging
**Vulnerability:** Leaking sensitive data (passwords) to the browser console during login and registration via `console.error(err)`.
**Learning:** Raw Axios error objects (`err`) contain the original request payload in `err.config.data`, which exposes plain text passwords to anyone viewing the console or automated log collectors.
**Prevention:** Intentionally omit raw Axios errors using ES2019 optional catch binding (`catch { ... }`) or handle them securely without logging the raw object.
