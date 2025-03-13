import {Gender} from "@/common/dto/enum/Genre";
import {Relation} from "@/common/dto/enum/Relation";
import {ChatPref} from "@/common/dto/enum/ChatPref";
import {PersonCard} from "@/components/person_card/PersonCard";

export class DailyMatch extends PersonCard {
    pairId?: string
    likedYou?: boolean
    likedByYou?: boolean
}

export const testInstanceDailyMatch : DailyMatch = {
    id: 23,
    pairId: "iuuuomnko",
    likedYou: false,
    likedByYou: false,
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

    picInfos: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
}