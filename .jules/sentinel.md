## YYYY-MM-DD - Credential Leakage in Axios Error Logs
**Vulnerability:** Raw Axios error objects (`err`) contain the original request payload in `err.config.data`.
**Learning:** When using Axios, logging raw error objects to the browser console can leak sensitive information like plaintext passwords and API requests.
**Prevention:** Avoid logging raw Axios errors directly. Instead, catch them silently or handle them securely, such as by using optional catch binding (`catch { ... }`) to avoid strict unused parameter linting rules while suppressing sensitive payload logs.