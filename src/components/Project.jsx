import React from 'react';
import "./Project.css"

function Project({ title, description, link }) {
    return (
        <div className="center">
            <div className="background">
                <h2 className="center">{title}</h2>
                <h3 className="center">{description}</h3>
                <a className="center" href={link}>View Project</a>
            </div>
        </div>
    );
}

export default Project;