## 2026-09-28 - Remove Raw Error Logging in Authentication
**Vulnerability:** Raw Axios error objects containing credentials and user data in `err.config.data` were exposed to the browser console during authentication failures via `console.error(err)`.
**Learning:** Always avoid raw console logging of errors during sensitive operations like login or registration. Store actions handling form submissions should silently catch errors and update local error state to prevent leaking sensitive information while not breaking user flow.
**Prevention:** Use optional catch binding (`catch { ... }`) or safely extract non-sensitive messages (`err instanceof Error ? err.message : String(err)`) in catch blocks. Never log raw error objects directly.
