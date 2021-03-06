import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import bsCustomFileInput from 'bs-custom-file-input';

const SingleExerciseForm = () => {

    const topicList = ["Javascript", ".NET", "Bootstrap", "CSS", "HTML"];

    useEffect(() => bsCustomFileInput.init(), []);

    return (
        <Container fluid className="d-flex justify-content-center">
            <Form className="w-100">
                <Row>
                    <Col>
                        <Form.Group>
                            {/* <Form.Label>Title:</Form.Label> */}
                            <Form.Control className="shadow-none" placeholder="Title" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Form.Group className="Group">
                            {/* <Form.Label>Topic:</Form.Label> */}
                            <Form.Control className="shadow-none" as="select" defaultValue="Select a topic...">
                                <option>Select a topic...</option>
                                {topicList.map((topic, index) => <option key={index}>{topic}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="d-flex">
                            <Form.Label className="align-self-end mb-0 mr-3">Estimated days:</Form.Label>
                            <Form.Control className="input-costum-style text-center shadow-none" type="number" min={1} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group>
                            {/* <Form.Label>File:</Form.Label> */}
                            <Form.File
                                id="custom-file"
                                label="Custom file input"
                                custom
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-around align-items-center">
                    <Col>
                        <Form.Group className="text-center">
                            <Button className="btn-style mx-5">Upload</Button>
                            <Button className="btn-style mx-5">Delete</Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default SingleExerciseForm;