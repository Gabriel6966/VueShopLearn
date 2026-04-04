## 2024-04-04 - Fix HTTP Parameter Pollution and Query Injection
**Vulnerability:** User input (`email`, `id`, `productoId`) was being directly concatenated into API request URLs without sanitization or encoding in `TiendaService.ts`.
**Learning:** This occurs when developers build URLs manually via string concatenation instead of relying on secure mechanisms like URL encoding or HTTP client features (e.g., Axios `params` object), leading to potential injection or path traversal vulnerabilities.
**Prevention:** Always use `encodeURIComponent` for dynamic segments in URL paths. For query parameters, utilize the Axios `params` config object to ensure robust parameter serialization and encoding, thus neutralizing parameter pollution and injection risks.
