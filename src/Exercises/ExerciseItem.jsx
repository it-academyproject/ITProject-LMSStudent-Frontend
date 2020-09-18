import React from 'react';
import { FaRegFile, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ExerciseItem = (props) => {

    const { exercise, student } = props;

    const replaceSpaces = (str) => {
        let replaced = str.replace(" ", "-");
        if (!(replaced.search(" ") + 1)) {
            return replaced;
        }

        return this.replaceSpaces(replaced);
    }

    const student_view =
        <>
            <td className="py-2 table-border-right">{exercise.estimated_time}</td>
            <td className="py-2 table-border-right">{exercise.correction_status ? "Finished" : "Pending"}</td>
            <td className="py-2 text-center">
                <FaRegFile
                    className="fa-exercise-icons mx-1"
                    onClick={() => console.log("Delivered")}
                    style={{ cursor: "pointer" }}
                />
                <FaDownload
                    className="fa-exercise-icons mx-1"
                    onClick={() => console.log("Downloading...")}
                    style={{ cursor: "pointer" }}
                />
            </td>
        </>;
    const teacher_view =
        <>
            <td className="py-2 table-border-right"><Link to={`/exercises/${replaceSpaces(exercise.name).toLowerCase()}`}>{exercise.name}</Link></td>
            <td className="py-2">{exercise.unchecked}</td>
        </>

    return (
        <tr>
            {
                student ? student_view : teacher_view
            }
        </tr>

    )
}

export default ExerciseItem;