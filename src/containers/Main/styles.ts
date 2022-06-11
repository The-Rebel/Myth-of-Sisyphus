import styled from "@emotion/styled";

export const MainContainer = styled.section`
    margin-top: 110px;
    margin-left: 100px;
`

export const RoomContainerName = styled.div<{top: string}>`
    font-size: 30px;
    margin-top: ${props => props.top};
`

export const Outer = styled.div`
    height: 230px;
    width: 100%;
`

export const RoomsContainer = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
        display: none;
  }
`
