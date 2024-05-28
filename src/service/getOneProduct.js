export const getOneProduct = async (path, productCode) => {

  console.log('path ', path);
  console.log('productCode ', productCode);
  // esto recibe la ruta el id (productCode) y hago el fetch

  const response = await fetch(`http://localhost:8080/${path}/${productCode}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const singleProduct = await response.json();

  return singleProduct;
}
