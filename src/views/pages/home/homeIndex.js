import React from "react";
import { Link,useHistory } from "react-router-dom";

const Home = () =>{

    const history = useHistory();

    const gotoProfile = () =>{
        history.push("/profile",{name:"Yamin Zaw"});
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Welcome Home</h1>
            <Link to={{
                pathname:"/profile",
                state:{name:"brycen"}
            }}>Go to profile</Link><br/>
            <Link to="/fruit">Go to fruit</Link><br/>
            <button onClick={gotoProfile}>Go to profile via button</button>
        </div>
        
    )
}

export default Home;