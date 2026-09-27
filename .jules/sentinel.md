## YYYY-MM-DD - Axios Error Credential Leak
**Vulnerability:** Logging raw Axios error objects in authentication stores exposes the original request payload (including plaintext passwords) to the browser console via `err.config.data`.
**Learning:** Standard practice of logging errors for debugging can inadvertently create critical credential leaks in client-side applications when using HTTP clients that attach request configurations to their error objects.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to silently handle authentication errors, update local state for user feedback, and avoid logging raw error objects. Ensure clear inline comments explain the intentional silent catch to prevent regressions.
