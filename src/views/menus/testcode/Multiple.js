import React from "react";

const Multiple = (props) =>{
    return(
        <div className="container" style={{display:"flex"}}>
            <div className="row result">
                <div className="col-3 ">
                    <input className="numone" type="number" value={props.multipleOne}  onChange={props.handleChangeMultipleOne} />
                </div>
                <div className="col-1">
                    <label className="oprLabel">*</label>
                </div>
                <div className="col-3">
                    <input type="number"  className="numone" value={props.multipleTwo} onChange={props.handleChangeMultipleTwo} />
                </div>
                <div className="col-2">
                    <button className="btn" onClick={props.calculateMultipleFun}>=</button>
                </div>
                <div className="col-3">
                    <input className="numone" type="number" value={props.multipleRes} readOnly/>
                </div> 
            </div>
        </div>
    )
}

export default Multiple;