import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

export default function Footer() {
    return (
        <ReactBootstrap.Row id='footer'>
            <ReactBootstrap.Container className='container-fluid'>
                <ReactBootstrap.Row>
                    <p>
                        Copyright(C) SkillUpJapan Corporation. All rights Reserved.
                    </p>
                    <hr />      
                </ReactBootstrap.Row>
            </ReactBootstrap.Container>
        </ReactBootstrap.Row>
    );
}
