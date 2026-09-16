## YYYY-MM-DD - [Preventing Credential Leaks in Axios Errors]
**Vulnerability:** Raw Axios error objects contain the original request payload in `err.config.data`. Logging these directly with `console.error(err)` exposes sensitive information, such as plaintext passwords from login and registration forms, to the browser console.
**Learning:** Store actions handling form submissions should never log raw HTTP request errors to the console, as they can inadvertently leak credentials.
**Prevention:** Silently catch errors using ES2019 optional catch binding (`catch { ... }`) and rely on local error state (e.g., `error.value`) to notify users without leaking internals.
