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
    align-items: center;
    flex-direction: row;
    opacity: 0;
    visibility: hidden;
    width: 100%;
    height: 590px;

    ${props => props.isHover && css`
        background-color: #F5F5F5;
        opacity: 1; 
        visibility: visible;
        transition-delay: .4s;
    `}
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    font-size: 35px;
    /* margin-top: 30px;
    margin-right: 48px;
    margin-bottom: 13px;
    margin-left: 30px; */
    font-weight: bold;
    width: 422px;
    height: 30px;
`

export const Description = styled.div`
    font-size: 20px;
    color: white;
    width: 370px;
    height: 182px;
    padding-bottom: 35px;
    padding-left: 30px;
    overflow-y: hidden;
`