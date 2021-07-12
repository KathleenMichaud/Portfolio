// -------- IMPORTS -------- //
// IMAGES NÉCESSAIRES POUR SECTION PHOTOS
import PhotosPreview from '../../assets/images/projects/photos/project_preview_photos.png';
import PhotosPreviewOriginal from '../../assets/images/projects/photos/project_preview_photos_hover.png';

import Noel1 from '../../assets/images/projects/photos/noel/christmas_birdsview.JPG';
import Noel2 from '../../assets/images/projects/photos/noel/christmas_birdsview_2.JPG';
import NoelComp from '../../assets/images/projects/photos/noel/noel_comparaison.jpg';

import Coffee from '../../assets/images/projects/photos/texture_organique/coffee.jpg';
import Watch from '../../assets/images/projects/photos/texture_organique/watch.jpg';
import WatchComp from '../../assets/images/projects/photos/texture_organique/watch_comparaison.jpg';

import Pizza1 from '../../assets/images/projects/photos/pizza/pizza.jpg';
import Pizza2 from '../../assets/images/projects/photos/pizza/pizza_italienne.jpg';

import Fruits from '../../assets/images/projects/photos/fruits/fruits.jpg';
import FruitsComp from '../../assets/images/projects/photos/fruits/fruits_comparaison.jpg';

// IMAGES NÉCESSAIRES POUR SECTION ILLUSTRATIONS
import IllustrationsPreview from '../../assets/images/projects/illustrations/project_preview_illustrations.png';
import IllustrationsPreviewOriginal from '../../assets/images/projects/illustrations/project_preview_illustrations_hover.png';

import Nurse from '../../assets/images/projects/illustrations/infirmiere/nurse.png';
import NurseAi from '../../assets/images/projects/illustrations/infirmiere/illustrator.JPG';
import NurseWaterColor from '../../assets/images/projects/illustrations/infirmiere/watercolor.jpg';
import NurseArtboard from '../../assets/images/projects/illustrations/infirmiere/plan_de_travail.JPG';

import Moonlight from '../../assets/images/projects/illustrations/skullhead/moonlight.png';
import MoonlightDessin from '../../assets/images/projects/illustrations/skullhead/dessin.jpg';
import MoonlightAi from '../../assets/images/projects/illustrations/skullhead/illustrator.JPG';
import MoonlightPsd from '../../assets/images/projects/illustrations/skullhead/photoshop.JPG';

import Coco from '../../assets/images/projects/illustrations/oeuf_pacques/pacques.png';
import CocoLines from '../../assets/images/projects/illustrations/oeuf_pacques/traits.jpg';
import CocoAi from '../../assets/images/projects/illustrations/oeuf_pacques/illustrator.JPG';

// IMAGES NÉCESSAIRES POUR SECTION DESIGN
import DesignPreview from '../../assets/images/projects/design/project_preview_design.png';
import DesignPreviewOriginal from '../../assets/images/projects/design/project_preview_design_hover.png';

import Brustik from '../../assets/images/projects/design/brustik/brustik.jpg';
import Brustik1 from '../../assets/images/projects/design/brustik/page_2.jpg';
import Brustik2 from '../../assets/images/projects/design/brustik/page_3.jpg';
import BrustikEl from '../../assets/images/projects/design/brustik/elements.JPG';
import BrustikArtboard from '../../assets/images/projects/design/brustik/plan_de_travail.JPG';
import BrustikSpot from '../../assets/images/projects/design/brustik/spotlights.jpg';

import Ori from '../../assets/images/projects/design/origamimani/origamimanie.jpg';
import OriArtboard from '../../assets/images/projects/design/origamimani/plan_de_travail.JPG';
import OriTexture from '../../assets/images/projects/design/origamimani/texture.jpg';
import OriTitle from '../../assets/images/projects/design/origamimani/title.jpg';

import Bamir from '../../assets/images/projects/design/bamir/bamir.jpg';
import BamirEl from '../../assets/images/projects/design/bamir/elements.JPG';
import BamirArtboard from '../../assets/images/projects/design/bamir/plan_de_travail.JPG';

import Playsam from '../../assets/images/projects/design/playsam/playsam.jpg';
import PlaysamArtboard from '../../assets/images/projects/design/playsam/plan_de_travail.JPG';
import PlaysamTexture from '../../assets/images/projects/design/playsam/texture.jpg';
// -------- END IMPORTS -------- //

// LISTE DES SECTIONS ET DES PROJECTS
export const ProjectsData = [
    // -------- SECTION GRAPHIC DESIGN -------- //
    { 
        id: 'graphic-design',
        categoryNb: 1,
        title: 'Design graphique',
        quote: {
            quote: 'Stop going for the easy buck and start producing something with your life. Create, instead of living off the buying and selling of others.', 
            person: 'Carl Fox', 
            cite: 'Wall Street ', 
            year: '1987',
        },
        thumbnail: {
            original: DesignPreviewOriginal,
            overlay: DesignPreview,
        },
        projects : [  // PROJECTS GRAPHIC DESIGN
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
        ] // END PROJECTS GRAPHIC DESIGN
    },
    // -------- SECTION PHOTOS -------- //
    {
        id: 'photos',
        title: 'Photos',
        categoryNb: 2,
        thumbnail: {
            original: PhotosPreviewOriginal,
            overlay: PhotosPreview,
        },
        quote: {
            quote: 'Paintings are so passe. I call this a snapshot.', 
            person: 'Grug', 
            cite: 'The Croods', 
            year: '2013',
        },
        projects : [ // PROJECTS PHOTOS
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
        ] // END PROJECTS PHOTOS
    },
    // -------- SECTION ILLUSTRATIONS -------- //
    {
        id: 'illustrations',
        title: 'Illustrations',
        categoryNb: 3,
        thumbnail: {
            original: IllustrationsPreviewOriginal,
            overlay: IllustrationsPreview,
        },
        quote: {
            quote: 'Jack, I want you to draw me like one of your French girls.', 
            person: 'Rose DeWitt Bukater', 
            cite: 'Titanic', 
            year: '1997',
        },
        projects: [ // Projects illustrations
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
        ] // END PROJECTS ILLUSTRATIONS
    }
];