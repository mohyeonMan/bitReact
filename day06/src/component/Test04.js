import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const init ={
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

const Test04 = () => {
    const [state, dispatch] = useReducer(reducer, init)

    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts/1'
        axios.get(url)
            .then(res => {
                dispatch({type: 'SUCCESS', payload: res.data})
            })
            .catch(error => {
                dispatch({type:'ERROR'})
            })
    },[])

    return (
        <div>
            <h2>
                {
                    state.data && state.loading ? '로딩 중' : state.data.title
                }
            </h2>
            <p>
                {
                    state.error ? state.error : null
                }
            </p>
        </div>
    );
};

export default Test04;