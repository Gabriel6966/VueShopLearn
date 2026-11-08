## YYYY-MM-DD - Sentinel Journal
**Vulnerability:**
**Learning:**
**Prevention:**
## YYYY-MM-DD - Prevent Axios Credential Leakage in Console
**Vulnerability:** Raw Axios error objects logged to the console expose the original request payload (including plaintext passwords) via `err.config.data`.
**Learning:** In frontend applications using Axios, seemingly harmless `console.error(err)` statements can unintentionally become critical data leaks when authentication requests fail.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to silently handle authentication errors, or safely extract only the error message (`err.message`) instead of logging the entire raw error object.
