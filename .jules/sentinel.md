## 2026-07-24 - [CRITICAL] Prevent Sensitive Data Leak in Axios Errors

**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console via `console.error(err)` in authentication store actions (`login` and `registro`).

**Learning:** When using Axios, raw error objects contain the original request payload in `err.config.data`. Logging these errors during authentication exposes plaintext user credentials (like passwords) directly to the browser console.

**Prevention:** Never log raw Axios errors directly, especially in authentication or payment flows. Either catch them silently and update local error state (e.g., `error.value = 'Error message'`), or handle them securely by extracting only non-sensitive information (e.g., `err.message`) before logging.
