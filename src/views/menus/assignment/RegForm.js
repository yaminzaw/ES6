import React, { useState } from "react";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow
  } from "@coreui/react";
import RegInput from "./RegInput";
import './assStyle.css';
import RegDetail from "./RegDetail";

const RegForm = () =>{

    const [name,setName] = useState("");

    const [ selectDepartment, setSelectDepartment] = useState([
        {id: 1,name: "IT Department"},
        {id: 2,name: "Infra Department"},
        {id: 3,name: "HR Department"},
        {id: 4,name: "Education Department"}
    ]);

    const handleChangeName = (e) =>{
        setName(e.target.value);
    }
    console.log("name",name);

    const [selectData,setselectData] = useState("");

    let selectChange = (e) =>{
        setselectData(e.target.value);
    }
    console.log("Select",selectData)

    const [radioData,setRadioData] = useState([
        {id: 1,name: "Male"},
        {id: 2,name: "Female"},
       
    ]);

    const [radioName,setRadioName] = useState("");
    const [radioValue,setRadioValue] = useState("");

    const clickRadio =(data)=>{
        setRadioName(data.name);
        setRadioValue(data.id);
    }
    console.log("radioname",radioName);
    console.log("radiovalue",radioValue)

    const [chkData,setchkData] = useState([
        {id: 1,name: "Java"},
        {id: 2,name: "PHP"},
        {id: 3,name: "React"},
        {id: 4,name: "Laravel"}
    ]);

    const [result,setResult] = useState([])

    const checkSome = (e) =>{
        let value = e.target.value;
        let checked = e.target.checked;

        console.log(value);
        console.log(checked);

        let data = chkData.map(obj => {
            return parseInt(value) === parseInt(obj.id) ? {...obj, is_checked: checked} : obj
        })
        setchkData(data);

        let resArr = [];
        
        for(let i=0;i<data.length;i++){
            if(data[i].is_checked == true){
                resArr.push(data[i].name);
            }
        }
        setResult(resArr);
    }

    let [finalResult,setFinalResult] = useState([]);
    let [fillName,setFillName] = useState("");
    let [chooseDept,setChooseDept] = useState("");
    let [selectRadio,setSelectRadio] = useState("");
    let [checkSkill,setCheckSkill] = useState("");

    const AddClick = ()=>{
        
        let obj =[];

        if(name !="" && selectData!="" && radioName!="" && result!="" ){
            obj["name"]= name;
            obj["dept"]= selectData;
            obj["gender"]= radioName;
            obj["skill"]= result;

            setFinalResult(obj);      
        }else if(name == ""){
            setFillName("Please Fill Name!!")
        }else if(selectData == ""){
            setChooseDept("Please Choose Department!!")
        }else if(radioName == ""){
            setSelectRadio("Please Choose Gender!!")
        }else if(result == ""){
            setCheckSkill("Please Check Skill!!")
        }
    }
    
    return(
        <CRow>
            <CCol xs="12">
                <CCard>
                <CCardHeader
                    style={{
                    padding: "30px",
                    fontFamily: "monospace",
                    fontSize: "35px",
                    color: "blueviolet",
                    }}
                >
                    Student Registration Form
                </CCardHeader>
                <CCardBody>
                    <RegInput name={name} 
                        handleChangeName={handleChangeName}
                        selectDepartment={selectDepartment}
                        selectData={selectData}
                        selectChange={selectChange}
                        radioData={radioData}
                        radioName={radioName}
                        radioValue={radioValue}
                        clickRadio={clickRadio}
                        chkData={chkData}
                        checkSome={checkSome}
                        AddClick={AddClick}
                        fillName={fillName}
                        chooseDept={chooseDept}
                        selectRadio={selectRadio}
                        checkSkill={checkSkill}
                    />
                    <RegDetail name={name} 
                        radioName={radioName}
                        result={result}
                        finalResult={finalResult}
                        />
                </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default RegForm;