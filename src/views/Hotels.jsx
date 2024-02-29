import Card from "../components/Card";
import Navbar from "../components/Navbar";
import mockData from "../service/mockData";

const Hotels = () => {

  return (
    <>
      <Navbar />
      <h1>Hoteles</h1>
      <main className="hoteles__container">
        {
          mockData.hoteles.map(hotel => (
            <Card key={hotel.productCode} data={hotel} />
          ))
        }
      </main>
    </>
  )
}

export default Hotels