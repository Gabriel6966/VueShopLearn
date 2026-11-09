## YYYY-MM-DD - Prevent Sensitive Information Leakage in Axios Error Logs
**Vulnerability:** Logging raw Axios error objects directly to the console (`console.error(err)`) in authentication services implicitly leaks the original request payload, including plaintext passwords, via `err.config.data`.
**Learning:** In frontend applications using Axios, raw exceptions must never be logged during authentication or sensitive flows as they expose user credentials to the browser console.
**Prevention:** Avoid logging raw error objects. Use ES2019 optional catch binding (`catch { ... }`) to silently omit the error parameter, or securely extract non-sensitive properties (like `err.message`) before logging.
