import DesignPreview from '../../../../assets/images/projects/design/project_preview_design.png';
import DesignPreviewOriginal from '../../../../assets/images/projects/design/project_preview_design_hover.png';
import { designs } from './DesignProjects';

export const designSection = {
    id: 'graphic-design',
    title: 'Design graphique',
    quote: {
        quote: 'Stop going for the easy buck and start producing something with your life. Create, instead of living off the buying and selling of others.', 
        person: 'Carl Fox', 
        cite: 'Wall Street ', 
        year: '1987',
    },
    thumbnail: {
        original: DesignPreviewOriginal,
        overlay: DesignPreview,
    },
    projects: designs,
};