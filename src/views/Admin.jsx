import { useState, useEffect } from "react";

const Admin = () => {

  const [carRentalData, setCarRentalData] = useState({
    name: '',
    descript: '',
    startDate: '',
    deadlineDate: '',
    price: '',
    carType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarRentalData({ ...carRentalData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log('antes: ' + JSON.stringify(carRentalData));
    e.preventDefault();
    // alert('form data: ', carRentalData);
    alert('form data: ' + JSON.stringify(carRentalData));
  }

  useEffect(() => {}, [carRentalData])

  return (
    <>
      <h1>Admin Dashboard</h1>

      <form action="" method="post" className='form__car-rental'>

        <h2 className="form__title--car-rental">Renta de Autos</h2>

        <label htmlFor="name">Nombre</label>
        <input
          className="form__input--carrental"
          type="text"
          name="name"
          id="name"
          onChange={(e) => handleChange(e)}
          value={carRentalData.name}
        />

        <label htmlFor="descript">Descripción</label>
        <textarea
          className="form__input--carrental"
          type="text"
          rows={3}
          name="descript"
          id="descript"
          onChange={(e) => handleChange(e)}
          value={carRentalData.descript}
        ></textarea>

        <label htmlFor="startDate">Fecha Inicio</label>
        <input
          className="form__input--carrental"
          type="date"
          name="startDate"
          id="startDate"
          onChange={(e) => handleChange(e)}
          value={carRentalData.startDate}
        />
        
        <label htmlFor="deadlineDate">Fecha Entrega</label>
        <input
          className="form__input--carrental"
          type="date"
          name="deadlineDate"
          id="deadlineDate"
          onChange={(e) => handleChange(e)}
          value={carRentalData.deadlineDate}
        />

        <label htmlFor="price">Precio</label>
        <input
          className="form__input--carrental"
          type="number"
          name="price"
          id="price"
          onChange={(e) => handleChange(e)}
          value={carRentalData.price}
        />
        
        <label htmlFor="carType">Tipo de Auto</label>
        <input
          className="form__input--carrental"
          type="text"
          name="carType"
          id="carType"
          onChange={(e) => handleChange(e)}
          value={carRentalData.carType}
        />

        <button
          className="form__btn--car-rental"
          type="submit"
          onSubmit={(e) => handleSubmit(e)}
        >Buscar</button>

      </form>
    </>
  )
}

export default Admin