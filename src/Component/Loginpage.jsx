import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { postUserDetails } from '../Actions/UserdataActions';

const Login = (props)=> {

    const [username,setusername]=useState("")
    const [password,setpassword]=useState('')
 
    // const handleUsername = (username) =>{
    //     setusername(username)
    // }
 
    // const handlePassword = (password) =>{
    //     setpassword(password)
    // }

    
    const responseState = useSelector( state=> state.fetchUserData);
    const authToken = responseState.token?.data?.token;
    const loginStatus = responseState.loginSuccess;

    const history = useHistory();
    const dis = useDispatch();
    const handleOnClick =()=>{
        debugger
        if(username && password)
        {
            return dis(postUserDetails(username,password));
        }
        else{
        
            alert("please enter email or password")
        }
    }

    useEffect(() =>{
        if(authToken == "QpwL5tke4Pnpja7X4"){
            history.push("/home",{userName:username});
        }
        else if(loginStatus == false){
            alert("Please enter valid username and password");
            setusername('');
            setpassword('')
        }
        else{
            history.push('/')
        }
    },[authToken])
    
    return (
            <div className="loginform">
                    <form className="formtabel" onSubmit={handleOnClick}>
                        <div>
                            <label>UserName: </label>
                            <input type="email" value={username} onChange={(e)=>{setusername(e.target.value)}} />
                        </div><br />
                        <div>
                            <label>Password: </label>
                            <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                        </div><br />
                        <div>
                            <button type="submit" style={{backgroundColor:"green",color:"white",padding:"5px"}}>login</button>
                        </div>
                    </form>
                </div>
    );
}

export default Login;