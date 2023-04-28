import React from 'react';
import "./SwitchCard.css";
import { Link } from 'react-router-dom';
const SwitchCard = (props) => {
    return (
        <div className="switch_card">
            <div className="switch_heading d-flex justify-content-between">
                <h2>{props.heading}</h2>
                <i class="uil uil-user-circle"></i>                
            </div>
            <div className="switch_date">
                <h5>{props.date}</h5>
                <div className="line"></div>
            </div>
            <ul className="switch_links">
               <Link to="/myaccount"><li>My Account</li></Link> 
               <Link to="/setupaccount"><li>Wallet Management</li></Link> 
               <Link to="/table"><li>Account Transactions</li></Link> 
               <Link><li>Rewards</li></Link> 
               <Link><li>Edit Profile</li></Link> 
               <Link><li>Edit Information</li></Link> 
            </ul>
           
           
            <hr className='line2'/>
            <div className="post_link text-center fw-bold fs-3">
                <a href={props.link}>Log Out</a>
            </div>
        </div>
    )
}

export default SwitchCard