import React from 'react';
import '../index.css';
import './Login.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
    return (
        <Row id="login">
            <Col className="m-auto" xs={10} md={7} lg={5} xl={4}>
                <div id="welcome-box">
                    <h1 className="text-center mb-0">ITAcademy</h1>
                </div>
                <Form id="form">
                    <Form.Group className="pt-3">
                        <Form.Control type="email" className="shadow-none" placeholder="Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" className="shadow-none" placeholder="Password" />
                    </Form.Group>
                    <div className="text-center">
                        <Button id="login-btn" className="shadow-none w-100">LOGIN</Button>
                    </div>
                    <div className="text-center mt-1 mb-2">
                        <small><a href="">Forgot password?</a></small>
                    </div>
                </Form>
            </Col>
        </Row>
    );
}

export default Login;