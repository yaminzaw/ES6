import React from "react";

const Fruitlist = (props) => {
  return (
    <>
      <ul className="fruit-container">
        {props.fruits.map((fruit, index) => {
          return <li key={index}>{fruit.name}</li>;
        })}
      </ul>
      {/* <ul className="fruit-container">
            {this.props.drinks.map((drink,index)=>{
                return <li key={index}>{drink.name}</li>
            })}
            </ul>  */}
    </>
  );
};

// class Fruitlist extends React.Component{
//     render(){
//         return(
//             <>
//                 <ul className="fruit-container">
//                     {this.props.fruits.map((fruit,index)=>{
//                         return <li key={index}>{fruit.name}</li>
//                     })}
//                 </ul>
//                 {/* <ul className="fruit-container">
//                 {this.props.drinks.map((drink,index)=>{
//                     return <li key={index}>{drink.name}</li>
//                 })}
//                 </ul>  */}
//             </>
//         )
//     }
// }

export default Fruitlist;
