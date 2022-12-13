import React, { useState } from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import LoginForm from './member/LoginForm';
import Main from './member/Main';
import WriteForm from './member/WriteForm';

const App_Member = () => {
    const [data,setData]=useState(()=>JSON.parse(localStorage.getItem('data')) || [] )
    
    return (

        <BrowserRouter>
            <>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/writeForm'>writeForm</Link></li>
                    <li><Link to='/loginForm'>loginForm</Link></li>
                </ul>
            </>
            <Routes>
                <Route path='/'element={<Main/>}></Route>
                <Route path='/writeForm'element={<WriteForm data={data} setData={setData}/>}></Route>
                <Route path='/loginForm'element={<LoginForm data={data}/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App_Member;