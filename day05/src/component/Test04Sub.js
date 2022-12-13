import React, { useMemo } from 'react';

const getColor = (color)=>{
    console.log('getColor')

    switch(color){
        case 'hotpink': return'진한분홍색';
        case 'magenta': return'마젠타';
        case 'skyblue': return'하늘';
        case 'tomato': return'토마토';
    }
}
const getFood = (color)=>{
    console.log('getFood')

    switch(color){
        case '햄버거': return'버거킹';
        case '삼겹살': return'맛찬들';
        case '치킨': return'자담';
        case '짜장면': return'청하이';
    }
}

const Test04Sub = ({color,food}) => {
    // 로그에 color,food 모두 찍힌다.
    // const colorInfo = getColor(color)
    // const foodInfo =  getFood(food)

    const colorInfo =useMemo(()=>{
        return getColor(color)
    },[color])

    const foodInfo =useMemo(()=>{
        return getFood(food)
    },[food])

    return (
        <div>
            <h3>color : {color} / {colorInfo}</h3>
            <br/><br/>
            <h3>food : {food} / {foodInfo}</h3>
            
        </div>
    );
};

export default Test04Sub;