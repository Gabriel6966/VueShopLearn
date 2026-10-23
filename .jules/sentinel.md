## YYYY-MM-DD - Prevent Sensitive Info Leak in Console

**Vulnerability:** Raw Axios error objects containing sensitive request data (such as passwords in login requests) are logged directly to the console (`console.error(err)`) in `src/stores/Usuario.ts`.
**Learning:** In frontend applications, raw error objects from HTTP clients like Axios often contain the original request config (e.g., `err.config.data`), which can leak user credentials or API tokens into browser logs, where they might be harvested by malicious scripts or seen by shoulder-surfers.
**Prevention:** Ensure errors are either caught silently, generic error messages are used, or only safe parts of the error (e.g., `err.message`) are logged. Never pass the raw exception object directly to console functions.
