## YYYY-MM-DD - [Axios Error Log Leakage]
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console during login and registration. This leaks sensitive information such as plaintext passwords included in the `err.config.data` request payload to the browser console.
**Learning:** Default error logging (`console.error(err)`) is dangerous when dealing with authentication endpoints or Axios requests, as the error object retains full request context.
**Prevention:** Catch errors silently or use ES2019 optional catch binding (`catch { ... }`) for form submissions involving sensitive data, updating UI state instead of logging the raw error object.
