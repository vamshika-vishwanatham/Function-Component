import React from 'react';

const Tabledata = (props) => {
    return (

            <tr>
                <td>{props.userProfile.id}</td>
                <td>{props.userProfile.email}</td>
                <td>{props.userProfile.first_name}</td>
                <td>{props.userProfile.last_name}</td>
                <td><img src={props.userProfile.avatar} /></td>
                {/* <td><input type="checkbox" checked={props.userProfile.isActive}/></td> */}
                {/* <td><button onClick={()=>{props.openModal(props.userProfile)}}>get details</button></td> */}
            </tr>
            
    );
};

export default Tabledata;