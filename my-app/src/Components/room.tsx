import { Session } from "./sessions";
export class Room {
    id: String;
    session: Session;
    constructor(r: Room) {
        this.id = r.id;
        this.session = r;
    }
}
