import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const WriteForm = ({data,setData}) => {
    const [user,setUser] = useState({
        id:'',
        pwd:'',
        name:''
    })
    const on=(e)=>{
        setUser({
            ...user,
            [e.target.name] :e.target.value
        })
    }

    const signIn=()=>{
        setData([...data,user])
    }
    useEffect(()=>{
        localStorage.setItem('data',JSON.stringify(data))
    },[data])
    const navigate = useNavigate()
    const back=()=>{
        navigate('/')
    }
    

    return (
        <div>
                id: <input type='text' name='id' onChange={on}/><br/>
                pwd: <input type='text' name='pwd' onChange={on}/><br/>
                name: <input type='text' name='name' onChange={on}/><br/>
                <button onClick={signIn}>등록</button>
                <button onClick={back}>메인</button>
        </div>
    );
};

export default WriteForm;