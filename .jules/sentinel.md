## YYYY-MM-DD - Prevent Information Disclosure
**Vulnerability:** Raw error objects (`err`) contain the original request payload in `err.config.data` when using Axios. If an error occurs during login or registration, the raw error is logged to the console, exposing sensitive information such as plaintext passwords.
**Learning:** Raw console logging of Axios errors can leak sensitive information. It's crucial to catch errors silently or handle them securely without exposing internal data structures to the browser console.
**Prevention:** Avoid logging raw Axios errors directly, use ES2019 optional catch binding syntax (`catch { ... }`) to silence them safely or extract and log only non-sensitive messages.
