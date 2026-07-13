## 2024-07-13 - Prevent Sensitive Data Leak in Axios Errors
**Vulnerability:** Raw Axios error objects (`err`) were being logged directly to the console in the `login` and `registro` functions in `src/stores/Usuario.ts`.
**Learning:** Raw Axios error objects contain the original request payload in `err.config.data`. Logging these objects exposed sensitive information like plaintext passwords to the browser console.
**Prevention:** To prevent leaking sensitive information, avoid logging raw Axios errors directly. Instead, catch them silently or handle them securely without exposing internal request details.
