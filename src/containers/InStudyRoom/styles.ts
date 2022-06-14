import styled from "@emotion/styled";

export const StudyRoomContainer = styled.section`
    margin-top: 84px;
`

export const ContentsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 84px);
    overflow-y: hidden;
`

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
`

export const VideoContainer = styled.div`
    position: relative;
    margin-right: 24px;
`

export const EssayLabel = styled.label`
    width: 100%;
    height: 30px;
    font-size: 18px;
`

export const EssayContainer = styled.div`
    /* z-index: 1; */
    padding: 10px;
    row-gap: 15px;
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
    display: block;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const CreateButton = styled.button`
    margin-left: 30px;
    cursor: pointer;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 23px;
`

export const TitleAndNickname = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Description = styled.div`
    font-size: 18px;
    width: 1200px;
    margin-top: 30px;
`
export const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
`

export const Nickname = styled.div`
    margin-top: 12px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    column-gap: 10px;
`

export const Introduce = styled.div`
    font-size: 15px;
    font-weight: bold;
    vertical-align: bottom;
    align-self: flex-end;

`