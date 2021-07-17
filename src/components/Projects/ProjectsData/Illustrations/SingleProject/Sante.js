import Nurse from '../../../../../assets/images/projects/illustrations/infirmiere/nurse.png';
import NurseAi from '../../../../../assets/images/projects/illustrations/infirmiere/illustrator.JPG';
import NurseWaterColor from '../../../../../assets/images/projects/illustrations/infirmiere/watercolor.jpg';
import NurseArtboard from '../../../../../assets/images/projects/illustrations/infirmiere/plan_de_travail.JPG';

export const sante = {
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
};