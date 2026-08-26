## 2024-05-18 - Fix Axios error credential leak
**Vulnerability:** Raw Axios error logging exposed passwords via `error.config.data`.
**Learning:** When using Axios, raw error objects contain the original request payload. Logging them directly in the browser console leaks sensitive data like passwords.
**Prevention:** Use optional catch bindings (`catch { ... }`) to silently handle errors in authentication flows, or securely extract and log only generic error messages.
