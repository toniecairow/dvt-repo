import { Album } from '../album/album';
import { Artist } from '../artist/artist';

export class Track {
    id?: number;
    link?: string;
    title?: string;
    title_short?: string;
    duration?: number;
    album?: Album;
    artist?: Artist;
}
