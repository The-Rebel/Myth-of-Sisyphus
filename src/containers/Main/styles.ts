import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const MainContainer = styled.section`
    margin-top: 60px;
    margin-left: 100px;
    height: 100%;
`

export const StudyRoomContainer = styled.div`
    margin-top: 20px;
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
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
        display: none;
  }
`

export const PreviewContainer = styled.section<{isHover:boolean}>`
    display: flex;
    justify-content: center;    
    /* opacity: 0;
    visibility: hidden; */
    width: 100px;
    height: 100px;
    background-color: white;

    ${props => props.isHover && css`
        background-color: black;
    `}
`