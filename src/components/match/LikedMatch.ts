import {Gender} from "@/common/dto/enum/Genre";
import {Relation} from "@/common/dto/enum/Relation";
import {ChatPref} from "@/common/dto/enum/ChatPref";
import {PersonCard} from "@/components/person_card/PersonCard";

export class LikedMatch extends PersonCard {
    contacts: Contact[] = []
}

export const testInstanceLikedMatch : LikedMatch = {
    id: 23,
    name: "Petya",
    age: 23,
    description: "Я Петя, я х",
    gender: Gender.MALE,
    message: "Это тебе личное сообщение1111111 ssdddddddddddddddd dddddddddddddddddd dddddddddddddddddddddddddd " +
        "ddddddddddddddddddddd dddddddddddddddddddd ddddddddddddddddd ddddddddddddddddddddddddd ddddddddddddddd d" +
        "dddddddddddddddddd ddddddddddddddddddddddd ddddddddddddddddddddddddddd rrrrrrrrrrrrrrr rrrrrrrrrrr" +
        "d d ddddddddddddddddddddddddddddddddddddddddddddd qqqqqqqqqq",

    relations: [Relation.ACQUAINTANCE, Relation.FRIENDSHIP],
    chatPrefs: [ChatPref.ONLINE, ChatPref.LIFE],

    picInfos: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
    contacts: [{id: 1, key: "tg", value: "@qweqwe"}, {id: 2, key: "inst", value: "@121212qweqwe"}
        , {id: 2, key: "inst", value: "@121212qweqwe"}
        , {id: 2, key: "inst", value: "@121212qweqwe"}
        , {id: 2, key: "inst", value: "@121212qweqwe"}
        , {id: 2, key: "inst", value: "@121212qweqwe"}
        , {id: 2, key: "inst", value: "@121212qweqwe"}
        , {id: 2, key: "inst", value: "@121212qweqwe"}
        , {id: 2, key: "inst", value: "@121212qweqwe"}
        , {id: 2, key: "inst", value: "@121212qweqwe"}
        , {id: 2, key: "inst", value: "@121212qweqwe"}
        , {id: 2, key: "inst", value: "@121212qweqwe"}
        , {id: 2, key: "inst", value: "@121212qweqwe"}
        , {id: 2, key: "inst", value: "@121212qweqwe"}
        , {id: 2, key: "inst", value: "@121212qweqwe"}

    ]
}