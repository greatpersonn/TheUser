import React from 'react';

import "./Home.scss";

const Home = () => {
    return (
        <div className="container-home">
            <div className="home__header">
                Welcome to TheUser system
            </div>
            <div className="home__content">
                It is designed for convenient user management.
                You will be able to add users to the system, manage and customize them, update information, or simply remove them from the system.
                Isn't it convenient to manage your users?
            </div> 
        </div>
    );
}

export default Home;