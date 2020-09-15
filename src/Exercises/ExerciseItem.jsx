import React from 'react';
import { FaRegFile, FaDownload } from 'react-icons/fa';

const ExerciseItem = (props) => {
    const { exercise } = props;

    return (
        <tr>
            <td className="py-2 table-border-right">{exercise.name}</td>
            <td className="py-2 table-border-right">{exercise.estimated_time}</td>
            <td className="py-2 table-border-right">{exercise.correction_status ? "Finished" : "Pending"}</td>
            <td className="py-2 table-border-right text-center">
                <FaRegFile
                    className="fa-exercice-icons mx-1"
                    onClick={() => console.log("Delivered")}
                />
                <FaDownload
                    className="fa-exercice-icons mx-1"
                    onClick={() => console.log("Downloading...")}
                />
            </td>
        </tr>
    )
}

export default ExerciseItem;