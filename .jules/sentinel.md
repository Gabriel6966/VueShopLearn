## 2024-05-24 - Information Disclosure via Console Logs
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console using `console.error(err)` in the authentication store (`src/stores/Usuario.ts`).
**Learning:** Axios errors contain the entire original request payload in `err.config.data`. Logging this object during login or registration inadvertently leaks plaintext passwords to the browser console.
**Prevention:** Avoid logging raw Axios errors. Either log specific, non-sensitive properties (like `err.message`) or silently catch the error and update local application state (e.g., `error.value`).
