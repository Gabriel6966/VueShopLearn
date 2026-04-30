## 2025-02-28 - [Sensitive Info Leak in Console]
**Vulnerability:** `TiendaService.ts` and `Usuario.ts` log raw Axios error objects directly to the browser console when API requests fail (e.g., `console.error(err)` in `login` and `registro` functions).
**Learning:** This exposes sensitive user data, like passwords included in the request payload (`err.config.data`), which can be intercepted by anyone viewing the console or any scripts with console access.
**Prevention:** Never log raw HTTP error objects directly. Always map or filter out sensitive request data before logging, or simply log a generic error message along with an error code to the console for tracking without exposing user data.
