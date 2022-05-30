import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProfileIndex = () =>{

    const [name,setName] = useState("");
    const location = useLocation();

    useEffect(()=>{
        //console.log(location.state);
        if(location.state !== undefined){
            setName(location.state.name);
        }
       
    })

    return(
        <h1 style={{textAlign:"center"}}>My name is {name}</h1>
    )
}

export default ProfileIndex;