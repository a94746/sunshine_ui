import {Gender} from "@/common/dto/enum/Genre";
import {Relation} from "@/common/dto/enum/Relation";
import {ChatPref} from "@/common/dto/enum/ChatPref";

interface LikedMatch {
    id: number
    name: string
    age: number
    description: string
    gender: Gender
    message: string

    relations: Relation[]
    chatPrefs: ChatPref[]

    picInfos: PicInfo[]
    contacts: Contact[]
}

export const testInstanceLikedMatch : LikedMatch = {
    id: 23,
    name: "Petya",
    age: 23,
    description: "Я Петя, я хожу дружить",
    gender: Gender.MALE,
    message: "Это тебе личное сообщение",

    relations: [Relation.ACQUAINTANCE, Relation.FRIENDSHIP],
    chatPrefs: [ChatPref.ONLINE, ChatPref.LIFE],

    picInfos: [{id: 1}, {id: 1}],
    contacts: [{id: 1, key: "tg", value: "@qweqwe"}, {id: 2, key: "inst", value: "@121212qweqwe"}]
}