import Moonlight from '../../../../../assets/images/projects/illustrations/skullhead/moonlight.png';
import MoonlightDessin from '../../../../../assets/images/projects/illustrations/skullhead/dessin.jpg';
import MoonlightAi from '../../../../../assets/images/projects/illustrations/skullhead/illustrator.JPG';
import MoonlightPsd from '../../../../../assets/images/projects/illustrations/skullhead/photoshop.JPG';

export const moonlight = {
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
};