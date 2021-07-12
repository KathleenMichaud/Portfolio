import Observer from "../../_Global/Observer";

const ProjectsList = ({toggleSection, projects}) => {
    
    return(
        projects?.map((pro, i) => (
            <ul id={pro.id} key={pro.id} className={`list-unstyled${i !== projects?.length - 1 ? ' mb-5 pb-5' : ''}${i !== 0 ? ' pt-5 mt-5' : ''}`}>
                { pro.images?.map(img => (
                    <Observer as='li' onView={() => toggleSection(pro)} key={img.key} className="py-2">
                        <img className="project-image" src={img.src} alt={img.alt} />
                    </Observer>
                ))}
            </ul>
        ))
    )
}

export default ProjectsList;