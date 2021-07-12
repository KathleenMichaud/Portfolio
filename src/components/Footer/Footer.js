
const Footer = () => {
    return (
        <footer className="main-footer text-secondary text-left">
            <div className="container pt-5">
                <h3 className="text-uppercase pt-5 h1 text-primary mb-3">Kathleen Michaud</h3>
                <section className="d-flex mb-2 align-items-end text-uppercase">
                    <h4 className="mb-0 mr-2">Séquences</h4>
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item"><a href="#home">Accueil</a></li>
                        <li className="list-inline-item"><a href="#projects">Projets</a></li>
                        <li className="list-inline-item"><a href="#contact">Contact</a></li>
                    </ul>
                </section>
                <section className="d-flex mb-2 align-items-end text-uppercase">
                    <h4 className="mb-0 mr-2">Réseaux sociaux</h4>
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item"><a href="https://www.instagram.com/kathleenmichaud_photographie/?hl=fr" target= "_blank" rel="noreferrer">Instagram</a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/kathleen-michaud-8a98b6b4/" target= "_blank" rel="noreferrer">LinkedIn</a></li>
                    </ul>
                </section>
                <section className="d-flex flex-wrap flex-md-nowrap align-items-end mb-2">
                    <div className="d-flex align-items-center">Réalisé par <h5 className="h6 mb-0 ml-1 text-uppercase mr-2">Kathleen Michaud</h5></div>
                    <div className="d-flex align-items-center">Produit par <h5 className="h6 mb-0 ml-1 text-uppercase">Gabrielle Michaud</h5></div>
                </section>
                <small>&copy; Copyright, Gabrielle Michaud & Kathleen Michaud, 2021</small>
            </div>
        </footer>
    )
}

export default Footer;