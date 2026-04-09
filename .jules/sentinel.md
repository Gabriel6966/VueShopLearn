## 2026-04-09 - Prevent HTTP Parameter Pollution via Axios params
**Vulnerability:** URL string interpolation passing user-supplied strings directly into API URL paths/queries, allowing HTTP parameter pollution/injection.
**Learning:** Using `encodeURIComponent` for path variables and Axios' `params` configuration for query variables protects against parameter injection attacks natively.
**Prevention:** Always use the `params` config object in Axios for queries and `encodeURIComponent` for path IDs instead of direct template literal injection.
