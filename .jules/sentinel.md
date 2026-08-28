## YYYY-MM-DD - [CRITICAL] Prevent Axios error payload leakage
**Vulnerability:** Raw `console.error(err)` calls in the authentication store expose the Axios request configuration, which includes plaintext passwords in `err.config.data`.
**Learning:** Raw error objects from HTTP clients often contain sensitive request payloads. Logging them directly in the frontend exposes credentials to the browser console, which can be scraped by malicious scripts or seen during screen sharing.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to safely ignore the error object when handling authentication failures, or explicitly log only safe properties like `err.message`.
