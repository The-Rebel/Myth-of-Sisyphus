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