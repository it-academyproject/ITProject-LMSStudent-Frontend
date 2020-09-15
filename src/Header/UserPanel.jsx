import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import Nav from 'react-bootstrap/Nav';

const UserPanel = () => {
    return (
        <div className="user-panel d-flex flex-column justify-content-center align-items-center">
            <VscAccount size={28} />
            <Nav.Link className="m-0 p-0" href="#">Logout</Nav.Link>
        </div>
    );
}

export default UserPanel;