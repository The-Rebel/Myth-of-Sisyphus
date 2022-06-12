import {StudyRoomList} from "../../constant";
import * as S from "./styles";
import StudyRoom from "../../components/StudyRoom";
import {StaticImageData} from "next/image";
import { useRouter } from "next/router"

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
    const router = useRouter()

    const onCreateRoom = () => {
        router.push("/create")
    }

    return (
        <S.MainContainer>
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
                            ></StudyRoom>
                        ))}
                    </S.Rooms>
                <button onClick={onCreateRoom}>방생성하기</button> {/*ㅇ내우ㅏㄹ나ㅣ루ㅏ니루ㅏㅣㄴ루ㅏㅣㄴㅇ루ㅏㅣㄴ우라ㅣ눙라ㅣㄴ우라ㅣㅜ나ㅣ루ㅏ니뤃낟후ㅏㅣㅡ햐ㅐ주햐ㅐ누하ㅣ두햐ㅐ두아ㅣㅠ 자ㅠㅜㄱ듀ㅑㅐ */}
                </S.Outer>
            </S.StudyRoomContainer>
        </S.MainContainer>
    );
};

export default MainContainer;
