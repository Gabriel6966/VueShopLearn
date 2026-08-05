## 2024-05-18 - Prevent Sensitive Data Leak in Axios Errors
**Vulnerability:** Raw error objects (`err`) in Axios can contain the original request payload in `err.config.data`. This means logging the error directly (e.g., `console.error(err)`) could leak sensitive information like plain text passwords to the browser console.
**Learning:** In frontend stores dealing with authentication (login/registration), errors should be caught and handled locally to update state without dumping the full Axios error trace.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to silence raw errors or extract non-sensitive strings from the error object, instead of passing the raw object to the console.
