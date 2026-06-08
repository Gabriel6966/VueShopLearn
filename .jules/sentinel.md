## 2025-05-15 - [Information Exposure] Raw Axios Errors Leak Request Payloads

**Vulnerability:** The raw Axios error (`err`) was being logged directly to the browser console (`console.error(err)`) within the login and registration catch blocks.
**Learning:** Axios error objects store the original request configuration, including the request body (`err.config.data`), which meant plaintext user credentials (emails, passwords) sent in POST/GET requests were leaked to the client's browser console upon any network or API failure.
**Prevention:** Avoid logging raw HTTP client error objects directly to the browser or external logging services. Catch them silently or map them to generic error messages, explicitly avoiding the inclusion of the `.config` property. Use ES2019 optional catch binding (`catch { ... }`) to avoid unused variable linting rules while suppressing the error object.
