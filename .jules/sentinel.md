## 2024-05-29 - [Avoid logging raw Axios error objects in authentication flows]
**Vulnerability:** Logging raw Axios error objects (e.g., `console.error(err)`) during authentication flows can leak sensitive data, such as plaintext passwords, because Axios includes the original request payload in `err.config.data`.
**Learning:** This specific mock backend architecture requires sending the plaintext password for verification, making the original request payload highly sensitive.
**Prevention:** Avoid logging raw Axios errors; catch exceptions silently or handle them securely without exposing request configuration or payload data.
