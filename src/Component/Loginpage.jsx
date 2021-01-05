import React, { useState } from 'react';
import { useHistory } from 'react-router';

function Login(props) {

    const [username,setusername]=useState()
    const [password,setpassword]=useState()
 
    const handleUsername = (username) =>{
        setusername(username)
    }
 
    const handlePassword = (password) =>{
        setpassword(password)
    }

    const history = useHistory();
    function handleOnClick(){
        history.push("/home",{name:username})
    }

    function validateForm(){
        return username.length>0 && password.length>0
    }
    return (
            <div className="loginform">
                    <form className="formtabel" onSubmit={handleOnClick}>
                        <div>
                            <label>UserName: </label>
                            <input type="email"  onClick={()=>handleUsername(username)} />
                        </div><br />
                        <div>
                            <label>Password: </label>
                            <input type="password"  onClick={()=>handlePassword(password)} />
                        </div><br />
                        <div>
                            <button type="submit" style={{backgroundColor:"green",color:"white",padding:"5px"}} disabled={!validateForm}>login</button>
                        </div>
                    </form>
                </div>
    );
}

export default Login;