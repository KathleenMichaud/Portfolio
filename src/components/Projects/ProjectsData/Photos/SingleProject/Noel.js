import Noel1 from '../../../../../assets/images/projects/photos/noel/christmas_birdsview.JPG';
import Noel2 from '../../../../../assets/images/projects/photos/noel/christmas_birdsview_2.JPG';
import NoelComp from '../../../../../assets/images/projects/photos/noel/noel_comparaison.jpg';

export const noel = {
    name: 'Portrait de Noël',
    date: 'Novembre 2019',
    description: 'Ces photographies ont été prises lors d\'une séance photo de Noël que j\'ai organisée en 2019. Le but était d\'offrir de magnifiques photographies de Noël à faible coût.',
    logiciels:[
        'Lightroom',
        'Photoshop',
        'Canon 6D Mark II',
        'Spotlights Flash',
    ],
    images: [
        {
            key: 'img-noel-deux-jeunes',
            src: Noel1,
            alt: 'Deux jeunes enfants qui rient dans un décor de Noël',
        },
        {
            key: 'img-noel-un-jeune',
            src: Noel2,
            alt: 'Un jeune enfant étendu dans un décor de Noël',
        },
        {
            key: 'img-noel-comparaison',
            src: NoelComp,
            alt: 'Comparaison avant et après retouches de l\'enfant étendu',
        },
    ],
};