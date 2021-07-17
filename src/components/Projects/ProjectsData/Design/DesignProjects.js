import { brustik } from './SingleProject/Brustik';
import { origamimani } from './SingleProject/Origamimani';
import { bamir } from './SingleProject/Bamir';
import { playsam } from './SingleProject/Playsam';
import { elements } from './SingleProject/Elements';
import { tictac } from './SingleProject/Tictac';

// Affiche en ordre de haut en bas
// À faire attention : aucun id ne doit être pareil
export const designs = [
    {
        id: 'graphic-design-5',
        ...elements
    },
    {
        id: 'graphic-design-6',
        ...tictac,
    },
    {
        id: 'graphic-design-1',
        ...brustik,
    },
    {
        id: 'graphic-design-2',
        ...origamimani,
    },
    {
        id: 'graphic-design-3',
        ...bamir
    },
    {
        id: 'graphic-design-4',
        ...playsam
    },
];