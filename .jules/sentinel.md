## 2024-05-24 - [Insecure Credential Storage in LocalStorage]
**Vulnerability:** The `Usuario` object containing plaintext `contrasena` (passwords) was directly stored into the browser's `localStorage` and reactive state (`usuario.value`).
**Learning:** This architectural gap leads to plaintext credential exposure to anyone who has access to the local machine, browser extensions, or potential XSS exploits.
**Prevention:** Always explicitly omit sensitive fields, such as passwords, before persisting objects into client-side stores or reactive states. Use destructuring to construct safe objects without the sensitive properties.
