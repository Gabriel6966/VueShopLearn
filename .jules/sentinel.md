## 2024-07-27 - [Raw Axios Error Logging Credential Leak]
**Vulnerability:** [Logging raw Axios error objects in `src/stores/Usuario.ts` during authentication and registration, which leaks sensitive data (like passwords) present in `err.config.data` to the browser console]
**Learning:** [Raw Axios errors contain the full request payload, exposing credentials when logged directly using `console.error`]
**Prevention:** [Catch errors silently using optional catch binding (`catch { ... }`) or handle them securely without exposing the raw object, adding inline comments to explain why]
