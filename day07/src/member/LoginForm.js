import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({data}) => {
    const [done,setDone]=useState(false)
    const [user,setUser]= useState({
        id:'',
        pwd:''
    })
    const on=(e)=>{
        setUser({
            ...user,
            [e.target.name] :e.target.value
        })
    }
    const login=()=>{
        data.find(item=>item.id===user.id && item.pwd===user.pwd&& setDone(true))
    }
    const navigate = useNavigate()
    const back=()=>{
        navigate('/')
    }

    return (
        <div>
             id: <input type='text' name='id' onChange={on}/><br/>
             pwd: <input type='text' name='pwd' onChange={on}/><br/>
             <button onClick={login}>login</button>
             <button onClick={back}>back</button>
             <h1>{done? '로그인성공!':'비회원'}</h1>
        </div>
    );
};

export default LoginForm;