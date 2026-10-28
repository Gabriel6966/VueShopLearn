## YYYY-MM-DD - Prevent Credential Leaks in Axios Errors
**Vulnerability:** Raw Axios error objects containing request payloads (including plaintext passwords) were being logged to the browser console via `console.error(err)` during login and registration failures.
**Learning:** Axios errors retain the original request payload in `err.config.data`, meaning logging the full error object exposes sensitive data sent to the server.
**Prevention:** Omit logging the error object entirely using optional catch binding (`catch { ... }`) during sensitive operations, or extract only safe, generic error strings.
