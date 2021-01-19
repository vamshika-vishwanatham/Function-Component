import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getAllUsers } from '../Actions/UserdataActions';
import Userdata from './Userdata';


function Home(props) {

    const history = useHistory();
    const checkout = () => {
        history.push("/")
    }
    const dispatcher = useDispatch()
    useEffect(() => {
        dispatcher(getAllUsers())
    }, [dispatcher]);
    debugger;
    let fetchData = useSelector(state => state.fetchUserData[0])

    return (
        <div>
            <h2>Welcome to home page<b>{history.location.state.userName}</b></h2>
            <button type="Submit" style={{ backgroundColor: "green", color: "white", padding: "5px" }} onClick={checkout}>log out</button>
            <Userdata Data={fetchData?.data} />
        </div>

    );
}

export default Home;