import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../nav/Nav";

const Detail = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [ph, setPh] = useState("");
  const [address, setAddress] = useState([]);

  //const [userDetail,setUserDetail] = useState([]);

  useEffect(() => {
    if (location.state !== "") {
      setName(location.state.name);
      setFullName(location.state.fullname);
      setEmail(location.state.email);
      setPh(location.state.ph_no);
      setAddress(location.state.address);
    }

    // let data = JSON.parse(localStorage.getItem('dataArr')) ;
    // setUserDetail(data);
    // console.log(data)
  });
  return (
    <div>
      <Nav />
      <div className="container">
        <div
          className="row"
          style={{
            marginBottom: "30px",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <h2>Employee Detail Form</h2>
        </div>
        <div className="row">
          <div
            className="col"
            style={{ marginBottom: "30px", textAlign: "end" }}
          >
            <label>User Name</label>
          </div>
          <div className="col" style={{ marginBottom: "30px" }}>
            <label>{name}</label>
          </div>
        </div>
        <div className="row">
          <div
            className="col"
            style={{ marginBottom: "30px", textAlign: "end" }}
          >
            <label>Full Name</label>
          </div>
          <div className="col" style={{ marginBottom: "30px" }}>
            <label>{fullName}</label>
          </div>
        </div>
        <div className="row">
          <div
            className="col"
            style={{ marginBottom: "30px", textAlign: "end" }}
          >
            <label>Email</label>
          </div>
          <div className="col" style={{ marginBottom: "30px" }}>
            <label>{email}</label>
          </div>
        </div>
        <div className="row">
          <div
            className="col"
            style={{ marginBottom: "30px", textAlign: "end" }}
          >
            <label>Phone Number</label>
          </div>
          <div className="col" style={{ marginBottom: "30px" }}>
            <label>{ph}</label>
          </div>
        </div>
        <div className="row">
          <div
            className="col"
            style={{ marginBottom: "30px", textAlign: "end" }}
          >
            <label>Address</label>
          </div>
          <div className="col" style={{ marginBottom: "30px" }}>
            <label>{address}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
