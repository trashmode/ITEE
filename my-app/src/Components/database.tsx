import type { User } from "./user";
import type { Session } from "./sessions";
import type { Room } from "./room";
class database {
    private user: Map<String, User>;
    private room: Map<String, Room>;
    constructor() {
        this.user = new Map<String, User>;
        this.room = new Map<String, Room>;
    }

    addUser(u: User): void {
        this.user.set(u.id, u);
    }

    getUser(id: String) {
        return this.user.get(id);
    }

    addRoom(r: Room): void {
        this.room.set(r.id, r);
    }

    getRoom(id: String) {
        return this.room.get(id);
    }
}