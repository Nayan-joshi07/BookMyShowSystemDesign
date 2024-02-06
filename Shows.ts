import { CinemaHall } from '../BookMyShowSystemDesign/CinemaHall';
import { Seat } from '../BookMyShowSystemDesign/Seat';
import { Movie } from '../BookMyShowSystemDesign/Movie';
export class Shows {
    showId: number;
    movie: Movie;
    startTime: Date;
    endTime: Date;
    cinemaHall: CinemaHall;
    seats: Array<Seat>;
}