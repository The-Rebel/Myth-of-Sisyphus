import {StudyRoomList, RecStudyRoom} from "../../constant";
import * as S from "./styles";
import StudyRoom from "../../components/StudyRoom";
import {StaticImageData} from "next/image";
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {NextArrow, PrevArrow} from "../../assets/md"

import { useRecoilValue } from "recoil"
import { studyRoomState } from "../../recoil"
import ReactPlayer from "react-player"
import Carousel from "nuka-carousel";

export interface StudyRoomResType {
    study_room_id: number;
    user_id?: number;
    nickname: string;
    video_url: string;
    thumbnail: string | StaticImageData;
    study_room_name: string;
    description: string;
}

interface playingType {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number
}

const MainContainer = () => {
    const router = useRouter()
    const [isClick, setIsClick] = useState<boolean>(false)
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const studyRoom = useRecoilValue(studyRoomState)
    const hostVideo = useRef<ReactPlayer>(null)

    const onCreateRoom = () => {
        router.push("/create")  
    }

    const playingControl = (state:playingType) => {        
        console.log(state);
        // if (hostVideo.current) {
        //     hostVideo.current.seekTo(0)
        // }
    }

    useEffect(() => {
        // res -> recommendation studyrooms
        // and set data
    })

    return (
        <S.MainContainer>
            <S.VideoContainer>
            { isClick ? 
             <S.PreviewContainer isClick={isClick}>
             <ReactPlayer 
                 ref={hostVideo}
                 url={studyRoom.video_url} 
                 playing={isPlaying}
                 onProgress={playingControl}
                 width={942} 
                 height={530}
                 muted={true}/> 
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
         <S.NotPreviewContainer>
            <div>recommendation studyroom here</div>
            <Carousel
                dragging={false}
                renderCenterLeftControls={({ previousSlide }) => (
                    <div onClick={previousSlide}>
                      <Image src={PrevArrow} alt="previous arrow" />
                    </div>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <div onClick={nextSlide}>
                      <Image src={NextArrow} alt="next arrow" />
                    </div>
                  )}
                >
                {RecStudyRoom.map((rec) => {
                    return <S.SliderItemsOuter key={rec.study_room_id}>
                        <ReactPlayer 
                         url={rec.video_url}
                         playing={!isPlaying}
                         width={942} 
                         height={530}
                         muted={true}
                         loop={true}/> 
                         <S.InfoContainer>
                            <S.Title>{rec.study_room_name}</S.Title>
                            <S.Description>{rec.description}</S.Description>
                            <S.Nickname>
                                {rec.nickname}
                                <S.Introduce>님의 스터디룸</S.Introduce>
                            </S.Nickname>
                         </S.InfoContainer>
                    </S.SliderItemsOuter>;
                })} 
            </Carousel>
         </S.NotPreviewContainer> }
         </S.VideoContainer>
            
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
                                setIsClick={setIsClick}
                                setIsPlaying={setIsPlaying}
                            ></StudyRoom>
                        ))}
                    </S.Rooms>
                {/* <button onClick={onCreateRoom}>방생성하기</button>*/}
                </S.Outer>
            </S.StudyRoomContainer>
        </S.MainContainer>
    );
};

export default MainContainer;
