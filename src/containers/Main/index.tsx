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
import ReactPlayer from "react-player/youtube"
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
        if (!hostVideo.current) return 
    

        if (state.played >= 0.1) {
            hostVideo.current.seekTo(0, "seconds")
            console.log("dnskfnklsnfklsn");
            
        }
    }

    useEffect(() => {
        // res -> recommendation studyrooms
        // and set data
    })

    const onNext = (nextSlide: ()=>void) => {
        nextSlide()
    }

    return (
        <S.MainContainer>
            <S.VideoContainer>
            { isClick ? 
             <S.PreviewContainer isClick={isClick}>
             <ReactPlayer 
                //  ref={hostVideo}
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
            <Carousel
                dragging={false}
                renderCenterLeftControls={({ previousSlide }) => (
                    <div onClick={previousSlide}>
                      <Image src={PrevArrow} alt="previous arrow" />
                    </div>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <div onClick={() => onNext(nextSlide)}>
                      <Image src={NextArrow} alt="next arrow" />
                    </div>
                  )} 
                >
                {RecStudyRoom.map((rec) => {
                    return <S.SliderItemsOuter key={rec.study_room_id}>
                            <ReactPlayer 
                             url={rec.video_url}
                             ref={hostVideo}
                             playing={!isPlaying}
                             onProgress={playingControl}
                             controls={true}
                             width={800} 
                             height={450}
                             muted={true} /> 
                         <S.InfoContainer>
                            <S.RecComment>추천하는 스터디룸</S.RecComment>
                            <S.Title>{rec.study_room_name}</S.Title>
                            <button onClick={() => hostVideo.current?.seekTo(0, "seconds")}>dlsnlkfn</button>
                         </S.InfoContainer>
                    </S.SliderItemsOuter>;
                })} 
            </Carousel>
          }
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
