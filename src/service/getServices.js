// @fix: make reusable with paramth through props
export const getCars = async () => {
  const response = await fetch("http://localhost:8080/carrental/registry", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const cars = await response.json();
  console.log(cars);
}

// @fix: pending
// http://localhost:8080/sale/registry
// http://localhost:8080/tickets/registry
// http://localhost:8080/touristpackage/registry
