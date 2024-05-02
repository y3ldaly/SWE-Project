import Button from './Button'
import demote from './demote.png'
import deregisterAccounts from './deregister-accounts.png'
import handleComplaints from './handle-complaints.png'
import manageChefs from './manage-chefs.png'
import manageDisputes from './manage-disputes.png'
import promte from './promote.png'

function Dashboard() {
    return(
        <>
            <div>
                <div>
                    <Button img={handleComplaints} altText="Handle Complaints" caption="Handle Complaints"></Button>
                    <Button img={manageDisputes} altText="Manage Disputes" caption="Manage Disputes"></Button>
                    <Button img={manageChefs} altText="Manage Chefs" caption="Manage Chefs"></Button>
                    <Button img={promte} altText="Promote" caption="Promote"></Button>
                    <Button img={demote} altText="Demote" caption="Demote"></Button>
                    <Button img={deregisterAccounts} altText="Deregister Accounts" caption="Deregister Accounts"></Button>
                </div>
            </div>
        </>
    )
}

export default Dashboard