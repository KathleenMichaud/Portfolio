import { origamimani } from './SingleProject/Origamimani';
import { playsam } from './SingleProject/Playsam';
import { elements } from './SingleProject/Elements';
import { tictac } from './SingleProject/Tictac';
import { hollywood } from './SingleProject/Hollywood';
import { kino } from './SingleProject/Kino';

// Affiche en ordre de haut en bas
// À faire attention : aucun id ne doit être pareil
export const designs = [
    {
        id: 'graphic-design-6',
        ...tictac,
    },
    {
        id: 'graphic-design-7',
        ...hollywood,
    },
    {
        id: 'graphic-design-8',
        ...kino,
    },
    {
        id: 'graphic-design-5',
        ...elements
    },
    {
        id: 'graphic-design-2',
        ...origamimani,
    },
    {
        id: 'graphic-design-4',
        ...playsam
    },
];