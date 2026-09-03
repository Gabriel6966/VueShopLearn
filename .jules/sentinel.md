## 2024-05-18 - Axios Error Payload Credential Leak
**Vulnerability:** Raw `console.error(err)` in Axios catch blocks leaks the original request payload (including plaintext passwords) to the browser console via `err.config.data`.
**Learning:** Default error logging patterns can inadvertently expose sensitive form submission data because HTTP clients like Axios attach the original request configuration to the error object.
**Prevention:** Use optional catch binding (`catch { ... }`) to silently catch errors during sensitive operations (like login/registration) or securely extract generic messages without logging the raw error object.
