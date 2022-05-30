import React from "react";
import Nav from "../nav/Nav";
import { Link,useHistory } from "react-router-dom";

const EmployeeListIndex = () =>{

    const Employee = [
        {
            id: "1",
            username: "aungkhantkyaw",
            fullname: "Aung Khant Kyaw",
            email: "aungkhantkyaw@gmail.com",
            ph_no: "09123456789",
            address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
        },
        {
            id: "2",
            username: "zinminmyat",
            fullname: "Zin Min Myat",
            email: "zinminmyat@gmail.com",
            ph_no: "0948296244",
            address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
        },
        {
            id: "3",
            username: "supyaemaung",
            fullname: "Su Pyae Maung",
            email: "supyaemaung@gmail.com",
            ph_no: "0992857364",
            address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
        },
        {
            id: "4",
            username: "ayethirimon",
            fullname: "Aye Thiri Mon",
            email: "ayethirimon@gmail.com",
            ph_no: "092283930771",
            address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
        },
        {
            id: "5",
            username: "eieihtwe",
            fullname: "Ei Ei Htwe",
            email: "eieihtwe@gmail.com",
            ph_no: "09758917304",
            address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
        }
    ]

    console.log(Employee)

    const history = useHistory();
    

    const clickDetail = (i) =>{
        
        //let obj = {name:i.username,fullname:i.fullname,email:i.email,ph_no:i.ph_no,address:i.address};
        //localStorage.setItem("name", JSON.stringify(obj));
        history.push("/detail",{name:i.username,fullname:i.fullname,email:i.email,ph_no:i.ph_no,address:i.address});
        
    }

    return(
        <div>
            <Nav />
            <table class="table table-hover" style={{marginLeft:"auto",marginRight:"auto",marginTop:"40px",width:"60%",textAlign:"center",border:"1px solid black"}}>
                <thead style={{backgroundColor:"gray",height:"50px"}}>
                    <td style={{border:"1px solid black"}}>User Name</td>
                    <td style={{border:"1px solid black"}}>Full Name</td>
                    <td style={{border:"1px solid black"}}>Email</td>
                    <td style={{border:"1px solid black"}}>Phone Number</td>
                    <td style={{border:"1px solid black"}}>Address</td>
                    <td style={{border:"1px solid black"}}>Detail</td>
                </thead>
                <tbody >
                    {Employee.map((data,index)=>{
                        return (
                            <tr >
                                <td style={{border:"1px solid black"}}>{data.username}</td>
                                <td style={{border:"1px solid black"}}>{data.fullname}</td>
                                <td style={{border:"1px solid black"}}>{data.email}</td>
                                <td style={{border:"1px solid black"}}>{data.ph_no}</td>
                                <td style={{border:"1px solid black"}}>{data.address}</td>
                                <td style={{border:"1px solid black"}}><label onClick={()=>clickDetail(data)} style={{cursor:"pointer"}}>detail</label></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeListIndex;