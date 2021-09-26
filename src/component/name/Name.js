import React from 'react';
import './Name.css';

const Name = (props) => {
    console.log(props);
    const { name } = props;
    return (
        <div className="name-container">
            <p>Name: {props.nam}</p>
        </div>
    );
};

export default Name;