import React from "react";
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

const SubMenu = () => {
  console.log("User Data", UserData);

  let result = sub(6, 2);
  let greater_count = UserData.filter((data) => data.age > 18).length;
  let greater_list = UserData.filter((data) => data.age > 18);
  let total = UserData.length;

  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader
            style={{
              padding: "30px",
              fontFamily: "monospace",
              fontSize: "20px",
              color: "#a6057b",
            }}
          >
            Student List
          </CCardHeader>
          <CCardHeader
            style={{
              padding: "30px",
              fontFamily: "monospace",
              fontSize: "20px",
              color: "#a6057b",
            }}
          >
            Total Student is {total}
          </CCardHeader>
          <CCardHeader
            style={{
              padding: "30px",
              fontFamily: "monospace",
              fontSize: "20px",
              color: "#a6057b",
            }}
          >
            Student whose age are greater than 18 is {greater_count}
          </CCardHeader>
          <CCardBody>
            {/* {
            UserData.map((data,index)=>{
              return(
              <div key={{index}}>
                <div style={{display:"flex"}}><p style={{marginRight:'50px'}}><CImg src={'/avatars/id.png'} alt="id" width={28} height={28} style={{marginLeft:'10px'}} />Student ID</p><p>:{data.student_id}</p></div>
                <div style={{display:"flex"}}><p style={{marginRight:'30px'}}><CImg src={'/avatars/name.png'} alt="name" width={28} height={28}  style={{marginLeft:'5px'}} />Student Name</p><p>:{data.student_name}</p></div>
                <div style={{display:"flex"}}><p style={{marginRight:'85px'}}><CImg src={'/avatars/email.png'} alt="email" width={28} height={28}  style={{marginLeft:'5px'}}/>Email</p><p>:{data.email}</p></div>
                <div style={{display:"flex"}}><p style={{marginRight:'75px'}}><CImg src={'/avatars/career.png'} alt="career" width={28} height={28}  style={{marginLeft:'5px'}}/>Career</p><p>:{data.career}</p></div>
                <div style={{display:"flex"}}><p style={{marginRight:'75px'}}><CImg src={'/avatars/phone.png'} alt="png" width={28} height={28}  style={{marginLeft:'5px'}} />Phone</p><p>:{data.phone}</p><br/></div>
                <hr style={{width:'100%'}}></hr>
              </div>  
              )
            })
          } */}

            {greater_list.map((data, index) => {
              let bg = "";
              if (index % 2 == 0) {
                bg = "#f1d4eb";
              } else {
                bg = "#efb0c6";
              }

              return (
                <div key={index}>
                  <div
                    className="container"
                    style={{
                      background: `${bg}`,
                      padding: "30px",
                      fontFamily: "monospace",
                      fontSize: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="row">
                      <div className="col" style={{ display: "flex" }}>
                        <p style={{ marginRight: "15px" }}>
                          <CImg
                            src={"/avatars/id.png"}
                            alt="id"
                            width={28}
                            height={28}
                            style={{ marginLeft: "10px" }}
                          />
                        </p>
                        <p>Student ID</p>
                      </div>
                      <div className="col">
                        <p>:&emsp;{data.student_id}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col" style={{ display: "flex" }}>
                        <p style={{ marginRight: "15px" }}>
                          <CImg
                            src={"/avatars/name.png"}
                            alt="id"
                            width={28}
                            height={28}
                            style={{ marginLeft: "10px" }}
                          />
                        </p>
                        <p>Student Name</p>
                      </div>
                      <div className="col">
                        <p>:&emsp;{data.student_name}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col" style={{ display: "flex" }}>
                        <p style={{ marginRight: "15px" }}>
                          <CImg
                            src={"/avatars/email.png"}
                            alt="id"
                            width={28}
                            height={28}
                            style={{ marginLeft: "10px" }}
                          />
                        </p>
                        <p>Email</p>
                      </div>
                      <div className="col">
                        <p>:&emsp;{data.email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col" style={{ display: "flex" }}>
                        <p style={{ marginRight: "15px" }}>
                          <CImg
                            src={"/avatars/career.png"}
                            alt="id"
                            width={28}
                            height={28}
                            style={{ marginLeft: "10px" }}
                          />
                        </p>
                        <p>Career</p>
                      </div>
                      <div className="col">
                        <p>:&emsp;{data.career}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col" style={{ display: "flex" }}>
                        <p style={{ marginRight: "15px" }}>
                          <CImg
                            src={"/avatars/phone.png"}
                            alt="id"
                            width={28}
                            height={28}
                            style={{ marginLeft: "10px" }}
                          />
                        </p>
                        <p>Phone</p>
                      </div>
                      <div className="col">
                        <p>:&emsp;{data.phone}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col" style={{ display: "flex" }}>
                        <p style={{ marginRight: "15px" }}>
                          <CImg
                            src={"/avatars/adult.png"}
                            alt="id"
                            width={28}
                            height={28}
                            style={{ marginLeft: "10px" }}
                          />
                        </p>
                        <p>Age</p>
                      </div>
                      <div className="col">
                        <p>:&emsp;{data.age}</p>
                      </div>
                    </div>
                  </div>

                  <hr style={{ color: "#b00983" }} />
                </div>
              );
            })}

            {/* <h5  style={{fontWeight:"bold",display:'flex',justifyContent:'left',alignItems:'center',textAlign:'justify'}}>No:{data.id}&emsp;ID:{data.student_id}&emsp;Name:{data.student_name}&emsp;Email:{data.email}&emsp;Career:{data.career}&emsp;Phone No:{data.phone}</h5> */}
            {/* <table style={{width:'100%'}}>
            {UserData.map((data,index)=>{
              return (
                
                <tbody key={index}>
                  <tr >
                    <td style={{width:'70px'}}>No:{data.id}</td>
                    <td style={{width:'70px'}}>ID:{data.student_id}</td>
                    <td style={{width:'100px'}}>Name:{data.student_name}</td>
                    <td style={{width:'100px'}}>Email:{data.email}</td>
                    <td style={{width:'100px'}}>Career:{data.career}</td>
                    <td style={{width:'100px'}}>Phone No:{data.phone}</td>
                  </tr>
                </tbody>
              )
            })}
            </table> */}

            {/* {UserData.map((data,index)=>{
              return(
                <div key={index} style={{display:'flex'}}>
                  <h5 style={{width:'70px'}}>No:{data.id}</h5><h5 style={{width:'100px'}}>ID:{data.student_id}</h5><h5 style={{width:'150px'}}>Name:{data.student_name}</h5><h5 style={{width:'230px'}}>Email:{data.email}</h5><h5 style={{width:'200px'}}>Career:{data.career}</h5><h5 style={{width:'300px'}}>Phone No:{data.phone}</h5>
                </div>
                
              )
            })} */}
            {/* 
            <p style={{color:'green'}}>Add = {add(4,5,6)}</p>
            {result <0 &&
              <p style={{color:'red'}}>Substration = {result}</p>
            }
            {result >=0 && 
              <p style={{color:'green'}}>Substration = {result}</p>
            }
            <CIcon name="cilBuilding" />
            <CIcon name="cilSettings"></CIcon> */}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default SubMenu;
