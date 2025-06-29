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
export default async function handleFetch(endpoint, method = "GET", body = null) {
  try {
    const config = {
      method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      ...(body && method !== "GET" ? { body: JSON.stringify(body) } : {}),
    };

    const response = await fetch(endpoint, config);
    const data = await response.json(); // Always parse the response

    if (!response.ok) {
      // Throw readable error
      throw { status: response.status, message: data.message || "Request failed" };
    }

    return data;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || "Network error",
    };
  }
}
