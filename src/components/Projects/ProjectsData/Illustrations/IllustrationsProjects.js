import { moonlight } from './SingleProject/Moonlight';
import { sante } from './SingleProject/Sante';
import { paques } from './SingleProject/Paques';

// Affiche en ordre de haut en bas
// À faire attention : aucun id ne doit être pareil
export const illustrations = [
    {
        id: 'illustrations-1',
        ...moonlight,
    },
    {
        id: 'illustrations-2',
        ...sante
    },
    {
        id: 'illustrations-3',
        ...paques,

    },
];