## 2024-06-30 - Prevent Credential Leaks in Axios Error Logs
**Vulnerability:** Raw `console.error(err)` logging was capturing sensitive information (such as plaintext passwords) contained within the Axios error object's `err.config.data` property when requests to authenticate or register failed.
**Learning:** Raw Axios errors implicitly include the full request configuration, potentially exposing credentials in browser consoles or server logs during authentication flows.
**Prevention:** Always use ES2019 optional catch binding (`catch { ... }`) when logging is not required, or destructure the error object explicitly when logging is necessary to ensure `err.config.data` is omitted. Add inline comments explaining security omissions to prevent accidental regressions.
