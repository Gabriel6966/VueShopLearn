## YYYY-MM-DD - [Axios Error Console Logging Leak]
**Vulnerability:** Raw Axios error objects logged to the console during login/registration contain the original request payload in `err.config.data`, leaking plaintext passwords to the browser console.
**Learning:** Raw console logging of errors in frontend store actions handling form submissions is discouraged for security, as they can silently expose credentials without breaking user flow.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to silently catch errors in authentication actions, updating local error state instead of exposing raw error objects.
