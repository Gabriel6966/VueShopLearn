## YYYY-MM-DD - Raw Axios Error Logging
**Vulnerability:** Uncaught Axios errors from authentication endpoints log the complete request configuration (`err.config.data`), which includes sensitive user data like plaintext passwords, to the browser console.
**Learning:** Even client-side logs are dangerous when using Axios for authentication, as the error object retains full request context.
**Prevention:** Always silently catch authentication errors or carefully destructure only non-sensitive properties (like `err.message`) before logging.
