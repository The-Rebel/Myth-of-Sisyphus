import * as S from "./styles"

const CreateRoomContainer = () => {
    return (
        <S.Container>
            <S.Outer>
                <S.Top>
                    <S.ThumbnailContainer>
                        <div><S.Label>썸네일</S.Label></div>
                        <input type="file"></input>
                    </S.ThumbnailContainer>
                    <S.TopInner>
                        <S.Label>스터디룸 이름</S.Label>
                        <input></input>
                        <S.Label>동영상 url</S.Label>
                        <input></input>
                    </S.TopInner>
                </S.Top>
                <S.DescContainer>
                    <div><S.Label>스터디룸 설명</S.Label></div>
                    <textarea></textarea>
                </S.DescContainer>
            </S.Outer>
        </S.Container>
    )
}

export default CreateRoomContainer