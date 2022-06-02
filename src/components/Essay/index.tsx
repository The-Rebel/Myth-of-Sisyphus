import { EssayListType } from "../../containers/InStudyRoom"
import * as S from "./styles"

const Essay = ({nickname, title, content}:EssayListType) => {
    return (
        <S.Essay>
            <S.InfoContainer>
                <S.Title>{title}</S.Title>
                <S.Content>{content}</S.Content>
                <S.Nickname>{nickname}</S.Nickname>
            </S.InfoContainer>
        </S.Essay>
    )
}

export default Essay