import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default Home;