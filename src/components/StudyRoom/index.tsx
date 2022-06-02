import * as S from "./styles"
import Image from "next/image"
import { useEffect, useState } from "react"
import PlayButton from "../../assets/img/play_button.svg"

interface StudyRoomPropsType {
    thumbnail: string | StaticImageData,
    study_room_name: string,
    description: string,
}

const  StudyRoom = ({thumbnail, study_room_name, description}: StudyRoomPropsType) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const [time, setTime] = useState<NodeJS.Timeout>()

    const onMouseHover = () => {
        const time = setTimeout(() => {
            setIsHover(true)
        }, 300)
        setTime(time)
    }

    const onMouseNotHover = () => {
        clearTimeout(time)
        setIsHover(false)
    }

    return (
        <S.RoomContainer isHover={isHover} onMouseEnter={onMouseHover} onMouseLeave={onMouseNotHover}>
            { isHover ?  
            <S.HoverRoomContainer>
                <S.Title>{study_room_name}</S.Title>
                <S.Description>{description}</S.Description>
                <S.PlayButton>
                    <Image src={PlayButton} alt="play button"></Image>
                </S.PlayButton>
            </S.HoverRoomContainer>: 
            <Image src={thumbnail} alt="thumbnail"></Image> }
        </S.RoomContainer>
    )
}

export default StudyRoom