## 2023-10-27 - [Raw Axios Error Logging]
**Vulnerability:** Raw Axios error objects (`err`) were being logged directly to the console (`console.error(err)`) in the `login` and `registro` functions of the `Usuario` store.
**Learning:** Raw Axios error objects contain the original request payload in `err.config.data`. Logging these objects directly to the browser console leaks sensitive information, such as plaintext passwords submitted during login and registration, which can be viewed by anyone opening the developer tools.
**Prevention:** Catch errors silently (using an empty `catch` block) or handle them securely without logging the raw error object, especially in authentication/registration flows. Explicit comments should be added to explain why the error is silently caught.
