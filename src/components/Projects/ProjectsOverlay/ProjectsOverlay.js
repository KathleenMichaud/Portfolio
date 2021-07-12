import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Fade from "../../_Global/Fade";
import SectionTitle from "../../_Global/SectionTitle";
import ProjectsList from "./ProjectsList";

const ProjectsOverlay = ({isOpen, toggle, data}) => {
    gsap.registerPlugin(ScrollTrigger);
    const overlayRef = useRef(null);
    const headerRef = useRef(null);
    const projectsRef = useRef(null);
    const [currentSection, setCurrentSection] = useState(data?.projects[0]);

    const projectsFade = () => {
        gsap.to(projectsRef.current, 
            {
                duration: 0.75,
                delay: 0.15,
                opacity: 1,
                ease: 'power3',
            });
    }

    const toggleSection = info => setCurrentSection(prev => info);

    function skewWidth(deg, height) {
        return Math.atan(deg * (Math.PI / 180)) * height;
    }

    useEffect(() => setCurrentSection(data?.projects[0]), [data]);
    useEffect(() => {
        var slide = gsap.fromTo(overlayRef.current,
            {
                x:0,
                y:0,
                skewX:0
            },
            {
                x: (window.innerWidth + skewWidth(20, window.innerHeight)),
                y: 0,
                skewX:-20,
                duration: 1,
                transformOrigin: 'left',
                ease: 'expo.in'
            }
        );
        
        if(isOpen) {
            gsap.set(projectsRef.current, { opacity: 0});

            slide.eventCallback("onReverseComplete", function() {
                projectsFade();
            });
            slide.reverse(0);
            let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(".project-image", "skewY", "deg"), // fast
            clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

            if(!!sT) sT.kill();

            var sT = ScrollTrigger.create({
                scroller: '.projects-overlay',
                onUpdate: self => {
                    let skew = clamp(self.getVelocity() / -300);
                    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                    if (Math.abs(skew) > Math.abs(proxy.skew)) {
                        proxy.skew = skew;
                        gsap.to(proxy, {
                            skew: 0, 
                            duration: 0.8, 
                            ease: "power3", 
                            overwrite: true, 
                            onUpdate: () => skewSetter(proxy.skew)
                        });
                    }
                }
            });
        } else {
            sT?.kill();
            slide.play(0);
        }
        
        return () => {
            sT?.kill();
            slide?.kill();
        };
    }, [isOpen]);

    return(
        <section ref={overlayRef} id={'projects-overlay'} className={`projects-overlay py-5 ${data?.categoryNb}-projects`}>
            <Container>
                <Row>
                    <Col ref={headerRef} as="section" md="4" className="text-left">
                        <Fade fadeIn={isOpen} delay={isOpen ? 0.75 : 0} ease='circ' speed={isOpen ? 1 : 0.25} style={{position: 'sticky', top: 0}}>
                            <header className="position-relative">
                                <button className="btn-back mb-3" onClick={() => toggle()}>
                                    Retour
                                </button>
                                <SectionTitle 
                                    theme='dark'
                                    title={'0'+data?.categoryNb+'. '+data?.title}
                                    titleClassName='display-4 font-family-headings text-uppercase'
                                    quote={data?.quote?.quote}
                                    quoteClassName='position-absolute top-0 right-0 left-0 no-select'
                                    person={data?.quote?.person}
                                    cite={data?.quote?.cite}
                                    year={data?.quote?.year}
                                />
                                <nav className="projects-sidenav d-none d-md-block">
                                    <ul className="p-0 small text-uppercase list-unstyled">
                                        { data?.projects?.map((pro, i) => (
                                            <li key={'nav-'+pro.id} className={`projects-sidenav-li${currentSection?.id === pro.id ? ' is-active' : ''}`}>
                                                <a href={`#${pro.id}`}>{pro.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </header>
                            <Fade
                                ease='circ' 
                                direction='bottom' 
                                speed={1} 
                                distance={50} 
                                dependency={currentSection} 
                                className="text-white py-4 d-none d-md-block"
                            >
                                <h3 className="text-uppercase h5 mb-0">{currentSection?.name}</h3>
                                <time className="small text-muted mb-3 d-block">{currentSection?.date}</time>
                                <div className="projects-overlay-content">
                                    <p>{currentSection?.description}</p>
                                    {currentSection?.logiciels &&
                                        <>
                                            <h4 className="h6 font-family-base font-weight-bold mb-0">Logiciels/matériaux</h4>
                                            <ul className="list-inline small">
                                                { currentSection?.logiciels?.map((log, i) => (
                                                    <li className="list-inline-item" key={currentSection?.name + log}>
                                                        {log}{i !== currentSection.logiciels.length - 1 && ','}
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    }
                                </div>
                            </Fade>
                        </Fade>
                    </Col>
                    <Col as='section' ref={projectsRef} className="projects-overlay-images" md="8">
                        {isOpen && <ProjectsList toggleSection={toggleSection} projects={data?.projects} />}
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default ProjectsOverlay;