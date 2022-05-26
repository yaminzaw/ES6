import { CRow,CCol, CLabel, CInput, CSelect, CInputRadio, CInputCheckbox, CButton } from "@coreui/react";
import React from "react";

const RegInput = (props) =>{

    let {name,
        handleChangeName,
        selectDepartment,
        selectData,
        selectChange,
        radioData,
        radioName,
        radioValue,
        clickRadio,
        AddClick,
        chkData,
        checkSome,
        fillName,
        chooseDept,
        selectRadio,
        checkSkill} = props;
    
    return(
        <>
        <CRow className="RowName">
            <CCol lg="4">    
            </CCol>
            <CCol lg="4">  
                <CLabel style={{color:"red"}}>{fillName}</CLabel>
            </CCol>
        </CRow>
        <CRow className="RowName">
            <CCol lg="4">
                <CLabel></CLabel>
                <CLabel>Student Name</CLabel>
            </CCol>
            <CCol lg="4">
                
                <CInput className="input" onChange={(e) => props.handleChangeName(e)} />
            </CCol>
        </CRow>
        <CRow className="RowName">
            <CCol lg="4">    
            </CCol>
            <CCol lg="4">  
                <CLabel style={{color:"red"}}>{chooseDept}</CLabel>
            </CCol>
        </CRow>
        <CRow className="RowName">
            <CCol lg="4">
                <CLabel>Select Department</CLabel>
            </CCol>
            <CCol lg="4">
                <CSelect className="select" value={selectData} onChange={selectChange} >
                    <option value="">---Please Select---</option>
                    {selectDepartment.map((data,index)=>{
                        return(
                            <option className="option" key={index} id={data.id} value={data.name}>{data.name}</option>
                        )
                  
                    })}
                </CSelect>
            </CCol>
        </CRow>
        <CRow className="RowName">
            <CCol lg="4">    
            </CCol>
            <CCol lg="4">  
                <CLabel style={{color:"red"}}>{selectRadio}</CLabel>
            </CCol>
        </CRow>
        <CRow className="RowName">
            <CCol lg="4">
                <CLabel>Gender</CLabel>
            </CCol>
            <CCol lg="6">
                <CRow>
                {radioData.map((data,index)=>{
                    return(
                        <CCol lg="2" style={{marginLeft:"40px",fontSize:"20px"}}>
                            <CInputRadio className="radio"
                                key={index}
                                name={data.name}
                                value={data.id}
                                onChange={()=>clickRadio(data)}
                                checked={radioValue == data.id ? true: false}
                            />
                            <CLabel className="RadioLabel">{data.name}</CLabel>
                        </CCol>
                    )

                })}
                </CRow>   
            </CCol>
        </CRow>
        <CRow className="RowName">
            <CCol lg="4">    
            </CCol>
            <CCol lg="4">  
                <CLabel style={{color:"red"}}>{checkSkill}</CLabel>
            </CCol>
        </CRow>
        <CRow className="RowName">
            <CCol lg="4">
                <CLabel>Skill</CLabel>
            </CCol>
            <CCol lg="8">
            <CRow>
            {chkData.map((chk,cindex)=>{
                return(
                    <CCol lg="2" style={{marginLeft:"40px",fontSize:"20px"}}>
                        <CInputCheckbox className="check"
                            key={cindex}
                            name={chk.name}
                            value={chk.id}
                            onChange={checkSome}
                            checked={chk.is_checked==true}
                        />
                        <CLabel>{chk.name}</CLabel>
                    </CCol>
                )
            })}
            </CRow>
            </CCol>
        </CRow>
        <CRow className="RowName">
            <CCol lg="4"></CCol>
            <CCol lg="4" >
                <button className="AddStdBtn" onClick={AddClick}>Add Student</button>
            </CCol>
            
        </CRow>
        </>
    )
}

export default RegInput;