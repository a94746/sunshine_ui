import {Relation} from "@/common/dto/enum/Relation";
import {Gender} from "@/common/dto/enum/Genre";
import {ChatPref} from "@/common/dto/enum/ChatPref";

export abstract class PersonCard {
    id?: number
    name?: string
    age?: number
    description?: string
    message?: string = undefined
    gender?: Gender

    relations: Relation[] = []
    chatPrefs: ChatPref[] = []

    picInfos: PicInfo[] = []
}