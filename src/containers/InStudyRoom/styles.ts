import styled from "@emotion/styled";

export const StudyRoomContainer = styled.section`
    margin-top: 84px;
    margin-left: 100px;
`

export const ContentsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const VideoContainer = styled.div`
    margin-right: 24px;
`

export const EssayContainer = styled.div`
    row-gap: 10px;
    width: 416px;
    height: 720px;
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`