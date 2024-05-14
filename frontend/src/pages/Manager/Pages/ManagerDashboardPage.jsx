import React from 'react';
import './ManagerDashboardPage.css';
import '../../../index.css'
// import '../Components/ManagerNavbar'
import ManagerNavbar from '../Components/ManagerNavbar';
import handleComplaints from '../../../assets/handle-complaints.png'
import manageDisputes from '../../../assets/manage-disputes.png'
import employees from '../../../assets/employees.png'
import promote from '../../../assets/promote.png'
import demote from '../../../assets/demote.png'
import deregisterAccounts from '../../../assets/deregister-accounts.png'
import { useNavigate } from 'react-router-dom';


function ManagerDashboardPage() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  }
  return (
    <>
    <ManagerNavbar />
      <div className="manager-dashboard">
      <h2>Welcome Manager! What would you like to do today?</h2>
      <div className="section">
        <h2 className="section-title">Feedback</h2>
        <div className="button-container">
          <div className="button" onClick={() => handleNavigate("/manager/viewcomplaint")}>
            <img src={handleComplaints} alt="Feedback" />
            <span>Handle Complaints</span>
          </div>
          <div className="button" onClick={() => handleNavigate("/manager/fraudcomplaint")}>
            <img src={manageDisputes} alt="Reports" />
            <span>Manage Disputes</span>
          </div>
          <div className="button">
            <img src={employees} alt="Analytics" />
            <span>Manage Employees</span>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="section-title">General</h2>
        <div className="button-container">
          <div className="button" onClick={() => handleNavigate("/manager/promote")}>
            <img src={promote} alt="Settings" />
            <span>Promote</span>
          </div>
          <div className="button" onClick={() => handleNavigate("/manager/demote")}>
            <img src={demote} alt="Users" />
            <span>Demote</span>
          </div>
          <div className="button">
            <img src={deregisterAccounts} alt="Notifications" />
            <span>Deregister Accounts</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ManagerDashboardPage;
