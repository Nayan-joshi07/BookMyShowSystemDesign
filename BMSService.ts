export class BMSService {
    cinemas: Array<CinemaHall> = [];
    getMovies(date: Date, city: string) { };
    getCinemaHall(city: string) { };

}

export class CinemaHall {
    cinemaHallId: number;
    cinemaHallName: string;
    address: Address;


}

export class Address {
    pinCode: number;
    street: string;
    city: string;
    state: string;
    country: string;
};

export class Audi {
    audiId: string;
    audiName: string;
    totalShows: number;
    shows: Array<Shows>;
}

export class Shows {
    showId: number;
    //movie : Movie;
    startTime: Date;
    endTime: Date;
    cinemaHall: CinemaHall;
    seats: Array<Seat>;
}

export class Seat {
    seatId: number;
    seatType: SeatType;
    //seatStatus : SeatStatus;
    price: number;
}

enum SeatType {
    DELUX = 0,
    ECONOMY = 1,
    VIP = 2,
    OTHER = 3
}

enum SeatStatus {
    AVAILABLE = 0,
    NOAVAILABLE = 1,
    OCCUPIED = 2
}