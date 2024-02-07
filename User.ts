import { Search } from "./Search";
import { Address } from './Address';
import { Booking } from './Booking';
import { Movie } from "./Movie";
import { Shows } from "./Shows";
export class User {
    userId: number;
    searchObj: Search;
}

export class SystemMember extends User {
    account: Account;
    name: string;
    email: string;
    address: Address;
}

export class Member extends SystemMember {

    makeBooking(booking: Booking): Booking {
        return booking;
    }

    getBooking(): Array<Booking> {
        return [];
    }
}

export class Admin extends SystemMember {
    addMovie(movie: Movie): boolean {
        return true;
    }

    addShow(show: Shows): boolean {
        return true;
    }
}

class Account {
    userName: string;
    password: string;
}

