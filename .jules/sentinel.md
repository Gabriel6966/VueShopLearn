## YYYY-MM-DD - Prevent Sensitive Data Leakage in Axios Errors
**Vulnerability:** Raw Axios error objects contain the original request payload in `config.data`. Logging these raw errors directly to the browser console during authentication requests exposes plaintext passwords and other sensitive user data.
**Learning:** In frontend applications using Axios, unhandled or logged errors can silently leak sensitive credentials to the browser console. Standard console logging is dangerous in authentication flows.
**Prevention:** Catch errors silently using the ES2019 optional catch binding (`catch { ... }`) or explicitly extract non-sensitive properties before logging.
