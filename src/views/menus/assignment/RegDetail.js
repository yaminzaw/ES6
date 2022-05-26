import React from "react";
import { CRow,CCol, CLabel, CInput, CSelect, CInputRadio, CInputCheckbox, CButton } from "@coreui/react";

const RegDetail = (props) =>{

    let {name,
        radioName,
        result,finalResult} = props;
    
        console.log("Result is "+result)

    return(
        <>
        <CRow className="RowName">
            <CCol lg="4">
                <CLabel>Student Name</CLabel>
            </CCol>
            <CCol lg="4">
                <CLabel>{finalResult.name}</CLabel>
            </CCol>
        </CRow>
        <CRow className="RowName">
            <CCol lg="4">
                <CLabel>Select Department</CLabel>
            </CCol>
            <CCol lg="4">
                {finalResult.dept}
            </CCol>
        </CRow>
        <CRow className="RowName">
            <CCol lg="4">
                <CLabel>Gender</CLabel>
            </CCol>
            <CCol lg="4">
                <CLabel>{finalResult.gender}</CLabel>
            </CCol>
        </CRow>
        <CRow className="RowName">
            <CCol lg="4">
                <CLabel>Skill</CLabel>
            </CCol>
            <CCol lg="4">
                {finalResult.skill}
            </CCol>
        </CRow>
        </>
    )
}

export default RegDetail;