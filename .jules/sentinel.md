## 2024-05-24 - [Information Disclosure via Error Handling]
**Vulnerability:** Raw `console.log(error)` and `console.error(error)` statements were being used across the views and stores to handle API request failures.
**Learning:** This leaked internal implementation details and stack traces to the user's browser console, posing a security risk of information disclosure.
**Prevention:** Always sanitize error messages. For UI components, handle errors gracefully by redirecting to a generic error page (e.g., `NetworkError` route). In stores/services where routing isn't applicable, log safe generic error strings instead of the raw error object.
