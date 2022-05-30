import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TestTwoIndex = () =>{
    const location = useLocation();
    const [name,setName] = useState("")

    useEffect(()=>{
        if(location.state !== ""){
            setName(location.state.name)
        }
    })

    return(
        <>
            <h1>hello!! this is test two {name}</h1>
        </>
    )
}

export default TestTwoIndex;