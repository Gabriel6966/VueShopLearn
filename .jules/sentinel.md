## 2024-06-13 - [Axios Error Credential Leak]
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console using `console.error(err)` in authentication (login/register) catch blocks.
**Learning:** Raw Axios error objects contain the original request payload in `err.config.data`. If an error occurs during a login or registration attempt, the plaintext password sent in the request body is printed directly to the browser console.
**Prevention:** Avoid logging raw Axios errors directly, especially in sensitive operations. Use ES2019 optional catch binding (`catch { ... }`) to intentionally discard the error, or safely extract non-sensitive properties (like `err.message` or `err.response.status`) if logging is necessary.
