import styled from "@emotion/styled";

export const StudyRoomContainer = styled.section`
    margin-top: 84px;
    display: flex;
    flex-direction: column;
`

export const ContentsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const VideoContainer = styled.div`
    margin-right: 24px;
`

export const EssayContainer = styled.div`
    padding: 10px;
    row-gap: 15px;
    width: 416px;
    height: 720px;
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 23px;
`

export const TitleAndNickname = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1720px;
    height: 58px;
    align-items: flex-end;
`

export const Description = styled.div`
    font-size: 23px;
    width: 1720px;
    margin-top: 18px;
`
export const Title = styled.div`
    font-size: 45px;
    font-weight: bold;
`

export const Nickname = styled.div`
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: row;
`

export const Introduce = styled.div`
    font-size: 20px;
    font-weight: bold;
    vertical-align: bottom;
    align-self: flex-end;

`