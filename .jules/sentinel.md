## YYYY-MM-DD - Fix Information Leakage in Error Logs
**Vulnerability:** Raw Axios error objects were being logged to the browser console during login and registration.
**Learning:** Axios error objects (`err.config.data`) contain the original request payload, meaning user credentials (passwords) were being leaked to the client-side console on network failures.
**Prevention:** Avoid logging raw HTTP client errors. Always use optional catch binding (`catch { ... }`) or parse specific, non-sensitive error messages (`err.message`) before logging.