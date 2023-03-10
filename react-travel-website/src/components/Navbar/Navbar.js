import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleLick = () => setClick(!click);
    const closeMenu = () => setClick(!click);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                         TRVL
                    </Link>
                    <div className='menu-icon' onClick={handleLick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav=menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to = "/" className='nav-links' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = "/pictures" className='nav-links' onClick={closeMenu}>
                                Pictures
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = "/route" className='nav-links' onClick={closeMenu}>
                                Route
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = "/" className='nav-links-mobile' onClick={closeMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar;