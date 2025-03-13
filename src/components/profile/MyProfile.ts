import {PersonCard} from "../person_card/PersonCard";
import {Language} from "@/common/dto/enum/Language";
import {MyFilter} from "@/components/profile/MyFilter";
import {Gender} from "@/common/dto/enum/Genre";
import {Relation} from "@/common/dto/enum/Relation";
import {ChatPref} from "@/common/dto/enum/ChatPref";

export class MyProfile extends PersonCard {
    email?: string
    bday?: string
    lang?: Language
    locationId?: number
    rating?: number
    actualMatchesNum?: number
    prem?: boolean

    filter?: MyFilter

    contacts: Contact[] = []
}

export const testInstanceMyProfile : MyProfile = {
    email: "test@test.com",
    bday: "2025-03-07T13:30:44.6948822",
    locationId: 1,
    rating: 57,
    actualMatchesNum: 3,
    prem: false,

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
    ]
}