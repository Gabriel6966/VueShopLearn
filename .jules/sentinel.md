## 2026-06-10 - Raw Axios error objects expose credentials
**Vulnerability:** The Axios error object `err` is logged directly to the browser console when API requests fail, for example in `login` and `registro` functions.
**Learning:** Raw error objects (`err`) contain the original request payload in `err.config.data`. Logging these objects directly to the browser console can leak sensitive information like user passwords.
**Prevention:** Avoid logging raw Axios errors directly; instead, catch them silently or handle them securely without exposing internal data structures to the console.
