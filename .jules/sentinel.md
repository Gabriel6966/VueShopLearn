## 2024-05-15 - Raw Error Object Logging Exposing Passwords
**Vulnerability:** Raw Axios error objects (`err`) were being directly logged using `console.error(err)` in authentication and registration flows (e.g., `src/stores/Usuario.ts`).
**Learning:** Raw Axios error objects contain the original request payload in `err.config.data`. If an API request fails (e.g., due to a network issue or backend constraint), the complete request payload, including plaintext user passwords, is leaked directly into the browser console.
**Prevention:** In flows that transmit sensitive information, strictly avoid logging raw error objects. Catch the error silently if acceptable, redirect to generic error routes, or manually parse and log only safe fields.
