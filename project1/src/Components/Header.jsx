import React from 'react';
import {HashLink} from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <nav>
                <h1 style={{textTransform : 'none'}}>TechVantage</h1>
                <main>
                    <HashLink to = '/#home' >Home</HashLink>
                    <HashLink to = '/contact' >Contact</HashLink>
                    <HashLink to = '/#aboutus' >AboutUs</HashLink>
                    <HashLink to = '/#brands' >Brands</HashLink>
                    <HashLink to = '/services' >Services</HashLink>
                </main>
            </nav>
        </>
    )
}

export default Header