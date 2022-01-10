import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

import '../css/common.css';

export default function Navbar() {
    return (
        <ReactBootstrap.Row id='navbar' className='p-0'>
            <ReactBootstrap.Navbar>
                <ReactBootstrap.Container>
                    <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootstrap.Nav className="me-auto">
                            <span>|</span>
                            <ReactBootstrap.Nav.Link href="/cms/contentmgmt">コンテンツ管理</ReactBootstrap.Nav.Link>
                            <span>|</span>
                            <ReactBootstrap.Nav.Link href="#">Live管理</ReactBootstrap.Nav.Link>
                            <span>|</span>
                            <ReactBootstrap.Nav.Link href="#">ページ編集</ReactBootstrap.Nav.Link>
                            <span>|</span>
                            <ReactBootstrap.Nav.Link href="#">IPBOD</ReactBootstrap.Nav.Link>
                            <span>|</span>
                            <ReactBootstrap.Nav.Link href="#">その他</ReactBootstrap.Nav.Link>
                            <span>|</span>
                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Container>
            </ReactBootstrap.Navbar>
        </ReactBootstrap.Row>
    );
}
