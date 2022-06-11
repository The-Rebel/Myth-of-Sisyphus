import * as S from "./styles"
import { ReadingRecordList } from "../../../constant";
import Record from "../../../components/Record";

const ReadRecordContainer = () => {
    return (
        <S.ReadRecContainer>
            <S.Outer>
                { ReadingRecordList.map((record) => (
                    <Record key={record.id} title={record.title} name={record.name} created_at={record.created_at} />
                )) }
            </S.Outer>
        </S.ReadRecContainer>
    )
}

export default ReadRecordContainer;