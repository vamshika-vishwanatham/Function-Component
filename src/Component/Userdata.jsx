import React from 'react';
import Tabledata from './Tabledata';
import Tableheader from './Tableheader';

function Userdata(props) {
    return (
        <div>
            <table className="table-data" id="usertable">
                <thead >
                    <Tableheader />
                </thead>
                <tbody >
                    {
                        props.Data && props.Data.data?.map(user => {
                            return <Tabledata userProfile={user} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Userdata;