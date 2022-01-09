import React from "react";

function Resume() {
    return (
        <section className="section">
            <h2>My Resume</h2>
            <a href="./resume-current.pdf" download="paul_frueh_resume" className="resume-button">Resume download</a>
            <img className="resume" src={require('../../assets/images/resume.png')} alt="resume"></img>    

        </section>
    )
}

export default Resume;