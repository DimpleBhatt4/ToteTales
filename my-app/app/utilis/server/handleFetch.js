export default async function handleFetch(endpoint) {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    if (!response.ok) {
    console.log('this is when respojsenis not OK');
      throw new Error("Failed to fetch data");
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}
