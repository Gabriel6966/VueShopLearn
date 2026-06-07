## 2024-06-07 - Sensitive Data Exposure via Axios Errors
**Vulnerability:** Raw error logging in catch blocks (`console.error(err)`) during authentication/registration requests.
**Learning:** When using Axios, failed requests result in an error object where `err.config.data` contains the original plaintext payload (including passwords). Logging this raw error object exposes user credentials in the browser console.
**Prevention:** Always silently catch network errors when handling sensitive data, or specifically format/sanitize the error output to ensure `config.data` or sensitive headers are not logged.
