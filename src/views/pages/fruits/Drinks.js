import React from "react";

const Drinks = (props) => {
  return (
    <ul className="fruit-container">
      {props.drinks.map((drink, index) => {
        return (
          <li key={index}>
            {drink.name}<br/>
            {drink.price}
          </li>
        );
      })}
    </ul>
  );
};

// class Drinks extends React.Component{
//     render(){
//         return(
//             <ul className="fruit-container">
//                 {this.props.drinks.map((drink,index)=>{
//                     return <li key={index}>{drink.name}{drink.price}</li>
//                 })}
//             </ul>
//         )
//     }
// }

export default Drinks;
