import ManagerNavbar from "../components/ManagerNavbar"
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
                <h1>Whose complaints would you like to review?</h1>
            </header>
            <div className="dashboard">
                <Card title="Fraud" link="https://example.com/customers" />
                <Card title="Quality" link="https://example.com/chefs" />
            </div>
        </div>
    );
};

export default ComplaintsDashboard;
