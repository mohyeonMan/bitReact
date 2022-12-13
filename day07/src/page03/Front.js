import React from 'react';
import { useParams } from 'react-router-dom';

const Front = ({data}) => {
const {route} = useParams()

    return (
        <div>
            <h1>Front page</h1>
            <h2>{route}</h2>
            <hr/>
            {
                data.filter(item => item.title === route)
                .map((item, index) => <div key={index}>
                    <h2>{item.title}/{item.info}</h2>
                </div>)
            }
        </div>
    );
};

export default Front;