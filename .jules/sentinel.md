## YYYY-MM-DD - Avoid logging raw errors on authentication failure
**Vulnerability:** The application logs raw Axios error objects directly to the console (`console.error(err)`) during login and registration. This can expose sensitive information like user credentials included in the request payload (`err.config.data`) to the browser console.
**Learning:** In Vite applications, raw API errors often contain the original request payload. Logging these on the client side risks leaking credentials if the user or an attacker checks the console.
**Prevention:** Avoid logging raw error objects, especially during authentication. Silently catch errors or log safe, sanitized error messages.
