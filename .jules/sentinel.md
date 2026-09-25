## YYYY-MM-DD - Exposed sensitive data in Axios error logs
**Vulnerability:** Axios error objects log request payloads, exposing plaintext passwords to the browser console on failed authentication/registration requests.
**Learning:** Raw Axios errors (`err.config.data`) contain the original request payload. Logging them directly with `console.error(err)` leaks sensitive user input.
**Prevention:** Silently catch errors in authentication flows using optional catch binding (`catch { ... }`) or explicitly format error logs to exclude request payloads.
