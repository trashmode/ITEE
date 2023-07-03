export class User {
    id: string;
    admin: boolean;
    constructor(id: string, admin: boolean) {
        this.id = id;
        this.admin = admin;
    }
}