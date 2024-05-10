import { BrowserRouter, Routes, Route } from "react-router-dom"

// import PromoteChefsPage from './managers/pages/PromoteChefsPage.jsx'
// import UserNavbar from "./users/registered/components/UserNavbar.jsx"
import ManagerNavbar from "./managers/components/ManagerNavbar.jsx"


function App() {
    return ( 
        <>
           <BrowserRouter>
                <ManagerNavbar/>
                <div className="pages">
                    <Routes>
                        <Route
                            path="/"
                            // element={<PromoteChefsPage/>}
                        />

                    </Routes>

                </div>
           </BrowserRouter>
           
        </>
    )
}

export default App