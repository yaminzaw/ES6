import React,{useState} from "react";
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CCard,
  CCardBody,
  CCardHeader,
  CLink,
  CCol,
  CRow,
  CImg,
} from "@coreui/react";
import routes from "../../../routes";
import { PI, area } from "./math.js";
import UserData from "./UserData";
import add from "./add";
import sub from "./sub";
import { CIcon } from "@coreui/icons-react";
import { cifAU } from "@coreui/icons";
import UserRegistration from "./userRegistration";
import UserProfile from "./userProfile";
import "./style.css";

const SubMenu = () => {
  //console.log("User Data", UserData);

  let result = sub(6, 2);
  let greater_count = UserData.filter((data) => data.age > 18).length;
  let greater_list = UserData.filter((data) => data.age > 18);
  let total = UserData.length;

  const [userName,setUserName] = useState("");
  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [phno,setPhno] = useState("");
  const [address,setAddress] = useState("");

  const handleChangeName = (e) =>{
    console.log(e.target.value);
    setUserName(e.target.value);
  }
  const handleChangeFullName = (e) =>{
    console.log(e.target.value);
    setFullName(e.target.value);
  }
  const handleChangeEmail = (e) =>{
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  const handleChangePhno = (e) =>{
    console.log(e.target.value);
    setPhno(e.target.value);
  }
  const handleChangeAddress = (e) =>{
    console.log(e.target.value);
    setAddress(e.target.value);
  }

  return (
    <div className="row">
      <div className="col" style={{ display: "flex" }}>
        <UserRegistration   handleChangeName={handleChangeName} 
        handleChangeFullName={handleChangeFullName} 
        handleChangeEmail={handleChangeEmail} 
        handleChangePhno={handleChangePhno}
        handleChangeAddress={handleChangeAddress}  />
      </div>
      <div className="col" style={{ display: "flex" }}>
        <UserProfile userName={userName} fullName={fullName} email={email} phno={phno}  address={address} />
      </div>
    </div>
    
  );
};

export default SubMenu;
