import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './page04/Main.js';
import MemberDetail from './page04/MemberDetail.js';

const App04 = () => {
    return (
        <BrowserRouter>
            <>
                
                {/* 화면에 보이는 영역 */}

                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/member/:id' element={<MemberDetail/>}/>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App04;