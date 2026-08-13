
## YYYY-MM-DD - Raw Axios Error Logging Leaks Sensitive Data
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console using `console.error(err)` in user authentication flows (`login` and `registro` in `src/stores/Usuario.ts`).
**Learning:** In Axios, the raw error object contains the original request payload inside `err.config.data`. If a request fails, logging the raw error will expose sensitive information like plaintext passwords and personal details directly to the browser's console, which is accessible to anyone observing the user's session or malicious scripts.
**Prevention:** Avoid logging raw Axios error objects directly. Use ES2019 optional catch binding (`catch { ... }`) to silently handle the error or explicitly extract safe properties like `err.message` if logging is necessary. Never log `err.config` or the raw `err` in frontend applications handling sensitive input.
