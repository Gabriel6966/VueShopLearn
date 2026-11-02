## 2024-05-18 - Prevent Sensitive Data Leak in Console
**Vulnerability:** Raw Axios error objects were being logged to the console during authentication, potentially leaking plaintext passwords via `err.config.data`.
**Learning:** Axios attaches the original request configuration, including raw request data payloads, to error objects. Directly logging these errors in catch blocks exposes sensitive information.
**Prevention:** Use optional catch binding (`catch { ... }`) to handle errors without exposing or logging the raw error object, preventing credential leaks while adhering to strict linting rules.
