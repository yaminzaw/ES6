import React from "react";

const Divide = (props) =>{
    return(
        <div className="container" style={{display:"flex"}}>
            <div className="row result">
                <div className="col-3">
                    <input className="numone" type="number" value={props.divideOne}  onChange={props.handleChangeDivideOne} />
                </div>
                <div className="col-1">
                    <label className="oprLabel">/</label>
                </div>
                <div className="col-3">
                    <input type="number"  className="numone" value={props.divideTwo} onChange={props.handleChangeDivideTwo} />
                </div>
                <div className="col-2">
                    <button className="btn" onClick={props.calculateDivideFun}>=</button>
                </div>
                <div className="col-3">
                    <input className="numone" type="number" value={props.divideRes} readOnly/>
                </div> 
            </div>
        </div>
    )
}

export default Divide;