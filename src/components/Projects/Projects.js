import { Col, Container, Row } from "react-bootstrap";
import { ProjectsData } from './ProjectsData';
import SectionTitle from "../_Global/SectionTitle";
import ProjectPreview from "./ProjectPreview/ProjectPreview";
import ProjectsOverlay from "./ProjectsOverlay/ProjectsOverlay";
import { useState } from "react";

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [categoryData, setCategoryData] = useState(null);

    const toggleOverlay = bool => setIsOpen(bool ?? !isOpen); 

    return (
        <section id="projects" className="main-section py-5">
            <Container className="py-5">
                <SectionTitle title='Projets' quote="It's alive! It's alive!" person='Dr Frankenstein' cite='Frankenstein' year='1931' />
                <Row as='ul' className="list-unstyled mt-5">
                    { ProjectsData.map(category => (
                        <Col key={category.id} as="li" md="4" className="mb-4">
                            <ProjectPreview 
                                onClick={() => {
                                    categoryData !== category.projects && setCategoryData(category);
                                    setIsOpen(true);
                                }} 
                                img={{
                                    overlay: category.thumbnail.overlay, 
                                    original: category.thumbnail.original
                                }} 
                                title={category.title} />
                        </Col>
                    ))}
                </Row>
                {categoryData && <ProjectsOverlay isOpen={isOpen} toggle={toggleOverlay} data={categoryData} />}
            </Container>
        </section>
    )
}

export default Projects;