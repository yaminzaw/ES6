import { CInputRadio, CLabel,CRow,CCol, CInputCheckbox} from "@coreui/react";
import React from "react";

const RadioSelect = (props) =>{

    let {radioData,clickRadio,radioName,radioValue,chkData,checkSome,result} = props;
    console.log(radioData)
    console.log(chkData)
    console.log("Result",result)

    return(
        <>
        <CRow>
            {radioData.map((data,index)=>{
                return(
                    <CCol lg="2" style={{marginLeft:"40px",fontSize:"20px"}}>
                        <CInputRadio className="Radio"
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
        {radioValue !="" && 
        <CRow>
            <CLabel className="RadioLabel">{radioName} is checked</CLabel>
        </CRow>
        }
        <CRow>
            {chkData.map((chk,cindex)=>{
                return(
                    <CCol lg="2" style={{marginLeft:"40px",fontSize:"20px"}}>
                        <CInputCheckbox
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
        {result !="" && 
        <CRow>
            <label style={{margin:"30px",color:"red",fontSize:"20px"}}>Skill are =
            <CLabel>{result.map((i)=>{
                return (
                    <span> {i.name},</span>
                )
            })}</CLabel>
            </label>
        </CRow>
        }
        </>
    )
}
export default RadioSelect;