import * as S from "./styles"
import Image, { StaticImageData } from "next/image"
import PlayButton from "../../assets/img/play_button.svg"

interface StudyRoomPropsType {
    thumbnail: string | StaticImageData,
    study_room_name: string,
    description: string,
}

const StudyRoom = ({ thumbnail, study_room_name, description }: StudyRoomPropsType) => {
    return (
        <S.RoomContainer>
            <S.HoverRoomContainer className="items">
                <S.Title>{study_room_name}</S.Title>
                <S.Description>{description}</S.Description>
                <S.PlayButton>
                    <Image src={PlayButton} alt="play button"></Image>
                </S.PlayButton>
            </S.HoverRoomContainer>
            <Image src={thumbnail} alt="thumbnail" width={400} height={230} className="thumbnail"></Image>
        </S.RoomContainer>
    )
}

export default StudyRoom