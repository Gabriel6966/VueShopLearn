## YYYY-MM-DD - Fix info leak in error logging
**Vulnerability:** Raw Axios error objects logged to the console via `console.error(err)` in authentication flows (`login` and `registro`) leaked sensitive data, including plaintext passwords from request payloads, to the browser console.
**Learning:** Axios error objects store the original request payload in `err.config.data`. Logging these errors directly exposes sensitive user credentials.
**Prevention:** Avoid logging raw error objects directly in frontend applications. Use the ES2019 optional catch binding syntax (`catch { ... }`) to silence errors securely or extract only safe information for logging, adding comments to explain the security-driven omission.
