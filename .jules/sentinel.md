## YYYY-MM-DD - Exposed sensitive data in error logs
**Vulnerability:** Raw Axios error objects (`err`) were being directly logged to the console using `console.error(err)` in the `login` and `registro` functions of `src/stores/Usuario.ts`.
**Learning:** Raw Axios error objects include the original request payload in `err.config.data`. Logging these directly can expose sensitive information like passwords directly to the browser console.
**Prevention:** Avoid logging raw Axios errors directly, especially in authentication workflows. Catch errors silently and update local error state (e.g. `error.value`) instead, ensuring that credentials are not leaked.
