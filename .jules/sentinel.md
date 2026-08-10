## YYYY-MM-DD - Raw Axios Error Logging
**Vulnerability:** Raw Axios error objects (`err`) were being logged directly to the console in authentication and registration catch blocks.
**Learning:** Axios error objects contain the original request payload in `err.config.data`. Logging this object raw inadvertently leaks sensitive user data, such as plaintext passwords during login or registration, to the browser console.
**Prevention:** Avoid logging raw Axios error objects directly. Catch them silently if appropriate, or handle them securely by extracting and logging only non-sensitive information (e.g., HTTP status codes or generic error messages).
