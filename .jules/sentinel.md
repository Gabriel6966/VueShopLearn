## YYYY-MM-DD - [Preventing Credential Leaks in Axios Errors]
**Vulnerability:** Raw Axios errors were being logged to the console via `console.error(err)` in authentication flows (login and registration).
**Learning:** When using Axios, raw error objects contain the original request payload in `err.config.data`. Logging these raw errors directly in the browser console can expose sensitive information like passwords.
**Prevention:** Avoid logging raw Axios errors directly, especially in authentication or form submission flows. Catch errors silently using the ES2019 optional catch binding (`catch { ... }`) to prevent linting violations and add comments explaining the security-driven omission.
