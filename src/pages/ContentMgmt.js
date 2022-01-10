import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

import '../css/common.css';
import '../css/contentmgmt.css';

import GenreTab from '../tabs/GenreTab';

export default function ContentMgmt() {
    return (
        <ReactBootstrap.Row id='contentmgmt' className='p-0'>
            <ReactBootstrap.Container>
                <ReactBootstrap.Tabs defaultActiveKey='genre' id="contents">
                    <ReactBootstrap.Tab eventKey='genre' title='ジャンル'>
                        <GenreTab />
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey='program' title='番組'>
                        番組Tabです。
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey='corner' title='コーナー'>
                        コーナーTabです。
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey='clip' title='クリップ'>
                        クリップTabです。
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey='notice' title='お知らせ'>
                        お知らせTabです。
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey='firedamage' title='火害'>
                        火害Tabです。
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey='banner' title='バナー'>
                        バナーTabです。
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey='tag' title='タグ'>
                        タグTabです。
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey='freepage' title='フリーページ'>
                        フリーページタグTabです。
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey='displaygp' title='表示グループ'>
                        表示グループTabです。
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey='pr' title='PR'>
                        PRTabです。
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey='recomend-banner' title='おすすめバナー'>
                        おすすめバナTabです。
                    </ReactBootstrap.Tab>
                </ReactBootstrap.Tabs>
            </ReactBootstrap.Container>
        </ReactBootstrap.Row>
    );
}
