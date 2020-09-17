import React from 'react';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';

const SingleExerciseItem = (props) => {

    const { content } = props;




    return (
        <tr>
            <td className="py-2 table-border-right">{content.studentName}</td>
            <td className="py-2 table-border-right">{content.check ? "Finished" : "Pending"}</td>
            <td className="py-2 table-border-right">{content.update}</td>
            <td className="py-2 table-border-right"><a href={content.file} target="_blank">URL</a></td>
            <td className="py-2">
                <InputGroup.Checkbox
                    className="mx-auto"
                    defaultChecked={content.check ? "checked" : ""}
                    onChange={console.log("lorem ipsum")}
                />
            </td>
        </tr>
    )
}

export default SingleExerciseItem
