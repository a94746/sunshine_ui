import {ChatPref} from "@/common/dto/enum/ChatPref";
import {Gender} from "@/common/dto/enum/Genre";
import {Relation} from "@/common/dto/enum/Relation";

export class MyFilter {
    ageFrom?: number
    ageTo?: number

    relationsWithGenders: Map<Relation, Map<Gender, boolean>> = new Map()
    chatPrefs: Map<ChatPref, boolean> = new Map()
}