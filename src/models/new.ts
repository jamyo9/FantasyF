import { User } from "./user";

export class New {
    id: number;
    date: Date;
    text: string;
    writter: User;

    constructor(text: string, writter: User) {
        this.text = text;
        this.writter = writter;
        this.id = 0;
        this.date = new Date();
    }
}