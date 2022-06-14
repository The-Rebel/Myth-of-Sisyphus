import styled from "@emotion/styled";

export const StudyRoomContainer = styled.section`
    width: 100%;
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
    width: 25%;
    height: 675px;
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const CreateButtonContainer = styled.div`
    /* position: relative;
    z-index: 1; */
`

export const CreateButton = styled.button`
    position: absolute;
    right: 20px;
    bottom: 10px;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 1720px;
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