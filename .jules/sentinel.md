## 2024-05-15 - Raw Axios Error Logging Leaking Sensitive Data
**Vulnerability:** Raw `err` object from Axios was being logged via `console.error(err)` inside catch blocks during user authentication (`login` and `registro`).
**Learning:** Axios error objects contain the original request payload inside `err.config.data`. Logging the entire object in plaintext exposes sensitive information, such as passwords used during login/registration, to the browser console.
**Prevention:** Avoid logging raw Axios error objects. Use empty catch blocks for silent error state updates where applicable, or manually extract and log only non-sensitive error properties (e.g., `err.message` or `err.response?.status`).
