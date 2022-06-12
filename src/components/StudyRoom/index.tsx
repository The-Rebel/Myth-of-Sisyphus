import * as S from "./styles"
import Image from "next/image"
import PlayButton from "../../assets/img/play_button.svg"
import { StudyRoomResType } from "../../containers/Main"
import { useSetRecoilState } from "recoil"
import { studyRoomState } from "../../recoil"
import { useRouter } from "next/router"
import { useState } from "react"


interface StudyRoomPropsType extends StudyRoomResType {
    setIsClick: React.Dispatch<React.SetStateAction<boolean>>
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

const StudyRoom = ({ study_room_id, nickname, video_url, thumbnail, study_room_name, description, setIsClick, setIsPlaying }: StudyRoomPropsType) => {
    const setStudyRoom = useSetRecoilState(studyRoomState)
    const router = useRouter()
    const [isClick1, setIsClick1] = useState<boolean>(false)

    const onWatchVideo = () => {
        router.push("studyroom")
    }

    const onThumbClick = () => {
        const data = {
            study_room_id: study_room_id,
            nickname: nickname,
            video_url: video_url,
            study_room_name: study_room_name,
            description: description
        }
        setStudyRoom(data)
        setIsClick(true)
        setIsPlaying(true)

        setIsClick1(true)
    }

    const onThumbLeave = () => {
        setIsClick(false)
        setIsPlaying(false)

        setIsClick1(false)
    }

    return (
        <S.RoomContainer 
            isClick={isClick1}
            onClick={onThumbClick} 
            onMouseLeave={onThumbLeave} >
            <S.HoverRoomContainer className="items">
                {/* <S.Title>{study_room_name}</S.Title> */}
                {/* <S.Description>{description}</S.Description> */}
                <S.PlayButton>
                    <Image src={PlayButton} alt="play button" onClick={onWatchVideo}></Image>
                </S.PlayButton>
            </S.HoverRoomContainer>
            <Image src={thumbnail} alt="thumbnail" width={400} height={230} className="thumbnail"></Image>
        </S.RoomContainer>
    )
}

export default StudyRoom