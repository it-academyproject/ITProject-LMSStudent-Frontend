import React, { useState, useEffect } from 'react';
import './Material.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import bsCustomFileInput from 'bs-custom-file-input';

// CHANGE TOPIC AND TYPE LETTER COLOR SAME AS OTHER INPUTS
// CHANGE BORDER COLOR OF UPLOADER AT :focus TO SAME AS OTHER INPUTS
// STYLE SUBMIT BUTTON AND MODAL BUTTONS
// MODALS TO BE PUT INTO THEIR OWN MODULES/COMPONENTS

const SingleMaterial = (props) => {
    const { material } = props;

    const [showAdd, setShowAdd] = useState(false);
    const [showRemove, setShowRemove] = useState(false);

    // MAKES THE UPLOADED FILE NAME DISPLAY IN THE INPUT BOX
    useEffect(() => bsCustomFileInput.init(), []);

    const handleShowAdd = () => setShowAdd(true);
    const handleCloseAdd = () => setShowAdd(false);
    const handleAddTopic = () => {
        // ADD TOPIC
        handleCloseAdd();
    }

    const handleShowRemove = () => setShowRemove(true);
    const handleCloseRemove = () => setShowRemove(false);
    const handleRemoveTopic = () => {
        // REMOVE TOPIC
        handleCloseRemove();
    }

    let topicOptions = material.map((topic, i) => {
        return (
            <option key={i}>{topic.name}</option>
        );
    });

    return (
        <>
            <Modal show={showAdd} onHide={handleCloseAdd} centered>
                <Modal.Body>
                    <Form.Control
                        className="shadow-none"
                        placeholder="Topic name"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleCloseAdd}>Close</Button>
                    <Button onClick={handleAddTopic}>Add topic</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showRemove} onHide={handleCloseRemove} centered>
                <Modal.Body>
                    <Form.Control as="select" className="shadow-none" multiple>
                        {topicOptions}
                    </Form.Control>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleCloseRemove}>Close</Button>
                    {/* DISPLAY WITH 's' IF SEVERAL TOPICS SELECTED */}
                    <Button onClick={handleRemoveTopic}>Remove topic</Button>
                </Modal.Footer>
            </Modal>

            <Form>
                <Form.Group>
                    <Row>
                        <Col className="mx-auto" xs={12} lg={8} xl={6} >
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Control className="shadow-none" placeholder="Title" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <div className="d-flex">
                                        <Form.Group className="topic">
                                            <Form.Control className="shadow-none" as="select" defaultValue="Topic" >
                                                <option>Topic</option>
                                                {topicOptions}
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group className="d-flex plus-minus">
                                            <div className="plus d-flex justify-content-center align-items-center">
                                                <i
                                                    className="fas fa-plus"
                                                    title="Add a topic"
                                                    onClick={handleShowAdd}
                                                >
                                                </i>
                                            </div>
                                            <div className="minus d-flex align-items-center justify-content-center">
                                                <i
                                                    className="fas fa-minus"
                                                    title="Remove a topic"
                                                    onClick={handleShowRemove}
                                                >
                                                </i>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Control className="shadow-none" as="select" defaultValue="Type" >
                                            <option>Type</option>
                                            <option>URL</option>
                                            <option>PDF</option>
                                            <option>Excel</option>
                                            <option>Video</option>
                                            <option>Presentation</option>
                                            <option>Image</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.File
                                            id="custom-file"
                                            label="Upload file"
                                            custom
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group>
                                <Form.Control className="shadow-none description" placeholder="Description" as="textarea" rows="3" />
                            </Form.Group>
                            <Form.Group className="text-center">
                                <Button className="text-center w-25">SUBMIT</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </>
    );
}

export default SingleMaterial;