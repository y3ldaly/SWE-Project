import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

// import UserNavbar from "./users/registered/components/UserNavbar.jsx";
// import PromoteChefsPage from './managers/pages/PromoteChefsPage.jsx'
import UserHomeScreen from "./users/surfers/pages/UserHomeScreen";
import UserNavbar from "./users/registered/components/UserNavbar";



function App() {
  return (
    <BrowserRouter>
      <UserNavbar/>

      <div className="pages">
        <Routes>
          <Route path="/users" element={<UserHomeScreen/>} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
