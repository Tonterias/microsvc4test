export interface IInvoice {
    id?: number;
    code?: string;
    details?: string;
}

export class Invoice implements IInvoice {
    constructor(public id?: number, public code?: string, public details?: string) {}
}
