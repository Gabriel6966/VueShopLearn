## YYYY-MM-DD - [Prevent Credential Leak via Axios Error Logging]
**Vulnerability:** Axios error objects include request configuration (`err.config.data`), which logs plaintext passwords to the browser console when `console.error(err)` is used during authentication (login/registration).
**Learning:** Default error logging with Axios can unintentionally leak sensitive user credentials to the client-side console, violating security best practices.
**Prevention:** Catch errors silently using optional catch bindings (`catch { ... }`) or explicitly extract and log only safe properties without logging the full error object on sensitive endpoints.
