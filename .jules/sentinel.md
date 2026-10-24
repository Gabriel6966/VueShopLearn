## YYYY-MM-DD - Prevent Credential Leak in Error Logs
**Vulnerability:** Raw Axios error objects logged to the console in `src/stores/Usuario.ts` (`login` and `registro` methods).
**Learning:** When using Axios, raw error objects contain the original request payload in `err.config.data`. Logging these directly can leak sensitive information like passwords to the browser console.
**Prevention:** Catch errors silently or handle them securely by extracting only safe messages. Avoid logging raw Axios errors. Use ES2019 optional catch binding (`catch { ... }`) to avoid unused parameter lint errors.