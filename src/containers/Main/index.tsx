import { StudyRoomList } from "../../constant"
import * as S from "./styles"
import StudyRoom from "../../components/StudyRoom"

const MainContainer = () => {
    return (
        <S.MainContainer>
            <S.RoomContainerName top="">내가 시청하던 영상</S.RoomContainerName>
            <S.RoomsContainer>
                { StudyRoomList.map((room) => (
                    <StudyRoom 
                        key={room.study_room_id} 
                        thumbnail={room.thumbnail} 
                        study_room_name={room.study_room_name} 
                        description={room.description}></StudyRoom>
                )) }
            </S.RoomsContainer>
            <S.RoomContainerName top="90px">내가 시청하던 영상</S.RoomContainerName>
            <S.RoomsContainer>
                { StudyRoomList.map((room) => (
                        <StudyRoom 
                            key={room.study_room_id} 
                            thumbnail={room.thumbnail} 
                            study_room_name={room.study_room_name} 
                            description={room.description}></StudyRoom>
                    )) }
            </S.RoomsContainer>
            <S.RoomContainerName top="90px">내가 시청하던 영상</S.RoomContainerName>
            <S.RoomsContainer>
                { StudyRoomList.map((room) => (
                        <StudyRoom 
                            key={room.study_room_id} 
                            thumbnail={room.thumbnail} 
                            study_room_name={room.study_room_name} 
                            description={room.description}></StudyRoom>
                    )) }
            </S.RoomsContainer>
        </S.MainContainer>
    )
}

export default MainContainer