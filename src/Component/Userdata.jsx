import React from 'react';
import Tabledata from './Tabledata';
import Tableheader from './Tableheader';

function Userdata(props) {
    return (
        <div>
           <table id="tabledata">
                <Tableheader/>
                {
                    props.Data?.map(user => { 
                        return <Tabledata userProfile={user}/>
                    })
                }
           </table>
        </div>
    );
}
export default Userdata;