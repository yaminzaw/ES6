import React from "react";
// import Fruitlist from ".views/fruits/fruitlist";
// import FruitRegister from "./fruitRegister";
import { useState,useEffect } from "react";
import Drinks from "./Drinks";
import Fruitlist from "./fruitlist";
import FruitRegister from "./fruitRegister";
// import Drinks from ".views/fruits/Drinks";

const FruitIndex = () =>{
    const [fruits, setFruits] = useState([
        {
          name: "Apple",
        },
        {
          name: "Orange",
        },
        {
          name: "Banana",
        },
        {
          name: "Pineapple",
        },
      ]);
      const [drinks, setDrinks] = useState([
        {
          name: "coffee",
          price: 1000,
        },
        {
          name: "ice coffee",
          price: 1200,
        },
        {
          name: "strawberry juice",
          price: 1500,
        },
      ]);
    
      const [fruitName, setFruitName] = useState("");
      const [title, setTitle] = useState("Fruit List");
    
      useEffect(() => {
        setTimeout(() => {
          setTitle("Fruit Data");
        }, 3000);
        let price = drinks.filter((d) => {
          return d.price > 1000;
        });
        setDrinks(price);
      }, []);
    
      const handleChange = (e) => {
        setFruitName(e.target.value);
      };
    
      const addFruit = () => {
        setFruits([...fruits, { name: fruitName }]);
        setFruitName("");
      };
   
        
        
        return (
            <div className="container">
              <h1>{title}</h1>
              <Fruitlist fruits={fruits} />
              <Drinks drinks={drinks}/>
              <FruitRegister
                fruitName={fruitName}
                handleChange={handleChange}
                addFruit={addFruit}
              />
            </div>
         );
}

export default FruitIndex;