## YYYY-MM-DD - Exposed Sensitive Data in Console Logs
**Vulnerability:** Raw Axios error objects logged to the console during login and registration expose the original request payload (including plaintext passwords) in `err.config.data`.
**Learning:** Logging raw error objects from HTTP clients can inadvertently leak sensitive credentials or PII to the browser console.
**Prevention:** Catch errors silently or handle them securely by extracting safe properties (like `err.message`) instead of logging the entire raw object.
