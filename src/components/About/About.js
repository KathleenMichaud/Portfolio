import React, { useRef, useState } from 'react';
import { Container, Col, Row } from "react-bootstrap";
import SectionTitle from "../_Global/SectionTitle";
import Porte from '../../assets/images/porte_0.png';
import Porte1 from '../../assets/images/porte_1.png';
import Porte2 from '../../assets/images/porte_2.png';
import Porte3 from '../../assets/images/porte_3.png';
import Porte4 from '../../assets/images/porte_4.png';
import gsap from 'gsap/dist/gsap';

const About = () => {
    const doors = [Porte, Porte1, Porte2, Porte3, Porte4];
    const doorRef = useRef(null);
    const tL = gsap.timeline({paused: true,})

    const [clickCount, setClickCount] = useState(0);

    const openDoor = () => {
        if(clickCount < doors.length - 1) {
            setClickCount(clickCount + 1 < doors.length ? clickCount + 1 : clickCount);
            tL.to(doorRef.current, {
                scaleX: 1.75,
                scaleY: 1.75,
                duration: 0.015,
            });

            tL.play(0);

            tL.eventCallback('onComplete', () => {
                tL.reverse(0);
            });
        } else {
            tL?.kill();
        }
    }

    return (
        <section id="about" className="main-section section-about">
            <Container className="section-about-container h-100">
                {clickCount === 0 && <div className="section-about-knock-text d-none d-md-block">Knock!</div>}
                <img 
                    ref={doorRef}
                    onClick={openDoor} 
                    className={`main-section-img-porte d-md-block d-none${clickCount === 0 ? ' knock' : ''}`} 
                    alt="Porte" 
                    src={doors[clickCount]} 
                />
                <img 
                    className="main-section-img-porte d-md-none d-block"
                    alt="Porte"
                    src={Porte4}
                />
                <Row>
                    <Col md={{ span: 6, offset: 6 }} className="text-left">
                        <SectionTitle title='À propos' quote="Here's Johnny!" person="Jack Torrence" cite="The Shining" year="1980" />
                        <p>Bonjour !</p> 

                        <p>Merci de m’avoir ouvert cette porte. C’est toute une opportunité que vous m’offrez ! Mon site web est plutôt représentatif de qui je suis : une jeune femme créative qui adore imaginer des concepts, des histoires et des mondes complètement éclatés et originaux ! Polyvalence est l’un des mots qui me décrivent le mieux : j’aime explorer et apprendre. C’est pourquoi j’ai déjà eu la chance de découvrir les métiers de photographe, vidéaste, technicienne de plateau, monteuse, designer graphique et coordonnatrice en communication visuelle et numérique.</p>

                        <p>Chaleureuse, ponctuelle et attentive sont les autres termes qui m’illustrent bien. Je ne peux pas passer une journée sans me laisser dériver vers la création. Je suis un véritable caméléon, je m’adapte à n’importe quelle situation et j’arrive à démontrer mon professionnalisme tout en ne me prenant pas trop au sérieux. Allons boire un café, vous verrez que ma personnalité s’agence bien à votre entreprise. </p>
                        
                        <p>À bientôt.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;