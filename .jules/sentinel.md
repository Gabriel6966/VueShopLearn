## YYYY-MM-DD - Prevent Sensitive Data Leak in Console
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console using `console.error(err)` during login and registration. Because Axios includes the original request payload in `err.config.data`, this could expose plaintext user passwords to the browser console.
**Learning:** In frontend applications using Axios, logging raw error objects can inadvertently leak sensitive request data, such as credentials submitted in forms.
**Prevention:** Avoid logging raw Axios errors, especially for endpoints handling sensitive data. Use ES2019 optional catch binding (`catch { ... }`) to handle errors silently, updating local error state without exposing internals to the console.
