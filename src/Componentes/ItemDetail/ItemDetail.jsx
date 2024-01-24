
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className="contenedor-item">
        <h3>Nombre: {nombre} </h3>
        <h4>Precio: ${precio} </h4>
        <p>ID: {id} </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur natus facilis nihil dolores repellendus autem fugiat id deserunt enim, ea iure eaque quidem itaque iste nostrum eius, cumque esse facere?</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail