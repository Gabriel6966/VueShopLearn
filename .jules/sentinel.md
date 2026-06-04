## 2024-06-04 - [Axios Error Object Logging Data Leak]
**Vulnerability:** Raw Axios error objects logged to the console (e.g. `console.error(err)`) during authentication requests can expose sensitive information. Axios attaches the original request configuration, including the `data` property that holds plaintext passwords, to the error object.
**Learning:** Logging the raw exception/error object directly in catch blocks, especially for authentication or user creation endpoints, will leak sensitive payload data to the console and logs.
**Prevention:** Catch errors silently where appropriate, or explicitly log only safe properties like `err.message` or a custom string. Never pass the raw exception object from an HTTP client directly to a generic logging function.
