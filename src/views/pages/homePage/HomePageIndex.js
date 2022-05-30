import React from "react";
import Nav from "../nav/Nav";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HomePageIndex = () =>{

    return(
        <>
            <Nav />
            <div className="container" style={{textAlign:"center",marginTop:"80px"}}>
                <h1>Welcome</h1>
            </div>
        </>
       
    )
}

export default HomePageIndex;