import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import SingleExerciseItem from './SingleExerciseItem.jsx';
import singleExercises from '../singleExerciseList.json';

const SingleExerciseList = () => {

    return (
        <Row className="d-flex justify-content-center">
            <Col xs={12} lg={10}>
                <Table className="mb-0" striped>
                    <thead>
                        <tr>
                            <th className="py-2 table-border-right">Student Name</th>
                            <th className="py-2 table-border-right">Status</th>
                            <th className="py-2 table-border-right">Last Update</th>
                            <th className="py-2 table-border-right">File</th>
                            <th className="py-2">Check</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            singleExercises.map((exercise, index) => <SingleExerciseItem key={index} content={exercise} />)
                        }
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default SingleExerciseList;