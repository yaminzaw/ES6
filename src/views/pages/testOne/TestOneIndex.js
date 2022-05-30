import React from "react";
import { Link,useHistory} from "react-router-dom";

const TestOneIndex = () =>{

    const history = useHistory();
    const click =() =>{
        history.push("/two",{name:"kookie"})
    }

    return(
        <>
            <h1>hello!! this is test one </h1>
            <Link to={{
                pathname:"/two",
                state:{name:"brycen"}
            }}>Go to Two</Link>
            <button onClick={click}>Click</button>
        </>
    )
}

export default TestOneIndex;