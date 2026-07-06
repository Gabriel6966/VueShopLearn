## 2025-07-06 - Prevent Leaking Sensitive Data in Axios Error Logs
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console using `console.error(err)` during user login and registration processes.
**Learning:** Axios error objects include the full request payload in `err.config.data`. Logging this object natively leaks sensitive user credentials (like passwords) directly to the browser's console, which malicious scripts or users could potentially read.
**Prevention:** Avoid logging raw Axios error objects, particularly in authentication flows. Use ES2019 optional catch binding (`catch { ... }`) to fail securely, handle the error gracefully without exposing sensitive internals, and add a comment explaining why the error is silenced.
