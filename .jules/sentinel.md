## 2024-05-24 - Client-side Error Information Exposure

**Vulnerability:** API error objects (including internal stack traces) were being logged directly to `console.log` and `console.error` in stores and views when API calls failed.

**Learning:** This generic error logging practice easily allows network information or stack traces to be exposed in the client-side console in production, posing an information disclosure risk. The app has a central `NetworkError` route specifically designed to handle network failures cleanly.

**Prevention:** Never use `console.log(error)` or `console.error(error)` for uncaught errors from API requests. Always intercept these errors and redirect the user to generic error handling routes (like `NetworkError` or `404Resource`) without logging the error object to the client console.
