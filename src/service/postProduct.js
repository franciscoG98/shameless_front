export const postProducts = async (path, product) => {

  const response = await fetch(`http://localhost:8080/${path}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(product)
  });
  const products = response;

  return products;
}
