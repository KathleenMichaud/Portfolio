import Ori from '../../../../../assets/images/projects/design/origamimani/origamimanie.jpg';
import OriArtboard from '../../../../../assets/images/projects/design/origamimani/plan_de_travail.JPG';
import OriTexture from '../../../../../assets/images/projects/design/origamimani/texture.jpg';
import OriTitle from '../../../../../assets/images/projects/design/origamimani/title.jpg';

export const origamimani = {
    name: 'Origanimani',
    date: 'Octobre 2020',
    description: 'J\'ai créé ce projet pour un travail scolaire. Le devis consistait à créer une affiche pour un musée qui annonçait l\'exposition d\'oeuvres d\'origami. L\'une des contraintes était d\'utiliser une typographie représentative. J\'ai donc créé une typographie moi-même avec des papiers découpés et pliés que j\'ai ensuite photographiés.',
    logiciels: [
        'Photoshop',
        'Illustrator',
        'Lightroom',
        'Canon 6D Mark II',
    ],
    images: [
        {
            key: 'img-origami-poster',
            src: Ori,
            alt: 'Poster d\'exposition d\'origami',
        },
        {
            key: 'img-origami-texture',
            src: OriTexture,
            alt: 'Papier chiffonné',
        },
        {
            key: 'img-origami-title',
            src: OriTitle,
            alt: 'Lettres découpées et pliées',
        },
        {
            key: 'img-origami-artboard',
            src: OriArtboard,
            alt: 'Plan de travail dans photoshop du poster origamimani',
        },
    ]
};