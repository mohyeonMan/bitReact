import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blue, green, orange, purple, red } from '../store/modules/color';

const Color = () => {
    const color = useSelector(state => state.colorReducer.color)
    const dispatch = useDispatch()

    return (
        <div>
            <h1 style={{ color: color}}>컬러 : {color}</h1>
            <button onClick={ ()=> dispatch(red())}>red</button>
            <button onClick={ ()=> dispatch(green())}>green</button>
            <button onClick={ ()=> dispatch(blue())}>blue</button>
            <button onClick={ ()=> dispatch(purple())}>purple</button>
            <button onClick={ ()=> dispatch(orange())}>orange</button>
        </div>
    );
};

export default Color;

/*

Redux - 상태값을 컴포넌트에 종속시키지 않고 컴포넌트 밖에서 관리 할 수 있다.

*/