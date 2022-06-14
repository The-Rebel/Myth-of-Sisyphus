import styled from "@emotion/styled";

export const StudyRoomContainer = styled.section`
    margin-top: 84px;
    display: flex;
    justify-content: center;
`

export const ContentsContainer = styled.div`
    width: 73vw;
    height: calc(100vh - 84px);
`

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
`

export const VideoContainer = styled.div`
    width: 1000px;
    height: 900px;
`

export const EssayLabel = styled.label`
    position: relative;
    margin-top: 5%;
    width: 100%;
    height: 30px;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content :center;
`

export const EssayContainer = styled.div`
    padding: 10px;
    row-gap: 15px;
    background-color: #F5F5F5;
    display: block;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const CreateButton = styled.button`
    position: absolute;
    margin-left: 30px;
    cursor: pointer;
    right: 0px;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px;
`

export const TitleAndNickname = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Description = styled.div`
    font-size: 18px;
    width: 100%;
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