import PhotosPreview from '../../../../assets/images/projects/photos/project_preview_photos.png';
import PhotosPreviewOriginal from '../../../../assets/images/projects/photos/project_preview_photos_hover.png';
import { photos } from './PhotoProjects';

export const photoSection = {
    id: 'photos',
    title: 'Photos',
    thumbnail: {
        original: PhotosPreviewOriginal,
        overlay: PhotosPreview,
    },
    quote: {
        quote: 'Paintings are so passe. I call this a snapshot.', 
        person: 'Grug', 
        cite: 'The Croods', 
        year: '2013',
    },
    projects : photos
};