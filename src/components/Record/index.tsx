import * as S from "./styles"

interface RecordPropsType {
    created_at: string,
    title: string, 
    name: string,
}

const getRandomValue = () => {
    return Math.floor(Math.random() * 10)+5;
}

const Record = ({title, name, created_at}:RecordPropsType) => {
    return (
        <S.RecordContainer duration={`${getRandomValue()}s`}>
            <S.Inner>
                <S.Title>{title}</S.Title>
                <S.Name>{name}</S.Name>
                <S.CreateAt>{created_at}</S.CreateAt>
            </S.Inner>
        </S.RecordContainer>
    )
}

export default Record