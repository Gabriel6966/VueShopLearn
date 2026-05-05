## 2025-02-24 - Axios Error Object Payload Leak
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console via `console.error(err)` in the `login` and `registro` functions.
**Learning:** Axios error objects contain the original request configuration in `err.config`, which includes the request payload (`err.config.data`). When logging the raw error object, sensitive data such as plaintext passwords submitted during login or registration are exposed in the browser console.
**Prevention:** Do not log raw Axios error objects directly. Either omit the error variable (`catch { ... }`), selectively log non-sensitive fields (e.g., `err.message`), or sanitize the error object before logging.
