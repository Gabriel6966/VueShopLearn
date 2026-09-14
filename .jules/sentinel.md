## 2026-09-14 - Exposed sensitive data in error logs
**Vulnerability:** Raw console logging of Axios errors leaks sensitive payload (like passwords).
**Learning:** Axios error objects contain `config.data` which holds the request payload. Logging the error directly to the console exposes user credentials if the request fails.
**Prevention:** Silently catch errors in auth store actions using ES2019 optional catch binding (`catch { ... }`) to avoid linting violations while preventing credential leaks, and rely on local state updates (e.g., `error.value`) for user feedback.
