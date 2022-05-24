import React from "react";

const UserRegistration = (props) =>{
    console.log(props)
    return(
        <div className="user-reg">
            <div className="col">
                <div className="row">
                    <h1>User Registration</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <label >userName: </label>
                    </div>
                    <input type="text"  onChange={(e) => props.handleChangeName(e)}/>
                </div>
                <div className="row">
                    <div className="col">
                        <label >FullName: </label>
                    </div>
                    <input type="text"  onChange={(e) => props.handleChangeFullName(e)} />
                </div>
                <div className="row">
                    <div className="col">
                        <label >Email: </label>
                    </div>
                    <input type="text" onChange={(e) => props.handleChangeEmail(e)} />
                </div>
                <div className="row">
                    <div className="col">
                        <label >PhoneNo: </label>
                    </div>
                    <input type="text" onChange={(e) => props.handleChangePhno(e)} />
                </div>
                <div className="row">
                    <div className="col">
                        <label >Address: </label>
                    </div>
                    <textarea  onChange={(e) => props.handleChangeAddress(e)}></textarea>
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