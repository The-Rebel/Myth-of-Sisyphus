import * as S from "./styles"
import ReactPlayer from "react-player"
import { useRecoilValue } from "recoil"
import { studyRoomState } from "../../recoil"

import { EssayList } from "../../constant"
import Essay from "../../components/Essay"

export interface EssayListType {
    user_id?: number,
    nickname: string,
    title: string,
    content: string,
}

const InStudyRoomContainer = () => {
    const studyRoom = useRecoilValue(studyRoomState)

    // useEffect(() => {
    //     console.log(studyRoom);
    //     console.log(studyRoom.video_url);
    // })

    return (
        <S.StudyRoomContainer>
            <S.ContentsContainer>
                <S.VideoContainer>
                    <ReactPlayer url={studyRoom.video_url} controls={true} width={1280} height={720} />
                </S.VideoContainer>
                <S.EssayContainer>
                    { EssayList.map((essay) => (
                        <Essay 
                            key={essay.user_id} 
                            nickname={essay.nickname} 
                            title={essay.title} 
                            content={essay.content}/>
                    )) }
                </S.EssayContainer>
            </S.ContentsContainer>
            <S.InfoContainer>
                <S.TitleAndNickname>
                    <div>ddd</div>
                    <div>ddd</div>
                </S.TitleAndNickname>
                <S.Description>{studyRoom.description}</S.Description>
            </S.InfoContainer>
        </S.StudyRoomContainer>
    )
}

export default InStudyRoomContainer