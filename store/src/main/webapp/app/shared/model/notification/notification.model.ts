import { Moment } from 'moment';

export interface INotification {
    id?: number;
    date?: Moment;
    details?: string;
}

export class Notification implements INotification {
    constructor(public id?: number, public date?: Moment, public details?: string) {}
}
