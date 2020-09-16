import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SingleExercise = () => {

    const topicList = ["Javascript", ".NET", "Bootstrap", "CSS", "HTML"];


    return (
        <Form>
            <Form.Group className="Group">
                <Form.Label>Title:</Form.Label>
                <Form.Control placeholder="Exercise title..." />
            </Form.Group>
            <Form.Group className="Group">
                <Form.Label>Topic:</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                    <option>Select a topic...</option>
                    {topicList.map((topic, index) => <option key={index}>{topic}</option>)}
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Estimated days:</Form.Label>
                <Form.Control type="number" min={1} />
            </Form.Group>
            <Form.Group>
                <Form.Label>File:</Form.Label>
                <Form.File />
            </Form.Group>
            <Button className="btn-style">Upload</Button>
            <Button className="btn-style">Delete</Button>
        </Form>
    )
}

export default SingleExercise
