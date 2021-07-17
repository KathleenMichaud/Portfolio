import Fruits from '../../../../../assets/images/projects/photos/fruits/fruits.jpg';
import FruitsComp from '../../../../../assets/images/projects/photos/fruits/fruits_comparaison.jpg';

export const dejeuner = {
    name: 'Petit déjeuner',
    date: 'Juin 2019',
    description: 'J\'ai eu envi de prendre cette photographie un matin alors que je venais de préparer un délicieux petit déjeuner pour ma femme toujours endormie. ',
    logiciels: [
        'Lightroom',
        'Photoshop',
        'Canon 6D Mark II',
    ],
    images: [
        {
            key: 'img-fruits-photo',
            src: Fruits,
            alt: 'Petit déjeuner santé dans deux bols sur une planche décorée de fruits',
        },
        {
            key: 'img-fruits-comparaison',
            src: FruitsComp,
            alt: 'Comparaison avant et après retouches de la photo du petit déjeuner',
        },
    ],
};