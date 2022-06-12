import styled from "@emotion/styled";

export const MainContainer = styled.section`
    margin-top: 60px;
    margin-left: 100px;
`

export const StudyRoomContainer = styled.div`
    position: fixed;
    bottom: 20px;
`

export const Label = styled.div`
    font-size: 30px;
    font-weight: bold;
`

export const Outer = styled.div`
    height: 230px;
    width: 100%;
    margin-top: 15px;
`

export const Rooms = styled.div`    
    position: fixed;
    bottom: 20px;

    display: flex;
    flex-direction: row;
    column-gap: 10px;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
        display: none;
  }
`
