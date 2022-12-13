import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test02 = () => {
    const [id,setId] = useState('1')
    const [dto,setDto] = useState({})
    const [search,setSearch] = useState(1)

    // const onInput = (e) => {
    //     const {value} =  e.target
    //     setId(value)
    // }
    const onSearch = ()=>{
        setSearch(id)
    }

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        axios.get(url).then(res=>setDto(res.data))
    },[search])


    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={onSearch}>검색</button>
            <h3>{dto.id} : {dto.title}</h3>
        </div>
    );
};

export default Test02;