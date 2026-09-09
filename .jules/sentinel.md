## YYYY-MM-DD - Prevent credential leaks in Axios error logging
**Vulnerability:** Logging raw Axios errors (`console.error(err)`) during authentication flows can leak sensitive data (like plaintext passwords) to the browser console because `err.config.data` contains the original request payload.
**Learning:** Framework error handling often includes complete request context for debugging, making raw error logging dangerous for endpoints handling credentials.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to silently catch errors in authentication flows, or explicitly extract safe properties (`err.message`), avoiding logging the raw error object entirely.
