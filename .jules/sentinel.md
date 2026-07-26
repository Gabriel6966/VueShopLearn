## 2025-07-26 - Prevented Credential Leak in Axios Error Logging
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console via `console.error(err)` in authentication flows (login and registration).
**Learning:** Raw Axios error objects contain the original request payload in `err.config.data`. If an API call containing sensitive user credentials (like passwords) fails, the entire payload can be leaked to the browser console or logging system.
**Prevention:** Avoid logging raw Axios error objects directly. Use optional catch binding (`catch { ... }`) to ignore the error entirely when no specific handling is needed, or explicitly extract safe properties like `err.message` instead of logging the full object.
