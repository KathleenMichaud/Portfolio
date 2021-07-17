import Coffee from '../../../../../assets/images/projects/photos/texture_organique/coffee.jpg';
import Watch from '../../../../../assets/images/projects/photos/texture_organique/watch.jpg';
import WatchComp from '../../../../../assets/images/projects/photos/texture_organique/watch_comparaison.jpg';

export const textures = {
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
};