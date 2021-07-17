
import Playsam from '../../../../../assets/images/projects/design/playsam/playsam.jpg';
import PlaysamArtboard from '../../../../../assets/images/projects/design/playsam/plan_de_travail.JPG';
import PlaysamTexture from '../../../../../assets/images/projects/design/playsam/texture.jpg';

export const playsam = {
    name: 'PlaySam',
    date: 'Mars 2021',
    images: [
        {
            key: 'img-playsam-poster',
            alt: 'affiche pour des jouets scandinave',
            src: Playsam,
        },
        {
            key: 'img-playsam-texture',
            alt: 'Texture en arrière plan de l\'affiche, composée des lettres du titre',
            src: PlaysamTexture,
        },
        {
            key: 'img-playsam-photoshop',
            alt: 'Plan de travail dans photoshop de Playsam',
            src: PlaysamArtboard,
        },
    ],
    description: 'J\'ai créé cette affiche dans le cadre de mon deuxième cours de design. Le client était un designer de jouet scandinave. Le devis stipulais qu\'il devait y avoir au moins une image de jouet. Le dynamisme était la théorie que nous devions mettre de l\'avant.',
    logiciels: [
        'Photoshop',
        'Illustrator',
    ],
};