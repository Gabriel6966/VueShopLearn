## 2025-05-18 - Prevent Sensitive Data Leak in Axios Errors
**Vulnerability:** Raw Axios error objects (`err`) contain the original request payload in `err.config.data`, which can leak sensitive data like passwords to the browser console.
**Learning:** Logging raw Axios errors in `catch` blocks for authentication requests inadvertently exposes plaintext passwords in the browser console.
**Prevention:** Avoid logging raw Axios errors directly for requests containing sensitive data. Catch them silently or handle them securely without exposing the request payload.
