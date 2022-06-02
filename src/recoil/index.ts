import { atom } from "recoil";

interface studyRoomType {
    study_room_id: number,
    nickname: string,
    video_url: string,
    study_room_name: string,
    description: string
}

export const studyRoomState = atom({
    key: "studyRoomState",
    default: {} as studyRoomType
})

interface essayType {
    nickname: string, 
    title: string,
    content: string
}

export const essayState = atom({
    key: "essayState",
    default: {} as essayType
})