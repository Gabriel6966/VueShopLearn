## 2024-10-03 - Axios Error Credential Leak
**Vulnerability:** Axios errors thrown during login/registration contain the original request payload (including plaintext passwords) in `err.config.data`, which is leaked to the browser console when using raw `console.error(err)`.
**Learning:** In Vite/Axios applications, raw error objects can unintentionally leak sensitive request payloads to the client side.
**Prevention:** Always use optional catch bindings (`catch { ... }`) or safely extract error messages in auth stores instead of logging raw error objects to prevent credential leakage.
