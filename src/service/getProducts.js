export const getProducts = async (path) => {
  const response = await fetch(`http://localhost:8080/${path}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const products = await response.json();

  return products;
}
