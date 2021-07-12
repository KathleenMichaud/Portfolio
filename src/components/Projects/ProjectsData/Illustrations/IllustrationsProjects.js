import Nurse from '../../../../assets/images/projects/illustrations/infirmiere/nurse.png';
import NurseAi from '../../../../assets/images/projects/illustrations/infirmiere/illustrator.JPG';
import NurseWaterColor from '../../../../assets/images/projects/illustrations/infirmiere/watercolor.jpg';
import NurseArtboard from '../../../../assets/images/projects/illustrations/infirmiere/plan_de_travail.JPG';

import Moonlight from '../../../../assets/images/projects/illustrations/skullhead/moonlight.png';
import MoonlightDessin from '../../../../assets/images/projects/illustrations/skullhead/dessin.jpg';
import MoonlightAi from '../../../../assets/images/projects/illustrations/skullhead/illustrator.JPG';
import MoonlightPsd from '../../../../assets/images/projects/illustrations/skullhead/photoshop.JPG';

import Coco from '../../../../assets/images/projects/illustrations/oeuf_pacques/pacques.png';
import CocoLines from '../../../../assets/images/projects/illustrations/oeuf_pacques/traits.jpg';
import CocoAi from '../../../../assets/images/projects/illustrations/oeuf_pacques/illustrator.JPG';

export const illustrations = [
    {
        id: 'illustrations-1',
        name: 'Moonlight',
        date: 'Janvier 2020',
        description: 'Cette illustration a été créée dans le but de tester et de me pratiquer avec la tablette graphique et le logiciel Illustrator.',
        logiciels: [
            'Illustrator',
            'Photoshop',
            'Tablette graphique',
        ],
        images: [
            {
                key: 'image-moonlight-main',
                src: Moonlight,
                alt: 'Dessin d\'un crâne de cerf superposé sur une lune',
            },
            {
                key: 'image-moonlight-dessin',
                src: MoonlightDessin,
                alt: 'Dessin au crayon d\'un crâne de cerf',
            },
            {
                key: 'image-moonlight-illustrator',
                src: MoonlightAi,
                alt: 'Traits du crâne dans illustrator',
            },
            {
                key: 'image-moonlight-photoshop',
                src: MoonlightPsd,
                alt: 'Montage du crâne sur lune avec effet aquarelle',
            },
        ],
    },
    {
        id: 'illustrations-2',
        name: 'Travailleurs de la santé',
        date: 'Juin 2020',
        description: 'J\'ai créé cette illustration pour souligner l\'effort et le courage des infirmières qui travaillent comme des forcenées pour soigner les gens atteints du covid-19 et leur dire merci.',
        logiciels: [
            'Illustrator',
            'Photoshop',
            'Tablette graphique',
        ],
        images: [
            {
                key: 'img-nurse-poster',
                src: Nurse,
                alt: 'Dessin style aquarelle du profil d\'une infirmière avec des fleurs',
            },
            {
                key: 'img-nurse-illustrator',
                src: NurseAi,
                alt: 'Traits du visage de l\'infirmière dans Illustrator',
            },
            {
                key: 'img-nurse-photoshop',
                src: NurseArtboard,
                alt: 'Plan de travail dans Photoshop du dessin de l\'infirmière',
            },
            {
                key: 'img-nurse-watercolor',
                src: NurseWaterColor,
                alt: 'Tâches d\'aquarelle du dessin final de l\'infimière',
            },
        ],
    },
    {
        id: 'illustrations-3',
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
    },
];