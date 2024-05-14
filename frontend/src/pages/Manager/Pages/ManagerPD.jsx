// import ManagerNavbar from "../components/ManagerNavbar"
import   "../components/ManagerNavbar.css";
import React, { useEffect } from 'react';
import './ManagerChooseComplain.css'
const Card = ({ title, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card">
            <p>{title}</p>
        </a>
    );
};

const ComplaintsDashboard = () => {
    return (
        <div>
            <header className="header">
                <ManagerNavbar/>
                <h1>Whose complaints would you like Promote/Demote?</h1>
            </header>
            <div className="dashboard">
                <Card title="Chefs" link="https://example.com/chefs" />
                <Card title="Delivery People" link="https://example.com/delivery-people" />
            </div>
        </div>
    );
};

export default ComplaintsDashboard;
