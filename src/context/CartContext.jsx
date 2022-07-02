import React, { createContext, useState, useEffect } from "react";

// Función para consumir el contexto desde otros componentes
export const CartContext = createContext();

// Función que me servirá para pasar valores y envolver la aplicación
const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart)

  }, [cart]);

  // Agregar al carrito
  const addToCart = (productos, marcador) => {

    const idProducto = productos.id;
    
    //some devuelve true o false
    function isInCart(id) {return cart.some((prod) => prod.id === id)};
    
    if (isInCart(idProducto)) {

      console.log("Ya se encuentra en el carrito");
    } else {
      setCart([...cart, { ...productos, marcador }]);
    }

    // console.log(isInCart(idProducto));
  };

  const RemoveFromCart = (id) => {
    const filtrado = cart.filter((prod) => prod.id !== id);
    setCart(filtrado);
    
  }

  const VaciarCarrito = () => {
    setCart([]);
  }

  return (
    // En atributos paso aquello a lo que voy a acceder desde otros componentes
    <CartContext.Provider value={{ cart, addToCart, RemoveFromCart, VaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
