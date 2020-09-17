import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const SingleExerciseList = () => {

    const singleExercises = [
        {
            id: 0,
            name: "CSS variables",
            studentName: "John Cena",
            update: new Date(),
            file: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            check: false
        },
        {
            id: 1,
            name: "CSS variables",
            studentName: "Ric Flair",
            update: new Date(),
            file: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            check: false
        },
        {
            id: 2,
            name: "CSS variables",
            studentName: "Hulk Hogan",
            status: "Pending",
            update: new Date(),
            file: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            check: false
        },
        {
            id: 3,
            name: "CSS variables",
            studentName: "Steve Austin",
            status: "Pending",
            update: new Date(),
            file: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            check: false
        },
    ];


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
                            <th className="py-2 table-border-right">Check</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                        }
                    </tbody>
                </Table>
            </Col>
        </Row>


    );
}

export default SingleExerciseList
