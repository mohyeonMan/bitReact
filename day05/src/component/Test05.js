import React, { useEffect, useMemo, useState } from 'react';

const user =[
    {id: 1,name: '박지훈'},
    {id: 2,name: '모현맨'},
    {id: 3,name: '모현읍'},
    {id: 4,name: '모현공화국'},
    {id: 5,name: '박지훈'},
    {id: 6,name: '모현맨'},
    {id: 7,name: '모현읍'},
    {id: 8,name: '모현공화국'},
    {id: 9,name: '박지훈'},
    {id: 10,name: '모현맨'}
]

const Test05 = () => {
    let [ data,setData] = useState(user)
    const [text,setText] = useState('')
    const [search,setSearch] = useState('')

    const onSearch = () =>{
        setSearch(text)
    }
//검색버튼 x
    useEffect(()=>{
        setData(user.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase())!==-1))
    },[text])
    
//검색버튼 o
/*    
data = useMemo(()=>{
        return user.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
    },[search])
*/

    return (
        <div>
            <input type='text' value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={onSearch}>검색</button>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} : {item.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test05;