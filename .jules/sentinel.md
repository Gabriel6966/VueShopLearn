## YYYY-MM-DD - Prevent Sensitive Data Leak in Console
**Vulnerability:** Axios errors containing request payload (including plaintext passwords) were logged directly to the console via `console.error(err)` in `Usuario.ts`.
**Learning:** Raw Axios errors include the `config.data` property, which exposes sensitive payloads submitted in POST/GET requests directly to the browser console.
**Prevention:** Avoid logging raw Axios errors directly, especially in authentication flows. Catch errors silently using optional catch binding (`catch { ... }`) or explicitly sanitize them before logging.
