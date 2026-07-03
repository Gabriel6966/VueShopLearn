## 2024-07-03 - Axios Error Payload Leakage
**Vulnerability:** Logging raw Axios error objects (`console.error(err)`) in API catch blocks can leak sensitive request payloads, such as plaintext passwords during login and registration, to the browser console.
**Learning:** Axios error objects store the original request configuration and payload under `err.config.data`. Simply logging the error object unintentionally exposes this data.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to intentionally omit the error object when handling failed requests that contain sensitive information, or explicitly destructure and log only safe fields (e.g., `err.message`, `err.status`).
