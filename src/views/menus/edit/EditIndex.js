import { CCard, CCardBody, CHeader, CRow,CCol } from "@coreui/react";
import React, { useState } from "react";
import DetailTable from "./DetailTable";
import './detailStyle.css';
import DetailInfo from "./DetailInfo";

const EditIndex = () =>{
    const [detailData,setDetailData] = useState([]);

    const [info,setInfo] = useState([
        {id:"1",name:"su su",email:"su@gmail.com",phone:"09678875"},
        {id:"2",name:"aung aung",email:"aung@gmail.com",phone:"09678875"},
        {id:"3",name:"ko ko",email:"ko@gmail.com",phone:"09678875"},
        {id:"4",name:"aye aye",email:"aye@gmail.com",phone:"09678875"}]);

    const clickData = (data) =>{
        setDetailData(data);
    }

    let resetBtn = () =>{
        setDetailData(
            {id:"",name:"",email:"",phone:""}
        )
    }

    return(
        <CRow>
            <CCol>
                <CCard >
                    <CHeader>
                        
                    </CHeader>
                    <CCardBody>
                        <DetailTable info={info} clickData={clickData} />
                        <hr></hr>
                        <DetailInfo detailData={detailData} resetBtn={resetBtn} />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default EditIndex;