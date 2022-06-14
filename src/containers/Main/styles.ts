import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const MainContainer = styled.section`
    margin-top: 60px;
    margin-left: 100px;
    height: 100%;
`

export const StudyRoomContainer = styled.div`
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

export const PreviewContainer = styled.section<{isClick:boolean}>`
    display: flex;
    align-items: center;
    flex-direction: row;
    opacity: 0;
    visibility: hidden;
    width: 100%;
    height: 590px;

    ${props => props.isClick && css`
        opacity: 1; 
        visibility: visible;
    `};
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 49px;
`

export const Title = styled.div`
    font-size: 35px;
    font-weight: bold;
    width: 650px;
    height: 30px;
`

export const Description = styled.div`
    font-size: 20px;
    width: 650px;
    height: 130px;
    overflow-y: hidden;
    margin-top: 60px;
`

export const Nickname = styled.div`
    display: flex;
    margin-top: 250px;
    font-size: 20px;
    font-weight: bold;
    column-gap: 5px;
`

export const Introduce = styled.div`
    font-size: 15px;
    font-weight: bold;
    vertical-align: bottom;
    align-self: flex-end;
` 

export const SliderItemsOuter = styled.div`
    /* position: relative;
    padding-top: 56.25%; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 590px;
`

export const VideoContainer = styled.div`
    margin-right: 100px;
`

export const RecComment = styled.div`
    font-size: 19px;
`