## YYYY-MM-DD - [Prevent Credential Leaks in Axios Errors]
**Vulnerability:** Logging raw Axios error objects (`console.error(err)`) in login and registration flows exposed the original request payload (`err.config.data`), which contained plaintext passwords.
**Learning:** Raw Axios errors include the full request configuration and data. Logging them directly to the console or unsecure sinks leaks sensitive user credentials and bypasses earlier sanitization efforts.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to catch errors silently in store actions handling sensitive forms, update local error state instead of redirecting, and never log raw Axios errors that may contain credentials.
