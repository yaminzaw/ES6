import React from "react";
import Nav from "../nav/Nav";

const Error = () =>{
    return(
        <>
        <Nav></Nav>
        <div style={{textAlign:"center"}}>
            <h1>404</h1><br/>
            <h1>Page not Found</h1>
        </div>
        </>
    )
}

export default Error;