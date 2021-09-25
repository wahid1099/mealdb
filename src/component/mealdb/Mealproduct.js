import React from 'react';
import './mealdb.css';

const Mealproduct = (props) => {
    const btn={
        backgroundColor:'#FF0000',
        padding:'8px',
        color:'white',
       
    }
   const {idMeal,strMeal,strMealThumb,strCategory,strInstructions,strTags,strYoutube}=props.meal;
  
    return (
        <div>
            <img src={strMealThumb} alt="image"/>
            <h3>Meal name: {strMeal}</h3>
            <h4>Category: {strCategory}</h4>
            <h4>{strTags}</h4>
            <p>Instruction<small>{strInstructions.slice(0,250)}</small></p>

            <button style={btn}><a href={strYoutube} style={btn} target="_blank">Youtube Channel</a></button>
            <br/>
            <button onClick={()=>props.handleaddtocart(props.meal)} className="btn"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</button>

            
        </div>
    );
};

export default Mealproduct;