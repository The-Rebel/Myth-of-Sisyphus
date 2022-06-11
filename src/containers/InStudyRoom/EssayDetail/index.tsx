import * as S from "./styles"
import { useRecoilValue } from "recoil";
import { essayState } from "../../../recoil";

const EssayDetailContainer = () => {
    const essay = useRecoilValue(essayState)

    return (
        <S.EssayDetailContainer>
            <S.DetailContainer>
                <S.ContentContainer>
                    <S.Title>{essay.title}</S.Title>
                    <S.Nickname>{essay.nickname}</S.Nickname>
                    <S.Content>{essay.content}</S.Content>
                </S.ContentContainer>
            </S.DetailContainer>
        </S.EssayDetailContainer>
    )
}

export default EssayDetailContainer;