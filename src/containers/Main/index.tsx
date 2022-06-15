import {StudyRoomList, RecStudyRoom} from "../../constant";
import * as S from "./styles";
import StudyRoom from "../../components/StudyRoom";
import {StaticImageData} from "next/image";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Image from "next/image";
import {NextArrow, PrevArrow} from "../../assets/md"

import { useRecoilValue } from "recoil"
import { studyRoomState } from "../../recoil"
import ReactPlayer from "react-player/youtube"
import Carousel from "nuka-carousel";
import CustomPlayer from "../../components/CustomPlayer";

export interface StudyRoomResType {
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
    const [isClick, setIsClick] = useState<boolean>(false)
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const [isPlayArr, setIsPlayArr] = useState<boolean[]>(Array(RecStudyRoom.length).fill(false))
    const studyRoom = useRecoilValue(studyRoomState)

    const [prevArrow, setPrevArrow] = useState<boolean>(false)
    const [nextArrow, setNextArrow] = useState<boolean>(true)

    const onCreateRoom = () => {
        router.push("/create")  
    }

    const onEnterStudyRoom = () => {
        // 여기에 추천된 study_room_id를 이용해서 그 스터디룸의 정보를 가져오는 api가 필요할 거 같습니다. 
        router.push("studyroom")
    }

    useEffect(() => {
        // res -> recommendation studyrooms
        // and set data
    })

    const changSlide = (index:number) => {
        setIsPlayArr(playArr => playArr.map((item, idx) => idx === index ? true : false))

        setPrevArrow(true)
        setNextArrow(true)
        if (index === 0)
            setPrevArrow(false)
        if (index === RecStudyRoom.length-1)
            setNextArrow(false)
    }

    return (
        <S.MainContainer>
            <S.VideoContainer>
            { isClick ? 
             <S.PreviewContainer isClick={isClick}>
             <ReactPlayer  
                 url={studyRoom.video_url} 
                 playing={isPlaying}
                 width={942} 
                 height={530}
                 muted={true}
                 loop={true} />  
             <S.InfoContainer>
                 <S.Title>{studyRoom.study_room_name}</S.Title>
                 <S.Description>{studyRoom.description}</S.Description>
                 <S.Nickname>
                     {studyRoom.nickname}
                     <S.Introduce>님의 스터디룸</S.Introduce>
                 </S.Nickname>
             </S.InfoContainer>
         </S.PreviewContainer>
         : 
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
                  )} 
                >
                {RecStudyRoom.map((rec, idx) => {
                    return <S.SliderItemsOuter key={rec.study_room_id}>
                            <CustomPlayer 
                                idx={idx}
                                url={rec.video_url} 
                                isPlaying={isPlayArr}
                            />
                         <S.InfoContainer>
                            <S.RecComment>추천하는 스터디룸</S.RecComment>
                            <S.Title>{rec.study_room_name}</S.Title>
                            <button onClick={onEnterStudyRoom}>스터디룸 입장</button>
                         </S.InfoContainer>
                    </S.SliderItemsOuter>;
                })} 
            </Carousel>
          }
         </S.VideoContainer>
            
            <S.StudyRoomContainer>
                <S.Label>스터디룸</S.Label>
                <button onClick={onCreateRoom}>방생성하기</button>
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
                                setIsClick={setIsClick}
                                setIsPlaying={setIsPlaying} 
                            ></StudyRoom>
                        ))}
                    </S.Rooms>
                </S.Outer>
            </S.StudyRoomContainer>
        </S.MainContainer>
    );
};

export default MainContainer;
