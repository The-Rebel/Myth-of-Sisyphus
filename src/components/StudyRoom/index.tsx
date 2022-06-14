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
    const [isClick1, setIsClick1] = useState<boolean>(false) // 각 스터디룸의 클릭 관리.
    const [isHover, setIsHover] = useState<boolean>(false)

    const onEnterStudyRoom = () => {
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
        setIsHover(false)
    }

    const onThumbLeave = () => {
        setIsClick(false)
        setIsPlaying(false)
        setIsClick1(false)
        setIsHover(false)
    } 

    return (
        <S.RoomContainer 
            isClick={isClick1}
            isHover={isHover}
            onClick={onThumbClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={onThumbLeave}>
            <S.OpRoomContainer className="clicked">
                <S.PlayButton>
                    <Image src={PlayButton} alt="play button" onClick={onEnterStudyRoom}></Image>
                </S.PlayButton>
            </S.OpRoomContainer>
            <S.OpRoomContainer className="hovered">
                <S.Label>클릭해서 미리보기 열기</S.Label>
            </S.OpRoomContainer>
            <Image src={thumbnail} alt="thumbnail" width={400} height={230}></Image>
        </S.RoomContainer>
    )
}

export default StudyRoom