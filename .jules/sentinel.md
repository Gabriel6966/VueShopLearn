## 2024-07-18 - Exposed sensitive data in logs via Axios error objects
**Vulnerability:** Raw Axios error objects (`err`) contain the original request payload in `err.config.data`, which can leak sensitive information like passwords to the browser console when logged.
**Learning:** Store actions handling form submissions (e.g., login/registration) were using `console.error(err)` which inadvertently exposed plaintext passwords to the browser console.
**Prevention:** Avoid logging raw Axios errors directly. Instead, omit the error using ES2019 optional catch binding (`catch { ... }`), catch them silently, or handle them securely by extracting safe messages without logging the raw object.
