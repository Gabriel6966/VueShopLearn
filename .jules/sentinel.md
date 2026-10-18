## YYYY-MM-DD - [Prevent Information Leak in Console]
**Vulnerability:** Raw Axios error objects containing request config (which includes plaintext passwords from login/register requests) were logged directly to the browser console using `console.error(err)`.
**Learning:** In frontend applications, logging raw error objects from HTTP clients like Axios can expose sensitive request payloads to anyone inspecting the console. Store actions handling sensitive form submissions should manage error state silently.
**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to silently swallow the error object in authentication flows, preventing it from being leaked to the console.
