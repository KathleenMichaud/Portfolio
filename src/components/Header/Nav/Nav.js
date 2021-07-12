import React from 'react';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul className="list-unstyled d-flex justify-content-center text-secondary">
                <li className="mx-3">
                    <a className="main-nav-link" href="#home">
                        <i>Accueil</i>
                        <div className="h4 text-uppercase">Accueil</div>
                    </a>
                </li>
                <li className="mx-3">
                    <a className="main-nav-link" href="#projects">
                        <i>Projets</i>
                        <div className="h4 text-uppercase">Projets</div>
                    </a>
                </li>
                <li className="mx-3">
                    <a className="main-nav-link" href="#contact">
                        <i>Contact</i>
                        <div className="h4 text-uppercase">Contact</div>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;