// use this file to make sure your components work

import SurferNavbar from "./users/surfers/components/SurferNavbar"
import UserNavbar from "./users/registered/components/UserNavbar"
import ManagerNavbar from "./managers/components/ManagerNavbar"
import DashboardPage from "./managers/pages/DashboardPage"
import PromoteChefsPage from "./managers/pages/PromoteChefsPage"
import DemoteChefsPage from "./managers/pages/DemoteChefsPage"
import FullMenuPage from "./users/registered/pages/FullMenuPage"
import MenuOverviewPage from "./users/registered/pages/MenuOverviewPage"
import SelectOrderTypePage from "./users/registered/pages/SelectOrderTypePage"
import PaymentPage from "./users/registered/pages/PaymentPage"
// import LoginPage from "./users/surfers/pages/LoginPage"
import UserHomeScreen from "./users/surfers/pages/homeScreen/UserHomeScreen"
import UserLoginPage from "./users/surfers/pages/loginPage/UserLoginPage"
import ChefRegisterPage from "./users/surfers/pages/registerPage/ChefRegisterPage"


function App() {
    return(
        <>
            <ChefRegisterPage/>
        </>
    )
}

export default App