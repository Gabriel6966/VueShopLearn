## 2024-05-19 - Do Not Log Raw Axios Errors
**Vulnerability:** In `src/stores/Usuario.ts`, the `login` and `registro` methods were catching errors using `catch (err)` and directly logging `err` to the browser console via `console.error(err)`.
**Learning:** When using Axios, raw error objects (`err`) contain the original request payload in `err.config.data`. This means logging the error directly would expose plaintext passwords or other sensitive user data directly to the browser console. This is especially dangerous for authentication endpoints.
**Prevention:** Always catch authentication errors silently (e.g., using `catch { ... }` or handling specific error properties without logging the whole object) to prevent leaking sensitive request data to the browser console.
