const SectionTitle = ({title, titleTag:Title = 'h2', titleClassName, quote, quoteClassName, theme = 'light', person, cite, year}) => (
    <>
        <Title className={`${theme === 'light' ? '' : ' text-white'} ${titleClassName ?? 'section-title'}`}>{title}</Title>
        <blockquote className={`${quoteClassName ?? ''}`}>
            <q className={`h1 mb-0 text-uppercase text-${theme === 'light' ? 'primary' : 'lighter-dark'} d-block`}>{quote}</q>
            <span className={`d-inline-block ${theme === 'light' ? '' : 'text-lighter-dark'}`}>
                <span className="section-title-quote-source"><b>{person}</b>, <cite>&nbsp;{cite}</cite>, {year}</span>
            </span>
        </blockquote>
    </>
)

export default SectionTitle;