## 2024-05-31 - Raw Axios Error Logging
**Vulnerability:** Raw Axios error objects (`err`) were being logged directly to the browser console (`console.error(err)`) in `src/stores/Usuario.ts` during login and registration.
**Learning:** Axios error objects include the original request configuration in `err.config.data`. This means the plaintext password sent during login/registration was leaked to the browser console when a network or API error occurred, exposing sensitive credentials.
**Prevention:** Avoid logging raw Axios error objects, especially those originating from authentication or sensitive operations. Handle errors silently or log only specific, non-sensitive properties (e.g., `err.message` or `err.response.status`) to ensure request payloads are not exposed.
