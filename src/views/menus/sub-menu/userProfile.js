import React from "react";

const UserProfile = (props) =>{
    return(
        <div className="user-reg">
            
            <div className="col">
                <div className="row ">
                    <h1 className="userHeader">User Profile</h1>
                </div>
                <div className="row profile">
                    <div className="col">
                        <label className="userLabel">userName: </label>
                    </div>
                    <p >{props.userName}</p>
                </div>
                <div className="row profile">
                    <div className="col">
                        <label className="userLabel">FullName: </label>
                    </div>
                    <p>{props.fullName}</p>
                </div>
                <div className="row profile">
                    <div className="col">
                        <label className="userLabel">Email: </label>
                    </div>
                    <p>{props.email}</p>
                </div>
                <div className="row profile">
                    <div className="col">
                        <label  className="userLabel">PhoneNo: </label>
                    </div>
                    <p>{props.phno}</p>
                </div>
                <div className="row profile">
                    <div className="col">
                        <label className="userLabel" >Address: </label>
                    </div>
                    <p className="address">{props.address}</p>
                </div>
            </div>
           
        </div>
    )
}

export default UserProfile;