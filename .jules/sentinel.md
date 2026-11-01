## 2023-11-20 - Hardcoded API Base URL
**Vulnerability:** The API base URL (`http://localhost:3000`) is hardcoded in `src/services/TiendaService.ts`. This configuration prevents dynamic environment assignments, potentially leading to misconfigured endpoints in production which could expose local dev services or create broken endpoint deployments.
**Learning:** Hardcoding endpoints in service files tightly couples the application to specific environments. The Vue application relies on Vite, which supports `import.meta.env` for environment variables. Using `VITE_API_BASE_URL` with a fallback is a standard 12-factor app practice.
**Prevention:** Always use environment variables for service endpoints, API keys, and sensitive configuration.
