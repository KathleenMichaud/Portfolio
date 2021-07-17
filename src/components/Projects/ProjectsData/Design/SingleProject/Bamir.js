import Bamir from '../../../../../assets/images/projects/design/bamir/bamir.jpg';
import BamirEl from '../../../../../assets/images/projects/design/bamir/elements.JPG';
import BamirArtboard from '../../../../../assets/images/projects/design/bamir/plan_de_travail.JPG';

export const bamir = {
    name: 'Bamïr',
    date: 'Février 2021',
    images: [
        {
            key: 'img-maquette-bamir',
            alt: 'Maquette web d\'un site fictionnel de traiteur indien',
            src: Bamir,
        },
        {
            key: 'img-bamir-elements',
            alt: 'Divers éléments vectoriels tels que des icônes utilisés dans la maquette web Bamir',
            src: BamirEl,
        },
        {
            key: 'img-bamir-photoshop',
            alt: 'Plan de travail dans photoshop de la maquette web de Bamir',
            src: BamirArtboard,
        },
    ],
    description: 'Cette maquette web fut créée dans le cadre de mon deuxième cours de web. Je devais créer une entreprise fictive sur le thème imposé de traiteur indien. J\'avais également un site web sur lequel m\'inspirer ainsi qu\'une image de laquelle je devais tirer ma palette de couleur. J\'ai eu à créer tous les éléments graphiques excepté les photos qui sont libre de droit.',
    logiciels: [
        'Photoshop',
        'Illustrator',
    ],
};