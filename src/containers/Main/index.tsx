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
import ResponsivePlayer from "../../components/ResponsivePlayer";

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
    const [index, setIndex] = useState<number>(0)
    const [isClick, setIsClick] = useState<boolean>(false)
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const [isPlayArr, setIsPlayArr] = useState<boolean[]>(Array(RecStudyRoom.length).fill(false))
    const studyRoom = useRecoilValue(studyRoomState)

    const onCreateRoom = () => {
        router.push("/create")  
    }

    useEffect(() => {
        // res -> recommendation studyrooms
        // and set data
    })

    const onHandlePrevNext = (f: ()=>void) => {
        f()
        // setIsPlayArr(isPlayArr => isPlayArr.map((item, idx) => idx !== index ? true : item))
    }

    const changSlide = (index:number) => {
        setIndex(index)
        setIsPlayArr(isPlayArr => isPlayArr.map((item, idx) => idx === index ? true : false))
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
                    <div onClick={() => onHandlePrevNext(previousSlide)}>
                      <Image src={PrevArrow} alt="previous arrow" />
                    </div>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <div onClick={() => onHandlePrevNext(nextSlide)}>
                      <Image src={NextArrow} alt="next arrow" />
                    </div>
                  )} 
                >
                {RecStudyRoom.map((rec, idx) => {
                    return <S.SliderItemsOuter key={rec.study_room_id}>
                            <ResponsivePlayer 
                                idx={idx}
                                url={rec.video_url}
                                isPlaying={isPlayArr}
                            />
                         <S.InfoContainer>
                            <S.RecComment>추천하는 스터디룸</S.RecComment>
                            <S.Title>{rec.study_room_name}</S.Title>
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
