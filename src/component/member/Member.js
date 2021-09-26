import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Member.css'

const Member = (props) => {
    const { name, role, age, division, img, salary } = props.member;
    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="member-container">
            <img src={img} alt="" />
            <p><b>Name:</b> {name}</p>
            <p><b>Role:</b> {role}</p>
            <p><b>Age:</b> {age}</p>
            <p><b>Division:</b> {division}</p>
            <p><b>Salary: $</b>{salary}</p>
            <button onClick={() => props.handleAddToCart(props.member)}>{element} Add to Cart</button>
        </div>
    );
};

export default Member;