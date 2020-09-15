import React from 'react';
import './Material.scss';
import InputGroup from 'react-bootstrap/InputGroup'

const MaterialItem = (props) => {
    let { material, student } = props;

    let fifthCol;

    if (student) {
        fifthCol =
            <InputGroup.Checkbox
                className="mx-auto"
                defaultChecked={material.check ? "checked" : ""}
                onChange={console.log("lorem ipsum")}
            />;
    } else {
        fifthCol =
            <i
                className="far fa-trash-alt"
                onClick={console.log("lorem ipsum")}
            >
            </i>;
    }

    return (
        <tr>
            <td className="py-2 table-border-right">{material.name}</td>
            <td className="py-2 table-border-right">{material.topic}</td>
            <td className="py-2 table-border-right">{material.type}</td>
            <td className="py-2 table-border-right">{material.link}</td>
            <td className="py-2 text-center">{fifthCol}</td>
        </tr>
    );
}

export default MaterialItem;