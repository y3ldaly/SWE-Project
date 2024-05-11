// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserNavbar from "./users/registered/components/UserNavbar.jsx";
// import PromoteChefsPage from './managers/pages/PromoteChefsPage.jsx'




function App() {
  return (
    <BrowserRouter>
      

      <div className="pages">
        <Routes>
          <Route path="/" element={<DemoteChefsPage />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
