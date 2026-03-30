## 2025-03-30 - Plaintext Password Storage in LocalStorage
**Vulnerability:** The application was storing user objects, including plaintext passwords, directly into `localStorage` and client-side reactive state upon successful login or registration.
**Learning:** This exposes the user's password to any client-side scripts, browser extensions, or physical access, significantly increasing the risk of credential theft, especially if an XSS vulnerability is ever present.
**Prevention:** Always sanitize user objects retrieved from APIs before storing them in client-side state or `localStorage`. Omit sensitive fields like `contrasena` (password), tokens, or secrets before persisting data.
