## 2024-07-08 - Raw Axios Error Logging
**Vulnerability:** Raw `console.error(err)` calls were found in `src/stores/Usuario.ts` during authentication and registration, which can leak sensitive request data (like passwords) to the browser console.
**Learning:** Axios error objects contain the original request payload in `err.config.data`.
**Prevention:** Avoid logging raw Axios errors directly; instead, catch them silently or extract only non-sensitive parts for debugging.
