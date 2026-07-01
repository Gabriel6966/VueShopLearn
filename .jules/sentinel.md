## 2024-07-01 - Avoid Raw Axios Error Logging
**Vulnerability:** Raw Axios error objects logged to the console via `console.error(err)` leak the original request payload in `err.config.data`. In login and registration actions, this exposes plaintext passwords directly in the browser's console.
**Learning:** When using Axios, HTTP request errors contain full request details. Directly logging these error objects in frontend code is a critical data leakage risk.
**Prevention:** Catch errors silently (e.g., using ES2019 optional catch binding `catch { ... }`) or manually extract and log only non-sensitive error properties. Handle user feedback locally (e.g., updating an `error.value` ref) rather than dumping raw objects to the console.
