import React from 'react';
import Navbar from "../components/Navbar";
import "./Home.css"

function Home() {
    return (
        <div>
            <Navbar/>
            <h1 className="center">Hello! I'm Jacob.</h1>
            <h3 className="center">I'm currently a rising 4th year Computer Science student at the University of Virginia.</h3>
            <h3 className="center">I enjoy full stack web-development and machine learning.</h3>
            <h3 className="center">In my free time I enjoy playing pickleball and volleyball.</h3>
        </div>
    );
}

export default Home;