import React, {useState} from "react";

function Nav({setSelectedSection}) {

    return (
        <ul className="flex-row">
            <li className="mx-2">
                <a href="#about" onClick={setSelectedSection('about')}>About Me</a>
            </li>
            <li className="mx-2">
                <a href="#portfolio" onClick={setSelectedSection('portfolio')}>Portfolio</a>
            </li>
            <li className="mx-2">
                <a href="#contact" onClick={setSelectedSection('contact')}>Contact</a>
            </li>
            <li className="mx-2">
                <a href="#resume" onClick={setSelectedSection('resume')}>Resume</a>
            </li>
        </ul>
    )
}

export default Nav;