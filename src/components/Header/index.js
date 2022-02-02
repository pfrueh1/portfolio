

function Header({setSelectedSection}) {

    return (
        <>
        <h1 className="signature">Paul Frueh</h1>
        <nav>
        <ul className="flex-row nav-list">
            <li className="mx-2">
                <a href="#about" className="font" onClick={() =>{setSelectedSection('about')}}>About Me</a>
            </li>
            <li className="mx-2">
                <a href="#portfolio" className="font" onClick={() =>{setSelectedSection('portfolio')}}>Portfolio</a>
            </li>
            <li className="mx-2">
                <a href="#contact" className="font" onClick={() =>{setSelectedSection('contact')}}>Contact</a>
            </li>
            <li className="mx-2">
                <a href="#resume" className="font" onClick={() =>{setSelectedSection('resume')}}>Resume</a>
            </li>
        </ul>
        </nav>
        </>
    )
}

export default Header;