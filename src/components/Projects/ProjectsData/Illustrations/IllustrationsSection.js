import IllustrationsPreview from '../../../../assets/images/projects/illustrations/project_preview_illustrations.png';
import IllustrationsPreviewOriginal from '../../../../assets/images/projects/illustrations/project_preview_illustrations_hover.png';
import { illustrations } from './IllustrationsProjects';

export const illustrationSection = {
    id: 'illustrations',
    title: 'Illustrations',
    thumbnail: {
        original: IllustrationsPreviewOriginal,
        overlay: IllustrationsPreview,
    },
    quote: {
        quote: 'Jack, I want you to draw me like one of your French girls.', 
        person: 'Rose DeWitt Bukater', 
        cite: 'Titanic', 
        year: '1997',
    },
    projects: illustrations,
}