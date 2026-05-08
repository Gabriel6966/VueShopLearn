## 2024-05-08 - Axios Error Objects Leaking Sensitive Payloads
**Vulnerability:** Raw error objects (`err`) from Axios requests were being logged to the console using `console.error(err)` in authentication flows (`login`, `registro`).
**Learning:** Axios error objects encapsulate the original request payload in `err.config.data`. Logging the entire error object exposes sensitive information like plaintext passwords directly to the browser console, posing a significant data leakage risk.
**Prevention:** Catch errors silently (`catch { ... }`) or handle them securely without logging the raw error object, updating local application state for error display instead.
