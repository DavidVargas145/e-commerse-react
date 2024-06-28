import { useContext } from 'react'
import { ItemCount } from './ItemCount'
import { CartContext } from '../context/CartContext'
import '../App.css'
import swal from 'sweetalert';



export const ItemDetail = ({ id, name, description, img, price, stock }) => {

    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {

        const item = {
            id,
            price,
            name
        }

        addItem(item, quantity)

        swal.fire({
            icon: "success",
            title: "Se agrego el producto al carrito"
        })

    }

    return (
        <>

            <div className="custom-container">
                <div className="image-container">
                    <img src={img} alt={name} />
                </div>
                <div className="info">
                    <h5><b>{name} </b> </h5>
                    <p> {description} </p>
                    <p>Precio: ${price}</p>
                     <ItemCount stock={stock} onAdd={onAdd} />
                </div>
            </div>


        </>

    );
};