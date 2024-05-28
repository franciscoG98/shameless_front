export const putProduct = async (path, product, id) => {

  // pass id in some way
  const response = await fetch(`http://localhost:8080/${path}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(product)
  });
  const updatedProduct = await response.json();

  return updatedProduct;
}
