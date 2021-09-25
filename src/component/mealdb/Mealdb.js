import React from 'react';
import './mealdb.css';
import {useState,useEffect} from 'react';
import Mealproduct from './Mealproduct';
import Cart from '../cart/Cart';
const Mealdb = () => {
  const [state, setstate] = useState([]);
    const[cart,setcart]=useState([]);

  useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setstate(data.meals));
},[])


const handleaddtocart=(product) =>{
    const newcart=[...cart,product];
    setcart(newcart);

}
        
    return (
        <div className="meals">
        <div className="mealscontainer">{
                   state.map(meal=><Mealproduct
                   key={state.idMeal}
                    meal={meal}
                    handleaddtocart={handleaddtocart}
                   
                   ></Mealproduct>)
               }
               </div>

               
           <div className="cart-container">

               <Cart cart={cart}> </Cart>
           </div>
           
          
            
        </div>
    );
};

export default Mealdb;