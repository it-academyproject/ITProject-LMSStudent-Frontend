import React from 'react';
import ExerciseItem from './ExerciseItem.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const ExerciseList = (props) => {

    const { exercises, student } = props;

    const exercise_list = exercises.map((exercise, index) => {
        return (
            <ExerciseItem key={index} exercise={exercise} student={student} />
        )
    });

    const student_titles =
        <>
            <th className="py-2 table-border-right">Estimated time</th>
            <th className="py-2 table-border-right">Correction Status</th>
            <th className="py-2 text-center">Deliver</th>
        </>;
    const teacher_titles = <th className="py-2">Unchecked</th>;

    return (
        <>
            <Row className="d-flex justify-content-center">
                <Col xs={12} lg={10}>
                    <Table className="mb-0" striped>
                        <thead>
                            <tr>
                                <th className="py-2 table-border-right">Name</th>
                                {
                                    student ? student_titles : teacher_titles
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {exercise_list}
                        </tbody>
                    </Table>
                </Col>
            </Row>

        </>
    );
}

export default ExerciseList;