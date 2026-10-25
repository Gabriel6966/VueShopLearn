## YYYY-MM-DD - Remove Raw Error Logging in Auth Forms
**Vulnerability:** Leaking sensitive information (like passwords) via Axios error objects to the browser console.
**Learning:** Raw error objects (`err`) in Axios contain the original request payload in `err.config.data`. Logging these raw errors directly in authentication flows can expose credentials to anyone inspecting the console.
**Prevention:** Silently catch errors in authentication store actions (e.g., using `catch { ... }` or extracting generic messages) instead of using `console.error(err)`, and use local state to notify users.
