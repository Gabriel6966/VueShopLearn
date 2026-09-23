## YYYY-MM-DD - [Prevent Credential Leak in Axios Errors]
**Vulnerability:** Raw Axios error objects logged to the console during failed authentication or registration exposed sensitive request payloads (`err.config.data`), which included the plaintext password.
**Learning:** When using Axios, the original request payload is attached to the error object. Simply logging `err` in strict TypeScript environments can inadvertently leak sensitive data to the browser console.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to silently handle errors in authentication/registration flows where sensitive data is involved, and update local error state instead of logging raw errors.
