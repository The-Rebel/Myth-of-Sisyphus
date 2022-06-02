import { EssayListType } from "../../containers/InStudyRoom"
import * as S from "./styles"

const Essay = ({nickname, title, content}:EssayListType) => {
    return (
        <S.Essay>
            <div>{title}</div>
        </S.Essay>
    )
}

export default Essay