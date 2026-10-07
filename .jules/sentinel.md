## YYYY-MM-DD - Avoid logging raw Axios error objects

**Vulnerability:** Raw Axios error objects (`err`) contain the original request config (`err.config.data`), which can inadvertently log sensitive credentials (e.g., passwords sent in login/registration requests) to the browser console.
**Learning:** Using `console.error(err)` inside Pinia actions for form submissions leaks plaintext passwords if the API call fails.
**Prevention:** Catch errors silently or destructure safe fields (like `err.message`) before logging.
