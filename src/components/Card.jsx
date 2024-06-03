
const Card = ({ data, type }) => {

  const { name, ubication, descript, numbOfRooms, startDate, price } = {...data};

  let genericPhoto = ''

  switch (type) {
    case 'car':
      genericPhoto = 'https://images.unsplash.com/photo-1516771317026-14d76f5396e5?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      break;
    case 'hotel':
      genericPhoto = 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    break;
    case 'event':
      genericPhoto = 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    break;
    case 'excursion':
      genericPhoto = 'https://images.unsplash.com/photo-1705890303898-554208f0765a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    break;
    case 'ticket':
      genericPhoto = 'https://images.unsplash.com/photo-1529905270444-b5e32acc3bdd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    break;
    default:
      break;
  }

  return (
    <div className='card__container'>
      {
        !data.image
          ? (
            <img
              src={genericPhoto}
              alt={`${type} - ${genericPhoto}`}
              className='card__image'
            />
          )
          : (
            <img
              src={data.image}
              alt={data.imageAlt}
              className='card__image'
            />
          )
      }
      <h2>{name}</h2>
      <h3>{ubication}</h3>
      <div className="card__information">
        <p className="card__description">{descript}</p>
        <span>Hab. disponibles: {numbOfRooms}</span>
        <span>Disponibilidad desde: {startDate}</span>
        <span className='card__price'>${price}</span>
      <button className='card__button'>Contacta al vendedor</button>
      </div>
    </div>
  )
}

export default Card