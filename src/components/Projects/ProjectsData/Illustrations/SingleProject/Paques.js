import Coco from '../../../../../assets/images/projects/illustrations/oeuf_pacques/pacques.png';
import CocoLines from '../../../../../assets/images/projects/illustrations/oeuf_pacques/traits.jpg';
import CocoAi from '../../../../../assets/images/projects/illustrations/oeuf_pacques/illustrator.JPG';

export const paques = {
    name: 'Pâcques',
    date: 'Avril 2020',
    description: 'J\'ai créé cette illustration pour le plaisir afin de me pratiquer dans les divers logiciels ainsi que pour souhaiter une joyeuse Pâcques aux gens qui me suivent sur Instagram. ',
    logiciels: [
        'Illustrator',
        'Photoshop',
        'Tablette graphique',
    ],
    images: [
        {
            key: 'img-coco-poster',
            src: Coco,
            alt: 'Oeuf de Pâcques avec des tentacules qui sortent de la coquille'
        },
        {
            key: 'img-coco-vectoriels',
            src: CocoLines,
            alt: 'Traits vectoriels de l\'oeuf de Pâcques'
        },
        {
            key: 'img-coco-illustrator',
            src: CocoAi,
            alt: 'Plan de travail de l\'oeuf de Pâcques dans illustrator'
        },
    ],
};