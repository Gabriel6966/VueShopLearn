## YYYY-MM-DD - Prevent Axios Error Object Information Leaks
**Vulnerability:** Raw Axios error objects logged to the console via `console.error(err)` exposed the original request payloads, including plaintext user passwords within `err.config.data` during authentication and registration.
**Learning:** Logging unhandled third-party library error objects (like Axios) can inadvertently expose sensitive data such as credentials present in the request configuration.
**Prevention:** Always catch and log errors securely, using optional catch bindings (`catch { ... }`) to silently update application state without leaking internal request representations to the public console.
