export default async function handleFetch(endpoint, config = {}) {
  try {
    console.log("Fetching data from:", endpoint);

    const response = await fetch(endpoint, config);

    console.log("Raw response:", response);

    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }

    const data = await response.json();
    console.log("Parsed response:", data);

    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    return null;
  }
}
