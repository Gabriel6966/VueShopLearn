## 2026-05-12 - Sensitive Data Leakage in Axios Error Logs
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console via `console.error(err)` in authentication flows (login and registration).
**Learning:** Axios error objects include the original request payload in `err.config.data`. Logging these raw objects in authentication flows inadvertently exposed sensitive user credentials (passwords) in plaintext to the browser console.
**Prevention:** Avoid logging raw Axios error objects directly. Catch errors silently or handle them securely without exposing sensitive request payload data.
