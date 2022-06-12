import * as S from "./styles"
import Image from "next/image"
import PlayButton from "../../assets/img/play_button.svg"
import { StudyRoomResType } from "../../containers/Main"
import { useSetRecoilState } from "recoil"
import { studyRoomState } from "../../recoil"
import { useRouter } from "next/router"
import { useState } from "react"


interface StudyRoomPropsType extends StudyRoomResType {
    isHover: React.Dispatch<React.SetStateAction<boolean>>
}

const StudyRoom = ({ study_room_id, nickname, video_url, thumbnail, study_room_name, description, isHover }: StudyRoomPropsType) => {
    const setStudyRoom = useSetRecoilState(studyRoomState)
    const [timer, setTimer] = useState<any>()
    const router = useRouter()

    const onWatchVideo = () => {
        const data = {
            study_room_id: study_room_id,
            nickname: nickname,
            video_url: video_url,
            study_room_name: study_room_name,
            description: description
        }
        setStudyRoom(data)

        router.push("studyroom")
    }

    const onEnter = () => {
        isHover(true)
    }

    const onLeave = () => {
        clearTimeout(timer)
        isHover(false)  
    }

    return (
        <S.RoomContainer 
            onMouseEnter={() => setTimer(setTimeout(onEnter, 400))} 
            onMouseLeave={onLeave} >
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