## YYYY-MM-DD - [Axios Error Password Leak]
**Vulnerability:** Raw console logging of Axios error objects in authentication flows exposed the original request payload (`err.config.data`), which contained plaintext passwords, to the browser console.
**Learning:** When using Axios, `error` objects contain the full request configuration. Logging these directly in forms handling sensitive data (like login/registration) will unintentionally leak credentials.
**Prevention:** Catch errors silently using ES2019 optional catch binding (`catch { ... }`) in authentication store actions and update local error state instead of logging the raw error object.
