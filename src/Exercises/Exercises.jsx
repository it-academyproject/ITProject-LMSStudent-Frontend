import React from 'react';
import ExerciseList from './ExerciseList';
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Exercises = (props) => {

    const { exercises, student } = props;


    return (
        <div>
            <ExerciseList exercises={exercises} student={student} />
            <Row className="d-flex justify-content-center">
                <Col xs={12} lg={10}>
                    {student || <Link to="/single-exercise" className="mt-4 btn-style float-right">New Exercise</Link>}
                </Col>
            </Row>

        </div>

    )
}

export default Exercises
