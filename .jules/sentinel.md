## 2025-01-20 - Prevent Credential Leak in Error Logging
**Vulnerability:** Raw Axios error objects (`err`) containing sensitive request payloads (like plaintext passwords) were being logged directly to `console.error` during login and registration attempts in the Vue store.
**Learning:** By default, Axios attaches the entire request configuration, including `config.data`, to the error object thrown on failure. Logging this directly inadvertently exposes user credentials to the browser console.
**Prevention:** Avoid logging raw Axios error objects directly, especially in authentication or registration flows. Instead, catch errors silently or extract only safe, non-sensitive error messages (`err.message`) before logging.
