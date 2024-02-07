import { Genre } from '../BookMyShowSystemDesign/Utils';
import { Shows } from '../BookMyShowSystemDesign/Shows';
export class Movie {
    movieName: string;
    movieId: number;
    durationInMins: number;
    languages: string;
    genre: Genre;
    releaseDate: Date;
    cityShowMap: CityShows;
};

interface CityShows {
    [cityName: string]: Array<Shows>;
}