import React from "react";
import { CRow,CCol, CButton } from "@coreui/react";

let DetailInfo = props =>{
    
    let {detailData,resetBtn} = props;

    return(
        <div style={{overflow:"auto"}} className="detail">
            <CRow>
                <CCol lg="3"  className="detailHeaderCol">
                    <h3>Student Detail</h3>
                </CCol>
            </CRow>
            <CRow>
                <CCol lg="3"  className="detailCol">
                    <label>ID</label>
                </CCol>
                <CCol lg="2">
                    <input type="text" value={detailData.id} className="detailInput" />
                </CCol>
            </CRow><br/>
            <CRow >
                <CCol lg="3" className="detailCol">
                    <label>Name</label>
                </CCol>
                <CCol lg="2">
                    <input type="text" value={detailData.name}  className="detailInput" />
                </CCol>
            </CRow><br/>
            <CRow>
                <CCol lg="3"  className="detailCol">
                    <label>Email</label>
                </CCol>
                <CCol lg="2">
                    <input type="text" value={detailData.email} className="detailInput" />
                </CCol>
            </CRow><br/>
            <CRow>
                <CCol lg="3"  className="detailCol">
                    <label>PhoneNo</label>
                </CCol>
                <CCol lg="2">
                    <input type="text" value={detailData.phone} className="detailInput" />
                </CCol>
            </CRow><br/>
            <CRow >
                <CCol lg="3" className="detailCol">
                </CCol>
                <CCol lg="2">
                    <button onClick={resetBtn} className="detailBtn" >Reset</button>
                </CCol>
                
            </CRow><br/>
            
        </div>
    
    )
}

export default DetailInfo;