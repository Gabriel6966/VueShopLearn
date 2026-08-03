## YYYY-MM-DD - Prevent Credential Leak in Axios Errors
**Vulnerability:** Raw Axios error objects containing request payloads (including plaintext passwords) were logged to the browser console.
**Learning:** Axios attaches the original request configuration and payload in `err.config.data`, which `console.error` inadvertently exposes when logging the raw error object.
**Prevention:** Avoid logging raw Axios error objects; use optional catch binding (`catch { ... }`) for sensitive operations to silently handle the error, or explicitly extract safe error messages.
