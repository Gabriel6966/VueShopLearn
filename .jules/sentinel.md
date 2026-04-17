## 2025-04-17 - Prevent Exposure of Plaintext Credentials via Axios Error Logs

**Vulnerability:**
In `src/stores/Usuario.ts`, caught network errors during user authentication and registration (`login` and `registro` functions) were blindly logged to the browser console using `console.error(err)`. The underlying HTTP client is Axios, meaning the raw error object contains the `err.config.data` property, which encapsulates the entire HTTP request payload. Consequently, any failed login or registration attempts would leak the plaintext password (and other user details) directly to the console in clear text.

**Learning:**
Default HTTP client libraries like Axios attach the original request config (including the unredacted request payload) to the error object. Blindly forwarding this object to logging mechanisms (`console.error`, error tracking services, etc.) inadvertently causes sensitive payload data (e.g., passwords, API keys, PII) to be leaked. This specific frontend mock-backend architecture (using db.json and json-server locally) relies on sending plaintext passwords, compounding the risk.

**Prevention:**
- Avoid directly logging raw third-party library error objects (e.g., Axios errors) in catch blocks without explicitly sanitizing them first.
- When handling exceptions during sensitive operations (like form submissions with credentials), use an empty catch block (`catch { ... }` combined with updating localized error state rather than generic logging, or meticulously construct a new redacted error object before logging.
- Be aware of the repository's strict linting (e.g., `@typescript-eslint/no-unused-vars`); omit the error variable entirely rather than catching and ignoring it.