import './Comittee.css';

import React, { useEffect, useState } from 'react';
import Member from '../member/Member';
import MemberCart from '../member-cart/MemberCart';

const Comittee = () => {
    const [members, setMembers] = useState([]);
    const [membercart, setMembercart] = useState([])
    useEffect(() => {
        fetch('./comittee.JSON')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, [])
    const handleAddToCart = (member) => {

        const newMembercart = [...membercart, member];
        setMembercart(newMembercart);
    }
    return (
        <div className="comittee-container">
            <div className="members-container">
                {members.map(member => <Member
                    member={member}
                    key={member.key}
                    handleAddToCart={handleAddToCart}
                >
                </Member>)}
            </div>
            <div className="member-cart-container">
                <MemberCart membercart={membercart}></MemberCart>
            </div>
        </div>
    );
};

export default Comittee;