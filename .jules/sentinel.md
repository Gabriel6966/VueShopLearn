## YYYY-MM-DD - [Axios Error Credential Leak]
**Vulnerability:** Raw Axios error objects logged to the console via `console.error(err)`.
**Learning:** Axios error objects contain the original request payload in `err.config.data`. When authentication requests fail, logging these errors exposes sensitive data like plaintext passwords to the browser console.
**Prevention:** Avoid logging raw Axios errors. Use optional catch binding `catch { ... }` or securely extract only necessary error messages without logging the entire object or payload.
