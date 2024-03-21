const Card = ({ data }) => {

  const { name, ubication, descript, numbOfRooms, startDate, price, status } = {...data};

  // @fix: validation with status vble
  console.log(status);
  // @fix: make more generic to adapt to differents props

  return (
    <div className='card__container'>
      <img
        src={data.image}
        alt={data.imageAlt}
        className='card__image'
      />
      <h2>{name}</h2>
      <h3>{ubication}</h3>
      <div className="card__information">
        <p>{descript}</p>
        <span>Hab. disponibles: {numbOfRooms}</span>
        <span>{startDate}</span>
        <span className='card__price'>${price}</span>
      <button className='card__button'>Contacta al vendedor</button>
      </div>
    </div>
  )
}

export default Card