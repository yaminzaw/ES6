import React from "react";

const SearchTable = (props) =>{
    let {resultData} = props;

    return(
        resultData.length > 0 &&
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Eamil</th>
                        <th scope="col">PhoneNo</th>
                        <th scope="col">Description</th>
                    </tr>    
                </thead>
                <tbody>
                    {resultData.map((data,index)=>{
                         return (
                            <tr key={index}>
                                <td scope="col">{data.id}</td>
                                <td scope="col">{data.name}</td>
                                <td scope="col">{data.email}</td>
                                <td scope="col">{data.phone}</td>
                                <td scope="col">{data.description}</td>  
                            </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SearchTable;