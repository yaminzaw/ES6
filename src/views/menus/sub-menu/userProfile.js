import React from "react";

const UserProfile = (props) =>{
    return(
        <div className="user-reg">
            
            <div className="col">
                <div className="row">
                    <h1>User Profile</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <label >userName: </label>
                    </div>
                    <p >{props.userName}</p>
                </div>
                <div className="row">
                    <div className="col">
                        <label >FullName: </label>
                    </div>
                    <p>{props.fullName}</p>
                </div>
                <div className="row">
                    <div className="col">
                        <label >Email: </label>
                    </div>
                    <p>{props.email}</p>
                </div>
                <div className="row">
                    <div className="col">
                        <label >PhoneNo: </label>
                    </div>
                    <p>{props.phno}</p>
                </div>
                <div className="row">
                    <div className="col">
                        <label >Address: </label>
                    </div>
                    <p>{props.address}</p>
                </div>
            </div>
           
        </div>
    )
}

export default UserProfile;