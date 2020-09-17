import React from 'react';
import SingleExerciseForm from './SingleExerciseForm';
import './SingleExercise.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import SingleExerciseList from './SingleExerciseList';


const SingleExercise = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={6}>
                    <SingleExerciseForm />
                </Col>
                <Col xs={6}>
                    <SingleExerciseList />
                </Col>
            </Row>
        </Container>

    );
}

export default SingleExercise;
