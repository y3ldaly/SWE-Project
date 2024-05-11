import React from 'react';
import UserNavbar from '../users/registered/components/UserNavbar';
import '../users/registered/components/UserNavbar.css'
import './complimentorComplain.css'

function Options() {
        return (
            <div>
                 <UserNavbar/>
                <h1> What would you like to complain about? </h1>
            <div class="container">
            <a href="#complimentURL" class="card">
                <p> Chef </p>
            </a>
            <a href="#complaintURL" class="card">
                <p> Delivery Driver </p>
            </a>
            <a href="#complimentURL" class="card">
                <p> Customer </p>
            </a>
            
            </div>


            </div>

        );

}
export default Options;
