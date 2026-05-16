## 2026-05-16 - Prevent Axios Errors from Leaking Sensitive Request Data
**Vulnerability:** Axios attaches the original request payload to its error object (`err.config.data`). In the Pinia `Usuario` store, raw Axios errors were being logged (`console.error(err)`), inadvertently leaking plaintext passwords to the browser console during failed login or registration attempts.
**Learning:** Never log raw Axios or API error objects directly in frontend code, as they contain full request context including sensitive credentials.
**Prevention:** Catch errors silently (`catch { ... }`) or explicitly extract and log only safe, specific fields (like `err.message` or `err.response.status`) while setting generic user-facing error state.
