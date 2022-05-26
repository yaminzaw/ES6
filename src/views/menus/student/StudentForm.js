import { CRow } from "@coreui/react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol
} from "@coreui/react";
import React,{useState} from "react";
import StudentInput from "./StudentInput";
import StudentTable from "./StudentTable";
import './styleStd.scss';
import StudentSearch from "./StudentSearch";
import SearchTable from "./SearchTable";
import RadioSelect from "./RadioSelect";

const StudentForm = () =>{

    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");


    const [showTable,setShowTable] = useState([]);

    const [ dropData, setDropData ] = useState([
        {id: 1,name: "ID"},
        {id: 2,name: "Name"},
        {id: 3,name: "Email"},
        {id: 4,name: "Phone"}
      ]);

    const [searchData,setSearchData] = useState("");
    const [resultData,setResultData] = useState([]);
   
    let searchChange = (e) =>{
        setSearchData(e.target.value);
    }

    //Search by id,name,email,phone and add object to array
    let searchClick = () =>{
        let dataObj = [];
        if(searchData==""){
            alert("Please Select");
        }else if(searchData=="1"){
            dataObj = [{id:"id",name:"id",email:"id",phone:"id",description:"id"},{id:"id",name:"id",email:"id",phone:"id",description:"id"}];
        }else if(searchData=="2"){
            dataObj = [{id:"name",name:"name",email:"name",phone:"name",description:"name"},
                        {id:"name",name:"name",email:"name",phone:"name",description:"name"},
                        {id:"name",name:"name",email:"name",phone:"name",description:"name"}];
        }
        else if(searchData=="3"){
            dataObj = [{id:"email",name:"email",email:"email",phone:"email",description:"email"},
                        {id:"email",name:"email",email:"email",phone:"email",description:"email"},
                        {id:"email",name:"email",email:"email",phone:"email",description:"email"},
                        {id:"email",name:"email",email:"email",phone:"email",description:"email"}];
        }else if(searchData=="4"){
            dataObj = [{id:"phone",name:"phone",email:"phone",phone:"phone",description:"phone"}];
        }
        setResultData(dataObj);
    }

    const handleChangeId=(e)=>{
        let idchk = /^[0-9]+$/;
        if(e.target.value === '' || idchk.test(e.target.value)) {
            setId(e.target.value);
        } else {
            alert('Please Enter Number Only');
            e.target.value = "";
        }
    }
    const handleChangeName=(e)=>{
        setName(e.target.value);
    }
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value);
        
    }
    const handleChangePhone=(e)=>{
        setPhone(e.target.value);
    }

    const addStudent = () =>{

        let dataArr =[], tmp =[],tmpData = [];

        if(showTable.length > 0 && id!="" && name!="" && email!="" && phone!=""){
            for(let i=0; i< showTable.length; i++){
                let oldData = showTable[i];
                if(oldData["id"] != id ){
                    tmpData["id"]=id;
                    tmpData["name"]=name;
                    tmpData["email"]=email;
                    tmpData["phone"]=phone;

                    setShowTable([...showTable,tmpData]);

                }else if(oldData["id"] == id ){
                    alert(id + " is already exit");
                    setShowTable(showTable);
                    break;
                }
            }    
        }
        else if(id!="" && name!="" && email!="" && phone!=""){
            tmp["id"]= id;
            tmp["name"]= name;
            tmp["email"]= email;
            tmp["phone"]= phone;

            dataArr.push(tmp);
            setShowTable(dataArr);
        }
    }

    let remove=(id)=>{
        let data = showTable.filter((d)=>{
            return id != d.id
            
        })
        setShowTable(data);
    }


    const [radioData,setRadioData] = useState([
        {id: 1,name: "Id"},
        {id: 2,name: "Name"},
        {id: 3,name: "Email"},
        {id: 4,name: "Phone"}
    ]);

    const [radioName,setRadioName] = useState("");
    const [radioValue,setRadioValue] = useState("");

    const clickRadio =(data)=>{
        setRadioName(data.name);
        setRadioValue(data.id);
    }

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
        console.log(data);
        setchkData(data);

        let resArr = [];
        
        for(let i=0;i<data.length;i++){
            if(data[i].is_checked == true){
                resArr.push(data[i]);
            }
        }
        setResult(resArr);
        console.log("ResArr",result);
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
                    Student List
                </CCardHeader>
                <CCardBody>
                    <StudentInput id={id} name={name} email={email} phone={phone}
                        handleChangeId={handleChangeId}
                        handleChangeName={handleChangeName}
                        handleChangeEmail={handleChangeEmail}
                        handleChangePhone={handleChangePhone}
                        addStudent={addStudent}
                    />
                    <StudentSearch searchClick={searchClick} 
                            dropData={dropData} 
                            searchData={searchData} 
                            searchChange={searchChange} />
                    <RadioSelect radioData={radioData} clickRadio={clickRadio}  
                        radioName={radioName}  
                        radioValue={radioValue}
                        chkData={chkData}
                        checkSome={checkSome}
                        result={result}
                        />
                    <StudentTable showTable={showTable} remove={remove}  />
                    <SearchTable  resultData={resultData} />
                </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default StudentForm;