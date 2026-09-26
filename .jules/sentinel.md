## YYYY-MM-DD - [Credentials Leak in Axios Error Logs]
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the browser console during login and registration.
**Learning:** Axios error objects include the original request payload in `err.config.data`. Logging these directly exposes sensitive data like plaintext passwords to the client console.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) for sensitive form submissions to update local error state silently without logging the raw error object, preventing accidental credential leaks.