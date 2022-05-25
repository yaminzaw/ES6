import React from "react";
import { CImg } from "@coreui/react";

const DetailTable = (props) =>{
    let {info,clickData} = props;
    return(
        info.length >0 &&
        <table className="table table-striped">
            <thead className="detailHeader">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Eamil</th>
                    <th scope="col">PhoneNo</th>
                    <th scope="col">Action</th>
                </tr>    
            </thead>
            <tbody>
                {info.map((data,index)=>{
                    return (
                        <tr className="detailRow" key={index}>
                            <td scope="col">{data.id}</td>
                            <td scope="col">{data.name}</td>
                            <td scope="col">{data.email}</td>
                            <td scope="col">{data.phone}</td>
                            <td scope="col">
                            <CImg
                                src={"/avatars/search.png"}
                                alt="id"
                                width={35}
                                height={35}
                                style={{ marginLeft: "10px" }}
                                onClick={()=>clickData(data)}
                                />
                            </td>  
                        </tr>
                );
                })}
            </tbody>
        </table>
    )
}

export default DetailTable;