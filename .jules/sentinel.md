## 2025-02-13 - Raw Axios Error Object Password Leak
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console using `console.error(err)` during user registration and login flow.
**Learning:** Axios error objects contain the original request payload in `err.config.data`. Logging the raw error object directly exposes sensitive information, such as plaintext passwords, to the browser console.
**Prevention:** Avoid logging raw Axios error objects directly. Use ES2019 optional catch binding (`catch { ... }`) to silence errors securely when handling sensitive data, and reflect error states using local UI variables instead of exposing underlying error details.
