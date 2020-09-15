import React from 'react';
import ExerciseList from './ExerciseList';
import Button from 'react-bootstrap/Button';


const Exercises = (props) => {

    const { exercises, student } = props;

    return (
        <div>
            <ExerciseList exercises={exercises} student={student} />
            {!student ? <Button>New Exercise</Button> : ""}
        </div>

    )
}

export default Exercises
