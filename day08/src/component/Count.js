import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { down, reset, up } from '../store/modules/count';

const Count = () => {

    const count = useSelector(state => state.countReducer.count)
    const dispatch = useDispatch()


    return (
        <div>
            <h1>카운트 : {count}</h1>
            <p>
                <button onClick={()=>dispatch(up())}> 증가 </button>
                <button onClick={()=>dispatch(down())}>감소 </button>
                <button onClick={()=>dispatch(reset())}>초기화 </button>
            </p>
        </div>
    );
};

export default Count;