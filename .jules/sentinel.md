## 2026-08-09 - Credentials Leak via Axios Error Logging
**Vulnerability:** Raw Axios error logging exposes request payloads to the browser console.
**Learning:** Raw Axios error objects (`err`) contain the original request payload in `err.config.data`. Logging these directly (e.g., `console.error(err)`) during authentication flows can inadvertently leak sensitive information like plaintext passwords or personal user data into the browser's developer console, making it accessible to any script or person with access to the console.
**Prevention:** Avoid logging raw Axios errors directly, especially in sensitive operations. Instead, catch them silently, extract only safe messages, or handle them securely without exposing the internal request configuration.
