import React from 'react'

const Cart = () => {

  const quieresComprar = sessionStorage.getItem('productos');

  return (
    <div>
      Cart
      <br />
      <span>Quieres comprar: {quieresComprar} productos</span>
    </div>
  )
}

export default Cart