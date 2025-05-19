import React from 'react';
import Navbar from "../components/Navbar";
import Project from "../components/Project";

function Projects() {
    return (
        <div>
            <Navbar/>
            <h1 className="center">Projects</h1>
            <Project
                title="AI Health Agent"
                description="Created a proactive health AI agent to analyze client health data and identify risks, opportunities, and insights."
                link="/projects"
            />
            <Project
                title="AR Tour Guide App"
                description="Built an AR tour guide mobile app for a government client using Unity, enhancing visitor engagement."
                link="/projects"
            />
            <Project
                title="fundHer"
                description="Developed an AI-powered application to match users with funding opportunities."
                link="/projects"
            />
        </div>
    );
}

export default Projects;