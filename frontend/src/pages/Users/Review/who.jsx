import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
// import '../users/registered/components/UserNavbar.css'
import './complimentorComplain.css'
import { Link } from 'react-router-dom';

function Options() {
        return (
            <div>
                 <Navbar/>
                <h1 className="menut"> What would you like to complain about? </h1>
            <div class="container">
            <Link to='/review/chef'><a class="card"><p> Chef </p></a></Link>
            <Link to='/review/deliveryperson'><a class="card"><p> Delivery Person </p></a></Link>
            <Link to='/review/customer'><a class="card"><p> Customer </p></a></Link>
                
            
           
            
            </div>


            </div>

        );

}
export default Options;
