export class Payment {
    amount: number;
    paymentDate: Date;
    transactionId: number;
    paymentStatus: PaymentStatus;
}

enum PaymentStatus {
    UNPAID = 0,
    PENDING = 1,
    COMPLETED = 2,
    DECLINED = 3,
    CANCELLED = 4,
    REFUNDED = 5
}