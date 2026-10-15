## YYYY-MM-DD - [Axios Error Object Data Leakage]
**Vulnerability:** Raw Axios error objects contain the original request payload, which can leak sensitive information like passwords to the browser console if logged directly.
**Learning:** It is crucial to handle Axios errors securely in frontend applications, especially during authentication flows, to prevent credential leakage.
**Prevention:** Avoid logging raw Axios errors directly. Catch them silently using optional catch binding syntax or handle them without exposing request payloads.
