import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';


const init = {
    data:{},
    error: null,
    loading: true
}

const reducer = (state, action)=> {
    switch(action.type){
        case 'SUCCESS' : return{
            data: action.payload,
            error: null,
            loading: false
        }
        case 'ERROR' : return{
            data: {},
            error: '!',
            loading: true
        }
        default: return state

    }
}

const Test05 = () => {
    const [id,setID] = useState(1);
    const [search,setSearch] = useState(1);
    const [state,dispatch] = useReducer(reducer,init)

    const onSearch = ()=>{
        setSearch(id)
    }


    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`
        axios.get(url)
            .then(res => {
                dispatch({type: 'SUCCESS', payload: res.data})
            })
            .catch(error => {
                dispatch({type:'ERROR'})
            })
    },[search])

    return (
        <div>
            <h3>
                ID 입력(1~5000) : <input type='text' value ={id} onChange={(e)=>setID(e.target.value)}></input>
                <button onClick={onSearch}>검색</button>
            </h3>
            <h3>
                {
                    state.loading || <img src={state.data.thumbnailUrl}/>
                }
                <br/><br/>
                {
                    state.data && state.loading ?  '로딩중' : state.data.title
                }
            </h3>
            <p>
                {
                    state.error ? state.error : null
                }
            </p>
        </div>
    );
};

export default Test05;