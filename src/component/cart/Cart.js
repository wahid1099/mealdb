import React from 'react';

const Cart = (props) => {
   // console.log(props)
    // const {strMeal}=props.cart;
    // console.log(strMeal);
    const products=[]
    for(const name of props.cart){
        //console.log(name.strMeal);
        const productname = name.strMeal;
        products.push(productname);

    }
    return (
        <div>
            <h1>Order summaery</h1>
           
            <h4>{products}</h4>
        </div>
    );
};

export default Cart;