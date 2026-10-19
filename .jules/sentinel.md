## YYYY-MM-DD - Remove raw Axios error logging in store

**Vulnerability:** Raw Axios error objects were being logged to the console (`console.error(err)`) during user login and registration forms.

**Learning:** Axios error objects contain the original request payload in `err.config.data`. Logging these raw errors exposes plaintext sensitive information like passwords directly to the browser console.

**Prevention:** Use ES2019 optional catch binding (`catch { ... }`) to omit the error entirely, preventing the raw error from being logged or triggering strict linting rules, while gracefully updating local error state.