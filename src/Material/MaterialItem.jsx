import React from 'react';
import './Material.scss';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';

const MaterialItem = (props) => {
    let { material, student } = props;

    let nameCol;
    let fifthCol;

    if (student) {
        nameCol = <>{material.name}</>;
        fifthCol =
            <InputGroup.Checkbox
                className="mx-auto"
                defaultChecked={material.check ? "checked" : ""}
                onChange={console.log("lorem ipsum")}
            />;
    } else {
        nameCol = <Link to="/single-material">{material.name}</Link>;
        fifthCol =
            <i
                className="far fa-trash-alt"
                title="Delete"
                onClick={console.log("lorem ipsum")}
            >
            </i>;
    }

    return (
        <tr>
            <td className="py-2 table-border-right">{nameCol}</td>
            <td className="py-2 table-border-right">{material.topic}</td>
            <td className="py-2 table-border-right">{material.type}</td>
            <td className="py-2 table-border-right"><Link to="/material">{material.link}</Link></td>
            <td className="py-2 text-center">{fifthCol}</td>
        </tr >
    );
}

export default MaterialItem;