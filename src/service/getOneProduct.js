export const getOneProduct = async (path) => {

  const response = await fetch(`http://localhost:8080/${path}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const singleProduct = await response.json();

  return singleProduct;
}
