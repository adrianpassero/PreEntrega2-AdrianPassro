
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img, descripcion}) => {
  return (
    <div className="contenedor-item">
        <h3>Nombre: {nombre} </h3>
        <h4>Precio: ${precio} </h4>
        <p>ID: {id} </p>
        <p>Descripcion: {descripcion}</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail