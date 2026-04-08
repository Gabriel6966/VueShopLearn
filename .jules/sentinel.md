## 2024-05-18 - Prevent HTTP Parameter Pollution / Query Injection
**Vulnerability:** User-provided email input in `src/services/TiendaService.ts` was concatenated directly into a query string in `apiClient.get(\`/usuarios?email=\${email}\`)`.
**Learning:** This repo lacked proper encoding for query parameters, which could lead to query injection or parameter pollution.
**Prevention:** Always use `encodeURIComponent` or the Axios `params` config object when passing user-supplied data into API request URLs.
