## YYYY-MM-DD - Prevent Axios Credential Leakage in Console
**Vulnerability:** Axios raw errors logging leaks request payload (including plaintext passwords) to browser console during authentication actions.
**Learning:** Raw error logging (`console.error(err)`) in frontend stores exposes `err.config.data` which contains sensitive data.
**Prevention:** Silently catch errors in authentication actions using ES2019 optional catch binding (`catch { ... }`) and add explanatory inline comments to avoid credential leaks without triggering unused variable lint rules.
