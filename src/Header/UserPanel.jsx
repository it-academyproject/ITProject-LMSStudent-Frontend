import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

function UserPanel () {

    return (
    
        <div className="user-panel d-flex flex-column justify-content-center align-items-center">
            <VscAccount size={28}/>
            <Link className="m-0 p-0" to="/login">Logout</Link>
        </div>
    
    
    );

}


export default UserPanel;