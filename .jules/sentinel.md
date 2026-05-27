## 2024-05-18 - Prevent Leaking Raw Axios Errors Containing Sensitive Payloads
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console via `console.error(err)` in `login` and `registro` functions in `src/stores/Usuario.ts`.
**Learning:** Axios error objects include the full original request in `err.config.data`, meaning plaintext passwords submitted during authentication and registration could be exposed in the browser console.
**Prevention:** Catch errors silently (e.g. using `catch { ... }`) or explicitly extract and log only safe properties (e.g. `err.message` or `err.response?.status`). Avoid logging the raw `err` object when handling sensitive data.
