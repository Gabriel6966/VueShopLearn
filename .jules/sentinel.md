## YYYY-MM-DD - Prevent Axios Password Leak
**Vulnerability:** Raw Axios error objects logged to the browser console contain the original request payload (`err.config.data`), which can inadvertently expose sensitive information like plaintext passwords during login and registration.
**Learning:** Raw console logging of errors is a common but dangerous pattern when dealing with external API requests containing credentials, as developers often don't realize how much context HTTP clients attach to error objects.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to omit the error object entirely in store actions handling form submissions, updating local error state instead of raw logging to the console.
