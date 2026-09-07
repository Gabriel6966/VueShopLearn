## YYYY-MM-DD - Exposed Credentials in Axios Error Logs
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console during login and registration. Axios errors include the original request payload in `err.config.data`, which exposed plaintext passwords to the browser console.
**Learning:** Default error logging practices (like `console.error(err)`) are unsafe for authentication flows because HTTP client libraries often attach sensitive request configurations to the error object.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to silently handle errors in authentication flows, or explicitly extract safe messages (e.g., `err.message`) instead of logging the raw error object.
