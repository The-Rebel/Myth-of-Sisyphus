import {StudyRoomList} from "../../constant";
import * as S from "./styles";
import StudyRoom from "../../components/StudyRoom";
import {StaticImageData} from "next/image";

export interface StudyRoomPropsType {
    study_room_id: number;
    user_id?: number;
    nickname: string;
    video_url: string;
    thumbnail: string | StaticImageData;
    study_room_name: string;
    description: string;
}

const MainContainer = () => {
    return (
        <S.MainContainer>
            <S.RoomContainerName top="">내가 시청하던 영상</S.RoomContainerName>
            <S.Outer>
                <S.RoomsContainer>
                    {StudyRoomList.map((room) => (
                        <StudyRoom
                            key={room.study_room_id}
                            study_room_id={room.study_room_id}
                            nickname={room.nickname}
                            video_url={room.video_url}
                            thumbnail={room.thumbnail}
                            study_room_name={room.study_room_name}
                            description={room.description}
                        ></StudyRoom>
                    ))}
                </S.RoomsContainer>
            </S.Outer>
            <S.RoomContainerName top="90px">
                내가 시청하던 영상
            </S.RoomContainerName>
            <S.Outer>
                <S.RoomsContainer>
                    {StudyRoomList.map((room) => (
                        <StudyRoom
                            key={room.study_room_id}
                            study_room_id={room.study_room_id}
                            nickname={room.nickname}
                            video_url={room.video_url}
                            thumbnail={room.thumbnail}
                            study_room_name={room.study_room_name}
                            description={room.description}
                        ></StudyRoom>
                    ))}
                </S.RoomsContainer>
            </S.Outer>
            <S.RoomContainerName top="90px">
                내가 시청하던 영상
            </S.RoomContainerName>
            <S.Outer>
                <S.RoomsContainer>
                    {StudyRoomList.map((room) => (
                        <StudyRoom
                            key={room.study_room_id}
                            study_room_id={room.study_room_id}
                            nickname={room.nickname}
                            video_url={room.video_url}
                            thumbnail={room.thumbnail}
                            study_room_name={room.study_room_name}
                            description={room.description}
                        ></StudyRoom>
                    ))}
                </S.RoomsContainer>
            </S.Outer>
        </S.MainContainer>
    );
};

export default MainContainer;
