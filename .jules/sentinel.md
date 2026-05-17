## 2024-05-17 - Prevent Sensitive Data Leak in Axios Errors

**Vulnerability:** Raw `AxiosError` objects were being logged directly to the browser console (`console.error(err)`) during user authentication and registration in the Pinia store (`src/stores/Usuario.ts`).
**Learning:** The raw error object from Axios includes the original request configuration (`err.config.data`), which contains the raw stringified payload. For authentication requests, this exposes plaintext passwords and other sensitive PII directly in the browser's developer console if a request fails (e.g., connection error or 500 server error).
**Prevention:** Never log raw HTTP client error objects directly to the console or any client-side logging service when handling authentication, registration, or other sensitive requests. Instead, handle errors silently or extract only safe, generic error codes/messages to display to the user or log for debugging.
