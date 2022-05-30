import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../nav/Nav";

const UserDetailIndex = () =>{
    const location = useLocation();
    const [id,setId] = useState("");
    const [firstname,setFirstname] = useState("");
    const [email,setEmail] = useState("");
    const [lastname,setLastname] = useState("");
    const [avatar,setAvatar] = useState("");
    
    //const [userDetail,setUserDetail] = useState([]);

    useEffect(()=>{
        if(location.state !== ""){
            setId(location.state.id);
            setFirstname(location.state.first_name);
            setLastname(location.state.last_name);
            setEmail(location.state.email);
            setAvatar(location.state.avatar);
        }

        // let data = JSON.parse(localStorage.getItem('dataArr')) ;
        // setUserDetail(data);
        // console.log(data)

    })
    return(
        <div>
        <Nav />
        <div className="container" >
                <div className="row" style={{marginBottom:"30px",textAlign:"center",marginTop:"30px"}}>
                    <h2>User Detail Form</h2>
                </div>
                <div className="row" >
                    <div className="col" style={{marginBottom:"30px",textAlign:"end"}}><label>Id</label></div>
                    <div className="col"  style={{marginBottom:"30px"}}><label>{id}</label></div>
                </div>
                <div className="row">
                    <div className="col" style={{marginBottom:"30px",textAlign:"end"}} ><label>First Name</label></div>
                    <div className="col" style={{marginBottom:"30px"}}><label>{firstname}</label></div>
                </div>
                <div className="row">
                    <div className="col" style={{marginBottom:"30px",textAlign:"end"}}><label>Last Name</label></div>
                    <div className="col" style={{marginBottom:"30px"}}><label>{lastname}</label></div>
                </div>
                <div className="row">
                    <div className="col" style={{marginBottom:"30px",textAlign:"end"}}><label>Email</label></div>
                    <div className="col" style={{marginBottom:"30px"}}><label>{email}</label></div>
                </div>
                <div className="row">
                    <div className="col" style={{marginBottom:"30px",textAlign:"end"}}><label>Avatar</label></div>
                    <div className="col" style={{marginBottom:"30px"}}><img src={avatar} /></div>
                </div>
            </div>
    </div>
    )
}

export default UserDetailIndex;