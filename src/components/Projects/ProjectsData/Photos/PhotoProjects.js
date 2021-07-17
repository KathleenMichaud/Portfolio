import { textures } from './SingleProject/Textures';
import { pizza } from './SingleProject/Pizza';
import { dejeuner } from './SingleProject/Dejeuner';
import { noel } from './SingleProject/Noel';

// Affiche en ordre de haut en bas
// À faire attention : aucun id ne doit être pareil
export const photos = [
    {
        id: 'photos-2',
        ...textures,
    },
    {
        id: 'photos-3',
        ...pizza,
    },
    {
        id: 'photos-4',
        ...dejeuner,
    },
    { 
        id: 'photos-1',
        ...noel,
    },
]