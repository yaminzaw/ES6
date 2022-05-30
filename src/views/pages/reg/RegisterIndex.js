import { CRow, CCol, CLabel, CInput } from "@coreui/react";
import React, { useState } from "react";
import Nav from "../nav/Nav";
import axios from "axios";

const RegisterIndex = () => {
  const [empSave, setEmpSave] = useState("");
  const [empError, setEmpError] = useState("");

  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [ph, setPh] = useState("");
  const [address, setAddress] = useState("");
  const [dept, setDept] = useState("");

  const [valiTestUserName, setValiTestUserName] = useState("");
  const [valiTestFullName, setValiTestFullName] = useState("");
  const [valiTestEmail, setValiTestEmail] = useState("");
  const [valiTestPh, setValiTestPh] = useState("");
  const [valiTestAdd, setValiTestAdd] = useState("");
  const [valiTestDept, setValiTestDept] = useState("");

  const [allVali,setAllVali] = useState("");

  let namechk = /^[a-z]+$/g;
  let fullchk = /[^0-9]/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phformat = /^[0-9]{0,9}(\.[0-9]{1,2})?$/;

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePh = (e) => {
    setPh(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleChangeDept = (e) => {
    setDept(e.target.value);
  };

  // const valiUserName = async(userName) =>{
  //     try{
  //         if(userName != ""){
  //             console.log(userName+"is valid")
  //         }
  //     }catch{
  //         console.log(userName+"is invalid")
  //     }
  // }

  const save = async (e) => {
    if (userName === "") {
      console.log("please fill user name");
    } else if (userName.match(namechk)) {
      setValiTestUserName(userName);
      console.log("Valid User Name");
    } else {
      console.log("Invalid User Name");
    }

    if (fullName === "") {
      console.log("please fill full name");
    } else if (fullName.match(fullchk)) {
      setValiTestFullName(fullName);
      console.log("Valid Full Name");
    } else {
      console.log("Invalid Full Name");
    }

    if (email === "") {
      console.log("please fill email name");
    } else if (email.match(mailformat)) {
      setValiTestEmail(email);
      console.log("Valid email");
    } else {
      console.log("Invalid email");
    }

    if (ph === "") {
      console.log("please fill full name");
    } else if (ph.match(phformat)) {
      setValiTestPh(ph);
      console.log("Valid ph no");
    } else {
      console.log("Invalid phno");
    }

    if (address != "") {
      setValiTestAdd(address);
    }
    if (dept != "") {
      setValiTestDept(dept);
    }


    // if(valiTestUserName !="" && valiTestFullName !="" && valiTestEmail !="" && valiTestAdd !="" && valiTestPh !="" && valiTestDept!=""){
    //     try {
    //         let obj = {
    //           username: valiTestUserName,
    //           fullname: valiTestFullName,
    //           email: valiTestEmail,
    //           ph_no: valiTestPh,
    //           address: valiTestAdd,
    //           department: valiTestDept,
    //         };
      
    //       //   if(obj.username !="" && obj.fullname!="" && obj.email!="" && obj.ph_no !="" && obj.address !="" && obj.department!=""){
    //       //     data = await axios.post(
    //       //         "http://localhost:4000/api/v1/employee/createEmployee",
    //       //         obj
    //       //       );
    //       //   }
    //         const data = await axios.post(
    //           "http://localhost:4000/api/v1/employee/createEmployee",
    //           obj
    //         );
    //         console.log(data);
      
    //         if (data.data.status !== 200) {
    //           // setEmpError(data.data.message);
    //           setEmpError("Save Unsuccessful");
    //           setTimeout(() => {
    //             setEmpError("");
    //           }, 3000);
    //         } else {
    //             //setEmpSave(data.data);
    //             setEmpSave("Save Successful");
    //             setTimeout(() => {
    //               setEmpSave("");
    //             }, 3000);
    //         }
    //       } catch(error) {
    //           setEmpError(error);
    //           setTimeout(() => {
    //             setEmpError("");
    //           }, 3000);
    //       }
    // }

    try {
      let obj = {
        username: valiTestUserName,
        fullname: valiTestFullName,
        email: valiTestEmail,
        ph_no: valiTestPh,
        address: valiTestAdd,
        department: valiTestDept,
      };

    //   if(obj.username !="" && obj.fullname!="" && obj.email!="" && obj.ph_no !="" && obj.address !="" && obj.department!=""){
    //     data = await axios.post(
    //         "http://localhost:4000/api/v1/employee/createEmployee",
    //         obj
    //       );
    //   }
      const data = await axios.post(
        "http://localhost:4000/api/v1/employee/createEmployee",
        obj
      );
      console.log(data);

      if (data.data.status !== 200) {
        // setEmpError(data.data.message);
        setEmpError("Save Unsuccessful");
        setTimeout(() => {
          setEmpError("");
        }, 3000);
      } else {
          //setEmpSave(data.data);
          setEmpSave("Save Successful");
          setTimeout(() => {
            setEmpSave("");
          }, 3000);
      }
    } catch(error) {
        setEmpError(error);
        setTimeout(() => {
          setEmpError("");
        }, 3000);
    }
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div
          className="row"
          style={{ color: "green", textAlign: "center", marginTop: "30px" }}
        >
          <h2>{empSave}</h2>
        </div>
        <div
          className="row"
          style={{ color: "red", textAlign: "center", marginTop: "30px" }}
        >
          <h2>{empError}</h2>
        </div>
        <div
          className="row"
          style={{
            marginBottom: "30px",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <h2>Employee Registration Form</h2>
        </div>
        <div className="row">
          <div
            className="col"
            style={{ marginBottom: "30px", textAlign: "end" }}
          >
            <label>User Name</label>
          </div>
          <div className="col" style={{ marginBottom: "30px" }}>
            <input type="text" onChange={(e) => handleChangeUserName(e)} />
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
            <input type="text" onChange={(e) => handleChangeFullName(e)} />
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
            <input type="text" onChange={(e) => handleChangeEmail(e)} />
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
            <input type="number" onChange={(e) => handleChangePh(e)} />
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
            <input type="text" onChange={(e) => handleChangeAddress(e)} />
          </div>
        </div>
        <div className="row">
          <div
            className="col"
            style={{ marginBottom: "30px", textAlign: "end" }}
          >
            <label>Department</label>
          </div>
          <div className="col" style={{ marginBottom: "30px" }}>
            <input type="text" onChange={(e) => handleChangeDept(e)} />
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <button onClick={save} style={{ width: "35%" }}>
              save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterIndex;
