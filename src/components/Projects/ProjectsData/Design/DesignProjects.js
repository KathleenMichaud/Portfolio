import Brustik from '../../../../assets/images/projects/design/brustik/brustik.jpg';
import Brustik1 from '../../../../assets/images/projects/design/brustik/page_2.jpg';
import Brustik2 from '../../../../assets/images/projects/design/brustik/page_3.jpg';
import BrustikEl from '../../../../assets/images/projects/design/brustik/elements.JPG';
import BrustikArtboard from '../../../../assets/images/projects/design/brustik/plan_de_travail.JPG';
import BrustikSpot from '../../../../assets/images/projects/design/brustik/spotlights.jpg';

import Ori from '../../../../assets/images/projects/design/origamimani/origamimanie.jpg';
import OriArtboard from '../../../../assets/images/projects/design/origamimani/plan_de_travail.JPG';
import OriTexture from '../../../../assets/images/projects/design/origamimani/texture.jpg';
import OriTitle from '../../../../assets/images/projects/design/origamimani/title.jpg';

import Bamir from '../../../../assets/images/projects/design/bamir/bamir.jpg';
import BamirEl from '../../../../assets/images/projects/design/bamir/elements.JPG';
import BamirArtboard from '../../../../assets/images/projects/design/bamir/plan_de_travail.JPG';

import Playsam from '../../../../assets/images/projects/design/playsam/playsam.jpg';
import PlaysamArtboard from '../../../../assets/images/projects/design/playsam/plan_de_travail.JPG';
import PlaysamTexture from '../../../../assets/images/projects/design/playsam/texture.jpg';

export const designs = [
    {
        id: 'graphic-design-1',
        name: 'Brustik',
        date: 'Novembre 2020',
        images: [
            {
                key: 'brustik-maquette-un',
                alt: 'Page un d\'une maquette web d\'un site fictionnel de microbrasserie',
                src: Brustik, 
            },
            {
                key: 'brustik-maquette-deux',
                alt: 'Page deux d\'une maquette web d\'un site fictionnel de microbrasserie',
                src: Brustik1, 
            },
            {
                key: 'brustik-maquette-trois',
                alt: 'Page trois d\'une maquette web d\'un site fictionnel de microbrasserie',
                src: Brustik2, 
            },
            {
                key: 'brustik-maquette-elements',
                alt: 'Divers éléments vectoriels utilisés pour la maquette Brustik',
                src: BrustikEl, 
            },
            {
                key: 'brustik-maquette-photoshop',
                alt: 'Plan de travail dans photoshop de la première maquette du site Brustik',
                src: BrustikArtboard, 
            },
            {
                key: 'brustik-maquette-spotlights',
                alt: 'Spotlights installés dans un mini studio maison avec une bière de microbrasserie sur une table',
                src: BrustikSpot, 
            },
        ],
        description: 'Cette maquette web est ma première et ma favorite jusqu\'à maintenant. J\'ai dû la créer pour mon cours de design. Le devis demandait à ce que les photos soient effectuées par l\'étudiant ainsi que le logo/nom de l\'entreprise fictive. Le design dans son entièreté ainsi que les illustrations sont de moi également.',
        logiciels: [
            'Photoshop',
            'Illustrator',
            'Canon 6D Mark II',
            'Spotlights',
        ],
    },
    {
        id: 'graphic-design-2',
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
    },
    {
        id: 'graphic-design-3',
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
    },
    {
        id: 'graphic-design-4',
        name: 'PlaySam',
        date: 'Mars 2021',
        images: [
            {
                key: 'img-playsam-poster',
                alt: 'affiche pour des jouets scandinave',
                src: Playsam,
            },
            {
                key: 'img-playsam-texture',
                alt: 'Texture en arrière plan de l\'affiche, composée des lettres du titre',
                src: PlaysamTexture,
            },
            {
                key: 'img-playsam-photoshop',
                alt: 'Plan de travail dans photoshop de Playsam',
                src: PlaysamArtboard,
            },
        ],
        description: 'J\'ai créé cette affiche dans le cadre de mon deuxième cours de design. Le client était un designer de jouet scandinave. Le devis stipulais qu\'il devait y avoir au moins une image de jouet. Le dynamisme était la théorie que nous devions mettre de l\'avant.',
        logiciels: [
            'Photoshop',
            'Illustrator',
        ],
    },
]