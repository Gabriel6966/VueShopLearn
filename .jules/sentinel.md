## 2024-11-23 - Raw Axios Error Object Leak
**Vulnerability:** Raw `console.error(err)` logging in `src/stores/Usuario.ts` exposed the entire Axios error object, which contains sensitive request data such as `err.config.data` (e.g., plaintext passwords) during login and registration.
**Learning:** Axios error objects are verbose and contain the full request configuration, making them inherently unsafe to log directly in the browser console.
**Prevention:** Avoid logging raw Axios errors; catch exceptions securely without parameters (e.g., `catch { ... }`) to prevent unintended exposure, and use local state (like `error.value`) to handle feedback securely.
