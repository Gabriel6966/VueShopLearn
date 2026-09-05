## YYYY-MM-DD - [Preventing Credential Leakage in Axios Errors]
**Vulnerability:** Raw Axios error objects (`err`) contain the original request payload in `err.config.data`. Logging these raw errors to the console during login or registration attempts leaked users' plaintext passwords to the browser console.
**Learning:** When using Axios, raw error objects must never be logged directly to the console, especially on endpoints handling authentication or sensitive data, as they expose the request payload.
**Prevention:** Catch errors silently using ES2019 optional catch binding (`catch { ... }`) on sensitive operations, or carefully extract and log only safe properties (e.g., `err.message`) to prevent exposing request payloads.
