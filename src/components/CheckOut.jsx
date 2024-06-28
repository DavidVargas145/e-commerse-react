import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext"; 

/*DB FIREBASE*/
import { db } from "../firebase/firebaseConfig"; 
import { addDoc, collection,serverTimestamp } from "firebase/firestore"; 


export const CheckOut = () => {

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [formCheckout, setFormCheckout] = useState({
    name: "",
    phone: 0,
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleName = (e) => {
    setFormCheckout({
      ...formCheckout,
      name: e.target.value,
    });
  };

  const handlePhone = (e) => {
    setFormCheckout({
      ...formCheckout,
      phone: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setFormCheckout({
      ...formCheckout,
      email: e.target.value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const newOrder = {
      buyer: formCheckout,
      items: cart,
      totalPrice,
      date: serverTimestamp(), 
    };

    
    const order = await addDoc(collection(db, "orders"), newOrder);

    
    setFormCheckout({
      name: "",
      phone: 0,
      email: "",
    });


   
    clearCart();

   
    setOrderId(order.id);

  };

  if (orderId) {
    return (
      <>
        <h3>Su ID de orden de compra es...</h3>
        <br />
        <h3>{orderId}</h3>
      </>
    )
  }

  return (
    <div className="container d-flex justify-content-center m-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre</label>
        <input type="text" className="form-control" value={formCheckout.name} onChange={handleName} />
        <label htmlFor="">Teléfono</label>
        <input type="number" className="form-control" value={formCheckout.phone} onChange={handlePhone} />
        <label htmlFor="">Email</label>
        <input type="email" className="form-control" value={formCheckout.email} onChange={handleEmail} />
        <input type="submit" className="mt-3 btn btn-success" value="Terminar la compra" />
      </form>
    </div>
  );
};