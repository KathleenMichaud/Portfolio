const ProjectPreview = ({onClick, img, title}) => (
    <article onClick={onClick} className="bg-secondary p-3">
        <figure className="project-thumbnail-container">
            <img className="project-thumbnail-overlay" src={img.overlay} alt={`Preview ${title}`} />
            <img className="project-thumbnail-original" src={img.original} alt={`Preview ${title}`} />
        </figure>
        <h3 className="text-uppercase font-family-base h5 font-weight-bold m-0">{title}</h3>
    </article>
)

export default ProjectPreview;