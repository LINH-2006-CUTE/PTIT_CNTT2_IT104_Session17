import React from 'react'

function Bai2() {
    const product = {
        id: 1,
        nameProduct : "Coca Cola",
        price: "1000$",
        quantity: 10
    }
  return (
    <>
    
    <h2>Thong tin san pham</h2>

    <p>
        ID: {product.id} <br />
        Name: {product.nameProduct} <br />
        Price: {product.price} <br />
        Quantity: {product.quantity}
    </p>
    </>
  )
}

export default Bai2