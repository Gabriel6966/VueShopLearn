## 2025-02-14 - Prevent Axios Data Leak in Console
**Vulnerability:** Raw Axios error objects (`err`) were being logged directly to the console (`console.error(err)`) upon login or registration failure.
**Learning:** In Axios, the raw error object includes `err.config.data`, which contains the original request payload. If a request includes sensitive information like plaintext passwords, logging this object exposes these secrets to the browser console.
**Prevention:** Avoid logging raw `err` objects. Either omit the log and handle state locally (e.g., `error.value = 'Failed'`) or log specific, non-sensitive fields such as `err.message`. Use `catch { ... }` or rest-destructuring to satisfy linting rules when deliberately ignoring the error object.
