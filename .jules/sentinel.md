## 2024-05-18 - Prevented Credential Leak in Axios Error Logs
**Vulnerability:** Axios error objects were logged directly to the browser console via `console.error(err)` in authentication stores (e.g., `src/stores/Usuario.ts`).
**Learning:** Logging a raw Axios error object inadvertently exposes sensitive user data, because `err.config.data` contains the raw plaintext request payload (such as login credentials).
**Prevention:** Avoid passing raw `err` objects to `console` functions. Either catch errors silently for user flow control, or log only safe, destructured fields (like `err.message`).
