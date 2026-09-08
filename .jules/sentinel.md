## YYYY-MM-DD - Axios Error Credential Leakage
**Vulnerability:** Raw Axios error objects (`err`) were being logged to the browser console via `console.error(err)` during authentication and registration, exposing plain-text passwords sent in the request payload (`err.config.data`).
**Learning:** In Vite/Vue applications using Axios, logging raw error objects directly to the console during sensitive operations can inadvertently leak user credentials to local tools or browser inspector instances.
**Prevention:** Always use ES2019 optional catch binding (`catch { ... }`) to silently handle errors during authentication flows or explicitly sanitize errors before logging (e.g., `if (err instanceof Error) console.error(err.message)`).
