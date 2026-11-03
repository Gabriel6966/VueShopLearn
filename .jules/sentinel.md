## 2023-10-27 - Axios Error Credential Leak
**Vulnerability:** Raw Axios error objects were logged to the console, exposing sensitive information such as user passwords in `err.config.data` during login and registration.
**Learning:** Logging unhandled or raw errors from HTTP clients can inadvertently leak credentials or sensitive request payloads to the browser console.
**Prevention:** Avoid logging raw HTTP errors in frontend applications, especially on authentication endpoints. Use ES2019 optional catch binding (`catch { ... }`) to catch errors silently or extract and log only safe error messages.
