## 2026-06-01 - [Axios Error Object Password Leak]
**Vulnerability:** Raw Axios error objects logged to the browser console via `console.error(err)` leaked the entire HTTP request payload in `err.config.data`, which contained plaintext user passwords during login and registration.
**Learning:** Third-party library error objects (like Axios' `AxiosError`) often carry the full context of the failed operation. Directly logging them is dangerous when the operation handles sensitive data, as it inadvertently exposes secrets.
**Prevention:** Do not log raw error objects from network requests that transmit credentials or sensitive PII. Instead, use an empty `catch { ... }` block to fail securely or extract only non-sensitive fields to log (e.g., `err.response?.status`).
