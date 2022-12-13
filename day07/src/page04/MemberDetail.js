import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MemberDetail = () => {
    const {id} = useParams()
    const [member, setMember] = useState({})
    const { name, email, phone, website} = member
    const navigate = useNavigate()
    
    const css = {
        border: '1px solid gray',
        margin: 20,
        padding: 20
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setMember(res.data))
    },[])

    const onBack = () =>{
        // navigate('/')
        navigate(-1)
    }

    return (
        <div style={css}>
            <h2>MemberDetail page : {id}</h2>
            <h4>name : {name}</h4>
            <ul>
                <li>email : {email}</li>
                <li>phone : {phone}</li>
                <li>website : {website}</li>
            </ul>
            <button onClick={onBack}>뒤로</button>
        </div>
    );
};

export default MemberDetail;