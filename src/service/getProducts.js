// @fix: pending
// http://localhost:8080/sale/registry
// http://localhost:8080/tickets/registry

// add try catch
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
  console.log(products);

  return products;
}

// [x] getProducts("carrental/get-cars")
// getProducts("client/get-clients")
// getProducts("employee/get-employees")
// getProducts("eventtickets/get-event-tickets")
// getProducts("excursion/get-excursions")
// getProducts("hotelpernight/get-hotels")
// getProducts("sale/get-sales")
// getProducts("tickets/get-tickets")
// getProducts("touristpackage/get-tourist-package")
