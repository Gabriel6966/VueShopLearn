## YYYY-MM-DD - Prevent Sensitive Data Leakage in Axios Errors
**Vulnerability:** Raw Axios error objects (`err`) contain the original request payload in `err.config.data`. Logging these errors exposes sensitive information like passwords in plaintext to the browser console.
**Learning:** Logging entire error objects from HTTP clients on the frontend is a critical vulnerability during authentication and registration, as it leaks credentials.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to catch and handle authentication errors silently, avoiding raw error logging to prevent credential leakage.
