import React from 'react';
import Name from '../name/Name';
import './MemberCart.css'

const MemberCart = (props) => {
    const { membercart, name } = props;
    let totaCost = 0;
    for (const member of membercart) {
        totaCost = totaCost + member.salary;
    }

    return (
        <div className="memberCart-container">
            <h3>Members Added: {membercart.length}</h3>
            <h3>Total salary: ${totaCost}</h3>
        </div>
    );
};

export default MemberCart;