import { Player } from "./player";
import { User } from "./user";

export interface Offer {
    id: number;
    player: Player;
    offer: number;
    buyer: User;
}