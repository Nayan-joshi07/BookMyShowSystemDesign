import { Audi } from "./Audi";
import { Seat } from "./Seat";
import { Shows } from "./Shows";
import { Payment } from "./Payment";
import { Member } from "./User";

export class Booking {
    bookingId: string;
    bookingDate: Date;
    member: Member;
    show: Shows;
    audi: Audi;
    bookingStatus: BookingStatus;
    totalAmount: number;
    seats: Array<Seat>;
    paymentObj: Payment;
}

enum BookingStatus {
    REQUESTED = 0,
    PENDING = 1,
    CONFIRMED = 2,
    CANCELLED = 3
}