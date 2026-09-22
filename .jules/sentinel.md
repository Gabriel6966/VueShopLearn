## YYYY-MM-DD - [Prevent Credential Leakage in Axios Errors]
**Vulnerability:** Raw Axios error objects (`err`) contain the original request payload in `err.config.data`. Logging these directly to the console exposes sensitive information like plaintext passwords.
**Learning:** Store actions handling form submissions must avoid raw error logging to prevent leaking credentials to the browser console.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to catch errors silently and update local error state (e.g., `error.value`) securely.
