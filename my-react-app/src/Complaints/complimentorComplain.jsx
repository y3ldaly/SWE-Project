import React from 'react';
import UserNavbar from '../users/registered/components/UserNavbar';
import '../users/registered/components/UserNavbar.css'
import './complimentorComplain.css'

function Options() {
        return (
            <div>
                 <UserNavbar/>
                <h1> Select one of the following </h1>
            <div class="container">
            <a href="#complimentURL" class="card">
                <p><emoji>😊</emoji> Write a compliment!</p>
            </a>
            <a href="#complaintURL" class="card">
                <p><emoji>😠</emoji> Write a complaint</p>
            </a>
            </div>


            </div>

        );

}

export default Options;
