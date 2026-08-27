## YYYY-MM-DD - Fix sensitive data leak in error handling
**Vulnerability:** Axios errors expose original request payloads (including plaintext passwords during login/registration) to the browser console.
**Learning:** Raw Axios error objects (`err`) contain the original request payload in `err.config.data`. Logging these directly (e.g., via `console.error`) leaks sensitive information to the console.
**Prevention:** Avoid logging raw Axios errors directly; instead, catch them silently (using optional catch bindings `catch { ... }` in TypeScript to avoid `no-unused-vars` linting rules) or handle them securely without exposing internal data payloads.
