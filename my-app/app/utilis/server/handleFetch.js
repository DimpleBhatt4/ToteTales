/**
 * Makes an HTTP request using the Fetch API and handles JSON responses.
 *
 * @param {string} endpoint - The URL to which the request is sent.
 * @param {string} [method="GET"] - The HTTP method (GET, POST, PUT, PATCH, DELETE).
 * @param {Object|null} [body=null] - The request body for non-GET requests (automatically stringified).
 * @returns {Promise<any>} Resolves with the parsed JSON response if successful.
 * @throws {Response|Error} Throws the response object if the request fails with a non-2xx status,
 *                          or an Error object for network failures.
 */
export default async function handleFetch(
  endpoint,
  method = "GET",
  body = null
) {
  try {
    // Construct request configuration
    const config = {
      method,
      credentials: "include", // Include credentials (e.g., cookies, sessions)
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
      ...(body && method !== "GET" ? { body: JSON.stringify(body) } : {}), // Add body only for non-GET requests
    };

    // Perform the fetch request
    const response = await fetch(endpoint, config);

    // If response status is not OK (non-2xx), throw the response to be handled by the caller
    if (!response.ok) {
      throw response;
    }

    // Parse and return the response JSON
    return await response.json();
  } catch (error) {
    // Throw network errors or failed fetch attempts to be handled by the consuming component
    throw error;
  }
}
