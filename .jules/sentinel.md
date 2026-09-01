## YYYY-MM-DD - Prevent sensitive data leak in Axios errors
**Vulnerability:** Raw Axios error objects logged to the console during authentication expose the original request payload (including plaintext passwords) via `err.config.data`.
**Learning:** Default error logging patterns (like `console.error(err)`) are dangerous when used with HTTP clients like Axios in sensitive contexts, as the error objects contain the full request configuration.
**Prevention:** Silently catch errors during authentication or selectively extract only safe properties (like `err.message`) before logging. Use ES2019 optional catch binding (`catch { ... }`) to avoid linting violations for unused error variables.
