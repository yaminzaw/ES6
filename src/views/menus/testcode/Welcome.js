import React from "react";

const Welcome = (props) =>{
    return(
       
        <div className="container" style={{display:"flex"}}>
            <div className="row result">
                <div className="col-3">
                    <input className="numone" type="number" value={props.numOne}  onChange={props.handleChangeOne} />
                </div>
                <div className="col-1">
                    <label className="oprLabel">+</label>
                </div>
                <div className="col-3">
                    <input  type="number"  className="numone" value={props.numTwo} onChange={props.handleChangeTwo} />
                </div>
                <div className="col-2">
                    <button  className="btn" onClick={props.calculateFun}>=</button>
                </div>
                <div className="col-3">
                    <input className="numone" type="number" value={props.result} readOnly/>
                </div> 
            </div>
        </div>
        
    )
}

export default Welcome;