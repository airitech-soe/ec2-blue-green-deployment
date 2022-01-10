import React  from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

import '../css/common.css';
import '../css/genre.css';

export default function GenreTab() {

    const genres = [
        {edit: '編集', genreid: '1', genrecode: '2', genrename: '報道', foldername: 'news', prgram: '番組', delete: '削除'},
        {edit: '編集', genreid: '2', genrecode: '3', genrename: 'アニメ', foldername: 'news', prgram: '番組', delete: '削除'},
        {edit: '編集', genreid: '3', genrecode: '4', genrename: 'ドラマ', foldername: 'news', prgram: '番組', delete: '削除'},
        {edit: '編集', genreid: '4', genrecode: '5', genrename: '報道・バラエティー', foldername: 'news', prgram: '番組', delete: '削除'},
        {edit: '編集', genreid: '5', genrecode: '6', genrename: 'アナウンサー', foldername: 'news', prgram: '番組', delete: '削除'},
        {edit: '編集', genreid: '6', genrecode: '7', genrename: 'スポーツ', foldername: 'news', prgram: '番組', delete: '削除'},
        {edit: '編集', genreid: '7', genrecode: '8', genrename: '旅・グルメ', foldername: 'news', prgram: '番組', delete: '削除'},
        {edit: '編集', genreid: '8', genrecode: '9', genrename: '情義・ドキュメンタリー', foldername: 'news', prgram: '番組', delete: '削除'},
        {edit: '編集', genreid: '9', genrecode: '10', genrename: '記者会見', foldername: 'news', prgram: '番組', delete: '削除'},
        {edit: '編集', genreid: '10', genrecode: '11', genrename: 'その他', foldername: 'news', prgram: '番組', delete: '削除'},
    ];

    const renderGenres = (genre, index) => {
        return(
            <tr key={index}>
                <td>{genre.edit}</td>
                <td>{genre.genreid}</td>
                <td>{genre.genrecode}</td>
                <td>{genre.genrename}</td>
                <td>{genre.foldername}</td>
                <td>{genre.prgram}</td>
                <td>{genre.delete}</td>
            </tr>
        );
    };

    return (
        <ReactBootstrap.Row id='genre'>
            <ReactBootstrap.Row id='newgenre'>
                <ReactBootstrap.Col md='2'>
                    <ReactBootstrap.Button size='sm'>新規ジャンルを登録</ReactBootstrap.Button>
                </ReactBootstrap.Col>                
            </ReactBootstrap.Row>

            <ReactBootstrap.Row id='search-item'>
                <ReactBootstrap.Row id='search-lbl'><b>検索</b></ReactBootstrap.Row>
                <hr />
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col md='2' id='sort-lbl-area'>
                        <ReactBootstrap.Form.Label id='sort-lbl'>ソート</ReactBootstrap.Form.Label>
                    </ReactBootstrap.Col>

                    <ReactBootstrap.Col md='2'>
                        <ReactBootstrap.FormSelect name='SORT_LIST' id='sort-ddl-list' defaultValue='0'>
                            <option value='0' label='ジャンルID'>ジャンルID</option>
                            <option value='1' label='ジャンルコード' >ジャンルコード</option>
                            <option value='2' label='ジャンル名' >ジャンル名</option>
                            <option value='3' label='フォルダ名' >フォルダ名</option>
                        </ReactBootstrap.FormSelect>
                    </ReactBootstrap.Col>

                    <ReactBootstrap.Col md='4' id='radios'>
                        <ReactBootstrap.Form.Check inline checked label='昇順' name='SORT_TYPE' type='radio' id='ASC'></ReactBootstrap.Form.Check>
                        <ReactBootstrap.Form.Check inline label='降順' name='SORT_TYPE' type='radio' id='DESC'></ReactBootstrap.Form.Check>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>

                <ReactBootstrap.Row>
                    <ReactBootstrap.Col md='8'></ReactBootstrap.Col>
                    <ReactBootstrap.Col md='2'>
                        <ReactBootstrap.Button size='sm' className='search-btns'>検索</ReactBootstrap.Button>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col md='2'>                            
                        <ReactBootstrap.Button size='sm' className='search-btns'>リセット</ReactBootstrap.Button>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Row>

            <ReactBootstrap.Row id='genre-list'>
                <ReactBootstrap.Table striped hover bordered responsive id='genre-tbl'>
                    <thead>
                        <tr>
                            <th>編集</th>
                            <th>ジャンルID</th>
                            <th>ジャンルコード</th>
                            <th>ジャンル名</th>
                            <th>フォルダ名</th>
                            <th>番組</th>
                            <th>削除</th>
                        </tr>
                    </thead>
                    <tbody>
                        {genres.map(renderGenres)}
                    </tbody>
                </ReactBootstrap.Table>
            </ReactBootstrap.Row>

        </ReactBootstrap.Row>
    );
}
