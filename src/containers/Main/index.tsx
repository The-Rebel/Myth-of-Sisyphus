import {StudyRoomList} from "../../constant";
import * as S from "./styles";
import StudyRoom from "../../components/StudyRoom";
import {StaticImageData} from "next/image";
import { useRouter } from "next/router"
import { useState } from "react";

import { useRecoilValue } from "recoil"
import { studyRoomState } from "../../recoil"
import ReactPlayer from "react-player"

export interface StudyRoomResType {
    study_room_id: number;
    user_id?: number;
    nickname: string;
    video_url: string;
    thumbnail: string | StaticImageData;
    study_room_name: string;
    description: string;
}

const MainContainer = () => {
    const router = useRouter()
    const [isHover, setIsHover] = useState<boolean>(false)
    const studyRoom = useRecoilValue(studyRoomState)

    const onCreateRoom = () => {
        router.push("/create")
    }

    return (
        <S.MainContainer>
            <S.PreviewContainer isHover={isHover}>
                <ReactPlayer url={studyRoom.video_url} controls={true} width={942} height={530} /> 
                <S.InfoContainer>
                    <S.Title>dknld</S.Title>
                    <div>dknld</div>
                    <div>dknld</div>
                </S.InfoContainer>
            </S.PreviewContainer>   
            <S.StudyRoomContainer>
                <S.Label>스터디룸</S.Label>
                <S.Outer>
                    <S.Rooms>
                        {StudyRoomList.map((room) => (
                            <StudyRoom
                                key={room.study_room_id}
                                study_room_id={room.study_room_id}
                                nickname={room.nickname}
                                video_url={room.video_url}
                                thumbnail={room.thumbnail}
                                study_room_name={room.study_room_name}
                                description={room.description}
                                isHover={setIsHover}
                            ></StudyRoom>
                        ))}
                    </S.Rooms>
                {/* <button onClick={onCreateRoom}>방생성하기</button>*/}
                </S.Outer>
            </S.StudyRoomContainer>
        </S.MainContainer>
    );
};

export default MainContainer;
