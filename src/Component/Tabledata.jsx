import React from 'react';

const Tabledata = (props) => {
    return (
        <div>
            <tr>
        <td>{props.userProfile.id}</td>
        <td>{props.userProfile.email}</td>
        <td>{props.userProfile.first_name}</td>
        <td>{props.userProfile.last_name}</td>
        <td>{props.userProfile.avatar}</td>
        {/* <td><input type="checkbox" checked={props.userProfile.isActive}/></td> */}
        {/* <td><button onClick={()=>{props.openModal(props.userProfile)}}>get details</button></td> */}
    </tr>
        </div>
    );
};

export default Tabledata;