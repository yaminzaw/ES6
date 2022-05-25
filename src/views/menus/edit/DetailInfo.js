import React from "react";
import { CRow,CCol, CButton } from "@coreui/react";

let DetailInfo = props =>{
    
    let {detailData,resetBtn} = props;

    return(
        <div className="detail">
            <CRow >
                <CCol lg="2" className="colDetail">
                    <label>ID</label>
                </CCol>
                <CCol lg="3" >
                    <input type="text" value={detailData.id} />
                </CCol>
            </CRow>
            <CRow>
                <CCol lg="2" className="colDetail">
                    <label>Name</label>
                </CCol>
                <CCol lg="3">
                    <input type="text" value={detailData.name} />
                </CCol>
            </CRow>
            <CRow>
                <CCol lg="2" className="colDetail">
                    <label>Email</label>
                </CCol>
                <CCol lg="3">
                    <input type="text" value={detailData.email} />
                </CCol>
            </CRow>
            <CRow>
                <CCol lg="2" className="colDetail">
                    <label>PhoneNo</label>
                </CCol>
                <CCol lg="3">
                    <input type="text" value={detailData.phone} />
                </CCol>
            </CRow>
            <CRow >
                <CCol lg="2" className="colDetail">
                </CCol>
                <CCol lg="4">
                    <button onClick={resetBtn} style={{width:"80px",height:"40px"}}>Reset</button>
                </CCol>
                
            </CRow>
            
        </div>
    
    )
}

export default DetailInfo;