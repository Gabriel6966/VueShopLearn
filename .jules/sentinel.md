## YYYY-MM-DD - Fix Sensitive Data Leak in Axios Error Logs
**Vulnerability:** Raw Axios error objects (`err`) were being logged directly to the browser console during login and registration. This exposed sensitive payload data, such as passwords, found in `err.config.data`.
**Learning:** Logging raw HTTP errors or generic error objects directly to the console or logs can inadvertently leak sensitive information, like authentication credentials or personal data.
**Prevention:** Always extract and log only the necessary properties of an error object (like `err.message` safely cast as a string). Avoid logging the entire error object, especially for network requests handling authentication or PII.
