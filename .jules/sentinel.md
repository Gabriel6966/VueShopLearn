## YYYY-MM-DD - [Axios Error Payload Leak]
**Vulnerability:** Raw Axios error objects (`err`) contain the original request payload in `err.config.data`. Logging these directly to the console exposes sensitive information like passwords.
**Learning:** Store actions handling form submissions (e.g., login/registration) should not use `console.error(err)` as it inadvertently leaks user credentials to the browser console.
**Prevention:** Catch errors silently using the ES2019 optional catch binding (`catch { ... }`) to avoid strict linting errors (`@typescript-eslint/no-unused-vars`) and prevent logging sensitive data. Update local error state instead of redirecting or logging.
