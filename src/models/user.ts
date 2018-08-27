export class User {
    id: number;
    name: string;
    email: string;
    position:number;
    points:number;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}