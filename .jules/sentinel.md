## 2025-06-22 - Prevent Raw Axios Error Logging

**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console using `console.error(err)` in `src/stores/Usuario.ts` during login and registration.

**Learning:** Axios error objects include the original request payload in `err.config.data`. Logging the entire error object exposes sensitive information, such as plain text passwords, to the browser console.

**Prevention:** To prevent leaking sensitive request data, use optional catch binding (`catch { ... }`) and catch errors silently or handle them securely without logging the raw error object directly.
