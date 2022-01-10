import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

import '../css/login.css';
import '../css/common.css';

import uliza from '../images/uliza.png';
// import tvtokyo from '../images/tvtokyo.png'

export default function Login() {
    const handleValidation = (event) => {
        console.log(event);
        console.log('check validation here!');
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation();
    };

    return (
        <ReactBootstrap.Container id='login'>
            <ReactBootstrap.Row className='justify-content-center'>
                <ReactBootstrap.Col md='4'>
                    <ReactBootstrap.Row>
                        <h3 className='text-center'><span>◆</span><b>テレビ東京</b><span>◆</span></h3>
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row className='card-height'>
                        <ReactBootstrap.Card>
                            <ReactBootstrap.Row className='justify-content-center'>
                                <ReactBootstrap.Col md='4'>
                                    <ReactBootstrap.Image id='uliza-img' src={uliza} thumbnail />
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>
                            <ReactBootstrap.Card.Body>
                                <ReactBootstrap.Form id='loginForm' onSubmit={loginSubmit}>
                                    <ReactBootstrap.FormGroup>
                                        <ReactBootstrap.Form.Label id='lbl-id'>ID</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control type='text'></ReactBootstrap.Form.Control>
                                        <p id='userId' className='errMsg'></p>
                                    </ReactBootstrap.FormGroup>
                                    <ReactBootstrap.FormGroup>
                                        <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
                                        <ReactBootstrap.Form.Control type='password'></ReactBootstrap.Form.Control>
                                        <p id='err-msg' className='errMsg'></p>
                                    </ReactBootstrap.FormGroup>
                                    <ReactBootstrap.Button type='submit'>
                                        LOGIN
                                    </ReactBootstrap.Button>
                                </ReactBootstrap.Form>
                            </ReactBootstrap.Card.Body>
                        </ReactBootstrap.Card>
                    </ReactBootstrap.Row>
                </ReactBootstrap.Col>
            </ReactBootstrap.Row>
        </ReactBootstrap.Container>
    );
}
