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
                <Col xs={12} xl={12} className="my-3">
                    <SingleExerciseForm />
                </Col>
                <Col xs={12} xl={12} className="my-3">
                    <SingleExerciseList />
                </Col>
            </Row>
        </Container>

    );
}

export default SingleExercise;