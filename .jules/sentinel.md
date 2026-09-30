## YYYY-MM-DD - Sensitive Credential Leak in Axios Errors
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the browser console during failed login and registration attempts in Pinia stores.
**Learning:** Axios error objects include `err.config.data`, which contains the original request payload. Logging these errors directly exposes sensitive data like plaintext passwords to the console, creating a significant credential leak.
**Prevention:** Catch errors silently (e.g., using ES2019 optional catch binding `catch { ... }`) when handling authentication or other sensitive form submissions, and only update local application state (like `error.value`) without dumping the raw error object to the console.
