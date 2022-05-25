import React from "react";

const UserRegistration = (props) =>{
    console.log(props)
    return(
        <div className="user-reg">
            <div className="col">
                <div className="row">
                    <h1 className="userHeader">User Registration</h1>
                </div>
                <div className="row profile">
                    <div className="col">
                        <label className="userLabel">userName: </label>
                    </div>
                    <input className="userInput" type="text"  onChange={(e) => props.handleChangeName(e)}/>
                </div>
                <div className="row profile">
                    <div className="col">
                        <label className="userLabel" >FullName: </label>
                    </div>
                    <input className="userInput" type="text"  onChange={(e) => props.handleChangeFullName(e)} />
                </div>
                <div className="row profile">
                    <div className="col">
                        <label className="userLabel">Email: </label>
                    </div>
                    <input className="userInput" type="text" onChange={(e) => props.handleChangeEmail(e)} />
                </div>
                <div className="row profile">
                    <div className="col">
                        <label className="userLabel" >PhoneNo: </label>
                    </div>
                    <input className="userInput" type="text" onChange={(e) => props.handleChangePhno(e)} />
                </div>
                <div className="row profile">
                    <div className="col">
                        <label className="userLabel" >Address: </label>
                    </div>
                    <textarea  className="userText" onChange={(e) => props.handleChangeAddress(e)}></textarea>
                </div>
            </div>
            {/* <h1>User Registration</h1>
            <label >userName: </label>
            <input type="text"  onChange={(e) => props.handleChangeName(e)}/><br/>
            <label >FullName: </label>
            <input type="text"  onChange={(e) => props.handleChangeFullName(e)} /><br/>
            <label >Email</label>
            <input type="text" onChange={(e) => props.handleChangeEmail(e)} /><br/>
            <label >PhoneNo: </label>
            <input type="text" onChange={(e) => props.handleChangePhno(e)} /><br/>
            <label >Address: </label>
            <textarea  onChange={(e) => props.handleChangeAddress(e)}></textarea> */}
        </div>
    )
}

export default UserRegistration;