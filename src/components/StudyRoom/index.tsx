import * as S from "./styles"
import Image from "next/image"

interface StudyRoomPropsType {
    thumbnail: string | StaticImageData,
    study_room_name: string,
    description: string,
}

const  StudyRoom = ({thumbnail, study_room_name, description}: StudyRoomPropsType) => {
    return (
        <S.RoomContainer>
            <Image src={thumbnail} alt="thumbnail"></Image>
        </S.RoomContainer>
    )
}

export default StudyRoom