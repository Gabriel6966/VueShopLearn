## 2024-05-15 - Raw Axios Error Logging
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console via `console.error(err)` in login and registration flows.
**Learning:** Raw Axios errors include the original request payload in `err.config.data`, which causes sensitive data like plaintext passwords to be leaked to the browser console.
**Prevention:** Avoid logging raw Axios errors; catch them silently or extract and log only non-sensitive information. Use empty catch blocks (`catch { ... }`) when the error object is not safely utilized to avoid ESLint `no-unused-vars` errors.
