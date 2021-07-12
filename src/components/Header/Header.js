import React from 'react';
import Nav from './Nav/Nav';

const Header = () => {
    return(
        <header id="home" className="main-header">
            <Nav />
            <h1 className="text-uppercase text-secondary display-1 mb-1">Kathleen Michaud</h1>
            <span className="text-uppercase font-weight-bold text-secondary">Design graphique | Photographie</span>
        </header>
    )
}

export default Header;