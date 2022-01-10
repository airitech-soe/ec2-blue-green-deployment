import React from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

import '../css/common.css';

import ulizacms from '../images/ulizacms.jpg';

export default function SiteHeader() {
    return (
        <ReactBootstrap.Row id='siteheader' className='p-0'>
            <ReactBootstrap.Col className='header'>
                <h5><span>◆</span><b>テレビ東京</b><span>◆</span></h5>
                <img
                    alt={ulizacms}
                    src={ulizacms}
                    height='25'
                />
                {/* <a to='#'>ULIZA VMS</a>
                <a to='#'>Logout</a> */}
            </ReactBootstrap.Col>
        </ReactBootstrap.Row>
    );
}
