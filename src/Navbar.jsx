import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, socialLinks } from './data'
import logo from "./logo.svg"

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false)

    const toggleLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <nav>
            <div className="nav-center"></div>
            <div className="nav-header">
                <img src={logo} alt="logo" className='logo' />
                <button className='nav-toggle' onClick={toggleLinks}>
                    <FaBars />
                </button>
            </div>

            {/* if showLinks is true, the container will be displayed, if false, its hidden */}
            {showLinks && (<div className="links-container">
                <ul className="links">
                    {links.map((link) => {
                        const { id, url, text } = link
                        return <li key={id}>
                            <a href={url}> {text}</a>
                        </li>
                    })}
                </ul>
            </div>)}

        </nav>
    )
}

export default Navbar
