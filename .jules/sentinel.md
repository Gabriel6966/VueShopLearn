## YYYY-MM-DD - [Axios Error Credential Leak]
**Vulnerability:** Raw Axios error objects logged to the console via `console.error(err)` during login/registration exposed plain-text passwords stored in the request payload (`err.config.data`).
**Learning:** Framework tools like Axios embed the original request data within their error objects. Logging these errors raw can inadvertently leak highly sensitive information to the client's browser console.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to silently handle authentication errors, updating local state for UI feedback without exposing internal stack traces or request configurations.
