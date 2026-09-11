## YYYY-MM-DD - [Axios Error Credential Leak]
**Vulnerability:** Axios error objects `err` contain the original request payload in `err.config.data`. Logging raw Axios errors in authentication functions (like login or registration) exposes plaintext passwords and sensitive data to the browser console.
**Learning:** Raw console logging of errors in client-side store actions that handle sensitive forms should be avoided. The error object includes the full HTTP request context.
**Prevention:** Catch authentication errors silently using the ES2019 optional catch binding (`catch { ... }`) to avoid strict unused variable linting rules, and handle the error state locally (e.g., updating a reactive error message) without logging the raw error object to the console.
