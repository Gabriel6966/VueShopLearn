## 2024-05-18 - Raw Axios Errors Logging Sensitive Data
**Vulnerability:** Raw Axios error objects (`err`) contain the original request payload in `err.config.data`, which can leak sensitive information like passwords to the browser console.
**Learning:** Using `console.error(err)` directly in a `catch` block for authentication requests exposes credentials in the console.
**Prevention:** Catch errors silently or handle them securely without logging raw Axios errors, especially for login and registration actions. Update local error state instead.