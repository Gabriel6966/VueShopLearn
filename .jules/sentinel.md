## 2024-05-18 - [Axios Error Information Leakage]
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console via `console.error(err)` during login and registration.
**Learning:** In Vite applications, Axios request payload data is preserved within the error object in `err.config.data`. This means logging the raw error inadvertently exposes plaintext passwords in the browser console.
**Prevention:** Catch errors silently (`catch { ... }`) during sensitive operations or extract generic error messages instead of logging raw error objects directly.
