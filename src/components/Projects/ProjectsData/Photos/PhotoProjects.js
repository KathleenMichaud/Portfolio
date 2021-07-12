import Noel1 from '../../../../assets/images/projects/photos/noel/christmas_birdsview.JPG';
import Noel2 from '../../../../assets/images/projects/photos/noel/christmas_birdsview_2.JPG';
import NoelComp from '../../../../assets/images/projects/photos/noel/noel_comparaison.jpg';

import Coffee from '../../../../assets/images/projects/photos/texture_organique/coffee.jpg';
import Watch from '../../../../assets/images/projects/photos/texture_organique/watch.jpg';
import WatchComp from '../../../../assets/images/projects/photos/texture_organique/watch_comparaison.jpg';

import Pizza1 from '../../../../assets/images/projects/photos/pizza/pizza.jpg';
import Pizza2 from '../../../../assets/images/projects/photos/pizza/pizza_italienne.jpg';

import Fruits from '../../../../assets/images/projects/photos/fruits/fruits.jpg';
import FruitsComp from '../../../../assets/images/projects/photos/fruits/fruits_comparaison.jpg';

export const photos = [
    {
        id: 'photos-2',
        name: 'Textures Organiques',
        date: 'Juin 2019',
        description: 'J\'ai prise ces photographies lors d\'un matin où je venais de préparer un café pour ma femme. J\'ai eu envie de créer des images de produits texturés et organiques.',
        logiciels: [
            'Lightroom',
            'Photoshop',
            'Canon 6D Mark II',
        ],
        images: [
            {
                key: 'img-textures-organiques-coffee',
                src: Coffee,
                alt: 'Café vu d\'au-dessus à travers les feuilles d\'une plante',
            },
            {
                key: 'img-textures-organiques-watch',
                src: Watch,
                alt: 'Montre en cuir sur un vieux livre, accompagné de petites fleurs blanches',
            },
            {
                key: 'img-textures-organiques-comparaison',
                src: WatchComp,
                alt: 'Avant et après retouches de la photo de la montre',
            },
        ]
    },
    {
        id: 'photos-3',
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
    },
    {
        id: 'photos-4',
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
    },
    { 
        id: 'photos-1',
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
    },
]