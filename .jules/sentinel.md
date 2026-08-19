## YYYY-MM-DD - Raw Axios Error Logging
**Vulnerability:** Logging raw Axios errors in `src/stores/Usuario.ts` exposes the original request payload (which includes plaintext passwords) to the console via `err.config.data`.
**Learning:** Raw error objects often contain unexpected sensitive data; redirecting to a console output without explicit serialization risks leaking secrets to browser dev tools or log aggregation services.
**Prevention:** Avoid `console.error(err)` when `err` may come from Axios. Use optional catch binding (`catch { ... }`) to silence errors silently, or explicitly extract and log non-sensitive strings (e.g. `err.message`).
