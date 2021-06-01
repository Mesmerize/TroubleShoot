import React from 'react'


const NavBar = () => {
    return (
        <div>
            <nav className='navbar'>
            <a className='logo' href="#">B</a>
                <ul className='menu'>
                    <li className='item'> <a href="#skills">SKILLS</a></li>
                    <li className='item'> <a href="#projects">PROJECTS</a></li>
                    <li className='item'> <a href="#contact-me">CONTACT ME</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
