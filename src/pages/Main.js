import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import * as ReactBootstrap from 'react-bootstrap';

import '../css/common.css';

import SiteHeader from '../components/SiteHeader';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

import ContentManagement from './ContentMgmt';

export default function Genre() {
    return (
        <div id='main'>
            <SiteHeader />
            <Navbar />
            <Switch>
                <Route exact path="/cms/contentmgmt">
                    <ContentManagement />
                </Route>
            </Switch>
            {/* <Footer /> */}
        </div>
    );
}
