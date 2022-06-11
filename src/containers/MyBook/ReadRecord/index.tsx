import * as S from "./styles"
import { ReadingRecordList } from "../../../constant";

const ReadRecordContainer = () => {
    return (
        <S.ReadRecContainer>
            <S.Outer>
                { ReadingRecordList.map((record) => (
                    
                )) }
            </S.Outer>
        </S.ReadRecContainer>
    )
}

export default ReadRecordContainer;