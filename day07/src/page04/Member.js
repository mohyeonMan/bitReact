import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Member = ({item}) => {
    const {id,name,email} = item
    const navigate = useNavigate()

    const css = {
        border: '1px solid gray',
        margin: 20,
        padding: 20
    }

    const onGo = () => {
        navigate(`/member/${id}`)
    }

    return (
        <div style={css}>
            <p>id : {id}</p>
            <h4>name : {name}</h4>
            <h5>email : {email}</h5>
            <p><Link to={`/member/${id}`}>자세히 보기 Link</Link></p>
            <button onClick={onGo}>자세히 보기 button</button>
        </div>
    );
};

export default Member;