import React from "react";

const Minus = (props) =>{
    return(
        <div className="container" style={{display:"flex"}}>
            <div className="row">
                <div className="col-3">
                    <input className="numone" type="number" value={props.minusOne}  onChange={props.handleChangeMinusOne} />
                </div>
                <div className="col-1">
                    <label>-</label>
                </div>
                <div className="col-3">
                    <input type="number"  className="numone" value={props.minusTwo} onChange={props.handleChangeMinusTwo} />
                </div>
                <div className="col-2">
                    <button  onClick={props.calculateMinusFun}>=</button>
                </div>
                <div className="col-3">
                    <input className="numone" type="number" value={props.minusRes} readOnly/>
                </div> 
            </div>
        </div>
    )
}

export default Minus;