## 2024-05-02 - Prevent raw Axios errors from leaking sensitive data
**Vulnerability:** Raw `axios` error objects logged via `console.error` expose request payload (e.g., plaintext passwords) under `err.config.data` in the browser console.
**Learning:** Even though error handling seems correct, logging third-party objects directly can leak security-critical information since it contains request configuration specifics.
**Prevention:** Catch errors silently (using `catch { ... }`) or securely extract non-sensitive properties from error objects for logging.
