import React from "react";
import {
    CRow,
    CCol,
    CSelect,
    CButton
  } from "@coreui/react";

const StudentSearch = (props) =>{
    let {dropData,searchData,searchChange,searchClick} = props;

    return(
        <CRow>
            <CCol lg="4">
                <CSelect className="select" value={searchData} onChange={searchChange} >
                    <option value="">---Please Select---</option>
                    {dropData.map((data,index)=>{
                        return(
                            <option className="option" key={index} id={data.id} value={data.id}>{data.name}</option>
                        )
                  
                    })}
                </CSelect>
            </CCol>
            <CCol lg="2">
                <CButton className="btnAdd" onClick={searchClick}>Search</CButton>
            </CCol>
        </CRow>
    )
}

export default StudentSearch;