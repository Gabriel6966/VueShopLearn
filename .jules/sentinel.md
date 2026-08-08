## YYYY-MM-DD - Fix hardcoded API base URL
**Vulnerability:** Hardcoded API endpoint (`http://localhost:3000`) in API client configuration.
**Learning:** Hardcoding endpoints can leak local network configurations or cause production environments to inadvertently point to test endpoints.
**Prevention:** Use environment variables (e.g., `import.meta.env.VITE_API_BASE_URL`) for API endpoints to prevent hardcoded configuration misconfigurations, with safe local fallbacks if needed.
