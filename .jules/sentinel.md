## YYYY-MM-DD - [Prevent sensitive data leak in Axios errors]
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the console via `console.error(err)` upon login and registration failures. These objects contain the original request payload in `err.config.data`, exposing plaintext passwords to the browser console.
**Learning:** Default error logging can inadvertently leak sensitive information like credentials when using HTTP clients that attach request configurations to the error object.
**Prevention:** Catch errors silently using ES2019 optional catch binding (`catch {`) when handling sensitive requests to prevent unused variable linting errors and avoid logging raw error objects to the client console.
