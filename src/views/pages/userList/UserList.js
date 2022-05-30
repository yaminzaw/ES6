import React from "react";
import { Link, useHistory } from "react-router-dom";
import Nav from "../nav/Nav";
import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get("https://reqres.in/api/users", {
          params: { page: 1 },
        });

        if (result.status === 200) {
          setUserList(result.data.data);
        } else {
          console.log("Error");
        }
      } catch (error) {
        console.log("Error");
      }
    })();
  }, []);

  const history = useHistory();
  const clickDetail = (i) =>{
    history.push("/userDetail",i);
    
}

  return (
    <div>
      <Nav />
      {userList.length > 0 && (
        <table class="table table-hover" style={{marginLeft:"auto",marginRight:"auto",marginTop:"40px",width:"60%",textAlign:"center",border:"1px solid black"}}>
          <thead style={{backgroundColor:"gray",height:"50px"}}>
            <th style={{border:"1px solid black"}}>ID</th>
            <th style={{border:"1px solid black"}}>First Name</th>
            <th style={{border:"1px solid black"}}>Last Name</th>
            <th style={{border:"1px solid black"}}>Email</th>
            <th style={{border:"1px solid black"}}>Avatar</th>
            <th style={{border:"1px solid black"}}>Detail</th>
          </thead>
          <tbody>
            {userList.map((data, index) => {
              return (
                <tr key={index}>
                  <td v>{data.id}</td>
                  <td style={{border:"1px solid black"}}>{data.first_name}</td>
                  <td style={{border:"1px solid black"}}>{data.last_name}</td>
                  <td style={{border:"1px solid black"}}>{data.email}</td>
                  <td style={{border:"1px solid black"}}><img src={data.avatar} /></td>
                  <td style={{border:"1px solid black"}}><label onClick={()=>clickDetail(data)}  style={{cursor:"pointer"}}>detail</label></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
