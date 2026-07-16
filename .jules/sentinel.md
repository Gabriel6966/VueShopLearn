## 2026-07-16 - Sensitive Data Leak via Axios Error Logging

**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console using `console.error(err)` during login and registration attempts in `src/stores/Usuario.ts`.

**Learning:** When using Axios, the raw error object contains the original request payload in `err.config.data`. If a request fails, the entire object, including plaintext passwords submitted via POST requests, is logged to the console, exposing sensitive credentials to anyone with access to the browser console.

**Prevention:** Never log raw HTTP error objects directly. Always extract and log only non-sensitive information, such as `err.message` (e.g., `err instanceof Error ? err.message : String(err)`), and leave a comment explaining why raw error logging is omitted.
