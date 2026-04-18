## 2025-05-18 - Axios Error Credential Leakage

**Vulnerability:** The original codebase caught Axios request errors and blindly logged the raw error object to the console (`console.error(err)`). When a request failed (e.g., login or register), the `err` object retained `err.config.data`, which stored the user's plaintext password, thereby leaking credentials directly to the browser console.

**Learning:** When using Axios, unhandled or blindly logged error objects preserve the full HTTP request context, including payloads sent via POST/PUT requests. This makes seemingly harmless generic error logging a critical vulnerability for authentication-related endpoints.

**Prevention:** Never log raw Axios errors on endpoints that handle credentials or PII. Always catch them silently using a parameterless `catch` block (`catch { ... }`), update local error state properties appropriately, and rely solely on safe, non-sensitive UI-level error feedback.