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
    default: {
        video_url: "https://www.youtube.com/watch?v=5M47lGZyCqI&list=PLzjEyzTnJeRJKITmeKV_WPElY7coZrs-t&index=2&ab_channel=SEMICOLON"
    } as studyRoomType
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