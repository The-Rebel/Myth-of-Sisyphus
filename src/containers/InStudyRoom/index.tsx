import * as S from "./styles"
import ReactPlayer from "react-player"
import { useRecoilValue } from "recoil"
import { studyRoomState } from "../../recoil"

import { EssayList } from "../../constant"
import Essay from "../../components/Essay"
import { useEffect } from "react"
import { useRouter } from "next/router"


export interface EssayListType {
    user_id?: number,
    nickname: string,
    title: string,
    content: string,
}

const InStudyRoomContainer = () => {
    const studyRoom = useRecoilValue(studyRoomState)
    const router = useRouter()

    // useEffect(() => {
    //     // 에세이 목록 요청 받기.
    // })

    const onWriteEssay = () => {
        router.push("studyroom/write")
    }

    return (
        <S.StudyRoomContainer>
            <S.ContentsContainer>
                <S.Inner>
                    <S.VideoContainer>
                        <ReactPlayer url={studyRoom.video_url} controls={true} width={1200} height={674}/>
                    </S.VideoContainer>
                    <S.InfoContainer>
                        <S.TitleAndNickname>
                            <S.Title>{studyRoom.study_room_name}</S.Title>
                            <S.Nickname>
                                {studyRoom.nickname}
                                <S.Introduce>님의 스터디룸</S.Introduce>
                            </S.Nickname>
                        </S.TitleAndNickname>
                        <S.Description>{studyRoom.description}</S.Description>
                    </S.InfoContainer> 
                </S.Inner>
                <S.Inner>
                    <S.EssayLabel>
                        에세이 목록
                        <S.CreateButton onClick={onWriteEssay}>생성하귀</S.CreateButton>
                    </S.EssayLabel>
                <S.EssayContainer>
                    { EssayList.map((essay) => (
                        <Essay 
                            key={essay.user_id} 
                            nickname={essay.nickname} 
                            title={essay.title} 
                            content={essay.content}/>
                    )) }
                </S.EssayContainer>
                </S.Inner>
            </S.ContentsContainer>
        </S.StudyRoomContainer>
    )
}

export default InStudyRoomContainer