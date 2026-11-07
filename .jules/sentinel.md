## YYYY-MM-DD - Prevent Leaking Passwords via Axios Errors
**Vulnerability:** The raw error object from Axios requests was logged to the browser console in the `login` and `registro` methods of the `Usuario` store.
**Learning:** Axios error objects (`AxiosError`) include the original request config, including the raw payload in `err.config.data`, which can leak plaintext passwords to the browser console on a network or server error.
**Prevention:** Avoid logging raw error objects from HTTP clients, especially when sensitive user data is involved. Instead, log specific safe properties like `err.message` or a generic message.
