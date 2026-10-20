## 2024-05-18 - Exposed Error Detail Mitigation
**Vulnerability:** Raw Axios error objects and stack traces are logged via `console.error(err)` when `login` or `registro` requests fail in Pinia store (`src/stores/Usuario.ts`), risking information disclosure.
**Learning:** Store action catch blocks often inadvertently write full HTTP request configs or API details to the user console if not intercepted, which can be scraped by malicious actors in a client-side Vite build.
**Prevention:** Always either catch UI-driven request errors silently or conditionally access `err instanceof Error ? err.message : String(err)` when logging is necessary, without leaking the original configuration (`err.config`).
