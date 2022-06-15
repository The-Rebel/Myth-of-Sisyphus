import * as S from "./styles"
import ReactPlayer from "react-player"
import { useRecoilValue } from "recoil"
import { studyRoomState } from "../../recoil"

import { EssayList } from "../../constant"
import Essay from "../../components/Essay"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Carousel from "nuka-carousel";
import ResponsivePlayer from "../../components/ResponsivePlayer"

import Image from "next/image"
import {NextArrow, PrevArrow} from "../../assets/md"


export interface EssayListType {
    user_id?: number,
    nickname: string,
    title: string,
    content: string,
}

const InStudyRoomContainer = () => {
    const studyRoom = useRecoilValue(studyRoomState)
    const router = useRouter()

    const [prevArrow, setPrevArrow] = useState<boolean>(false)
    const [nextArrow, setNextArrow] = useState<boolean>(true)

    // useEffect(() => {
    //     // 에세이 목록 요청 받기.
    // })

    const onWriteEssay = () => {
        router.push("studyroom/write")
    }

    const changSlide = (index:number) => {
        setPrevArrow(true)
        setNextArrow(true)
        if (index === 0)
            setPrevArrow(false)
        if (index === 1)
            setNextArrow(false)
    }

    return (
        <S.StudyRoomContainer>
            <S.ContentsContainer>
                <Carousel 
                    afterSlide={changSlide}
                    dragging={false}
                    renderCenterLeftControls={({ previousSlide }) => (
                        <div onClick={previousSlide}>
                          { prevArrow && <Image src={PrevArrow} alt="previous arrow" /> }
                        </div>
                      )}
                      renderCenterRightControls={({ nextSlide }) => (
                        <div onClick={nextSlide}>
                          { nextArrow && <Image src={NextArrow} alt="next arrow" /> }
                        </div>
                      )} >
                    <ResponsivePlayer url={studyRoom.video_url}/>
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
                </Carousel>
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