import React from "react";
import { CImg, CRow,CCol} from "@coreui/react";

const DetailTable = (props) =>{
    let {info,clickData} = props;
    return(
        info.length >0 &&
        <CRow style={{overflow:"auto"}}>
        <table className="table table-hover">
            <thead className="detailHeader">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Eamil</th>
                    <th scope="col">PhoneNo</th>
                    <th scope="col">Detail</th>
                </tr>    
            </thead>
            <tbody className="detailRow">
                {info.map((data,index)=>{
                    return (
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>
                            <CImg
                                src={"/avatars/search.png"}
                                alt="id"
                                width={28}
                                height={28}
                                onClick={()=>clickData(data)
                                }
                                />
                            </td>  
                        </tr>
                );
                })}
            </tbody>
        </table>
        </CRow>
    )
}

export default DetailTable;