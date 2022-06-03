import { EssayListType } from "../../containers/InStudyRoom"
import * as S from "./styles"
import { useSetRecoilState } from "recoil"
import { essayState } from "../../recoil"
import { useRouter } from "next/router"

const Essay = ({nickname, title, content}:EssayListType) => {
    const setEssayState = useSetRecoilState(essayState)
    const router = useRouter()

    const onEssay = () => {
        const data = {
            nickname: nickname,
            title: title,
            content: content
        }
        setEssayState(data)

        router.push("studyroom/essay")
    }

    return (
        <S.Essay onClick={onEssay}>
            <S.InfoContainer>
                <S.Title>{title}</S.Title>
                <S.Content>{content}</S.Content>
                <S.Nickname>{nickname}</S.Nickname>
            </S.InfoContainer>
        </S.Essay>
    )
}

export default Essay