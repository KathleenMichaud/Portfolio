import Pizza1 from '../../../../../assets/images/projects/photos/pizza/pizza.jpg';
import Pizza2 from '../../../../../assets/images/projects/photos/pizza/pizza_italienne.jpg';

export const pizza = {
    name: 'Pizza',
    date: 'Mars 2020',
    description: 'Ces photographies ont été prise lors d\'une soirée tranquille alors que je venais de cuisiner ces délicieuses pizzas. Comment aurais-je pu passer à côté d\'aussi belles photos ?',
    logiciels: [
        'Lightroom',
        'Photoshop',
        'Canon 6D Mark II',
    ],
    images: [
        {
            key: 'img-pizza-grecque',
            src: Pizza1,
            alt: 'Pizza style grecque sur une planche de bois',
        },
        {
            key: 'img-pizza-italienne',
            src: Pizza2,
            alt: 'Plan rapproché d\'une pizza italienne sur une planche de bois',
        }
    ],
};