## 2024-05-19 - Exposing Sensitive Data in Axios Error Logs
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console using `console.error(err)` in catch blocks during authentication and registration, potentially leaking sensitive request payloads like plaintext passwords.
**Learning:** Axios error objects contain the original request payload in `err.config.data`. Developers logging errors blindly to the console inadvertently expose this data to the browser console.
**Prevention:** Avoid logging raw Axios errors directly. Use ES2019 optional catch binding `catch` to silently handle errors in sensitive actions, or safely extract non-sensitive messages.
