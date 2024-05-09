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

  return products;
}

// getProducts("client/get-clients")
// getProducts("employee/get-employees")
// [x] getProducts("carrental/get-cars")
// [x] getProducts("hotelpernight/get-hotels")
// [x] getProducts("eventtickets/get-event-tickets")
// [x] getProducts("excursion/get-excursions")
// [x] getProducts("tickets/get-tickets")
// getProducts("sale/get-sales")
// getProducts("touristpackage/get-tourist-package")
