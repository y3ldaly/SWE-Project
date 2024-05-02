import DashboardButton from '../../components/DashboardButton'
import demote from '../../assets/demote.png'
import deregisterAccounts from '../../assets/deregister-accounts.png'
import handleComplaints from '../../assets/handle-complaints.png'
import manageChefs from '../../assets/manage-chefs.png'
import manageDisputes from '../../assets/manage-disputes.png'
import promote from '../../assets/promote.png'
import ManagerNavbar from '../../components/ManagerNavbar'
import './DashboardPage.css'

function DashboardPage() {
    return(
        <>
            <ManagerNavbar/>
            <p id="manager-message">Welcome, [Manager]! What would you like to do today?</p>
            <div>
                <div>
                    <DashboardButton link="https://www.google.com/" img={handleComplaints} altText="Handle Complaints" caption="Handle Complaints"/>
                    <DashboardButton link="#" img={manageDisputes} altText="Manage Disputes" caption="Manage Disputes"/>
                    <DashboardButton link="#" img={manageChefs} altText="Manage Chefs" caption="Manage Chefs"/>
                    <DashboardButton link="#" img={promote} altText="Promote" caption="Promote"/>
                    <DashboardButton link="#" img={demote} altText="Demote" caption="Demote"/>
                    <DashboardButton link="#" img={deregisterAccounts} altText="Deregister Accounts" caption="Deregister Accounts"/>
                </div>
            </div>
        </>
    )
}

export default DashboardPage