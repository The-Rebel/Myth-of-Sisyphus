import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface RoomContainerPropsType {
    isClick: boolean;
    isHover: boolean;
}

export const RoomContainer = styled.div<RoomContainerPropsType>`
    width: 400px;
    height: 230px;
    flex-shrink: 0;
    position: relative;

    ${props => props.isClick && css`s
        display:flex;
        align-items: center;
        
        & .clicked {
            background-color: rgba(0, 0, 0, 0.8);
            opacity: 1; 
            visibility: visible;
            z-index: 2;
        }
        `}

    ${props => props.isHover && css`
        display:flex;
        align-items: center;

        & .hovered {
            background-color: rgba(0, 0, 0, 0.4);
            opacity: 1; 
            visibility: visible;
            z-index: 2; 
        }
    `}    
`

export const OpRoomContainer = styled.div`
    width: 400px;
    height: 230px;
    opacity: 0;
    visibility: hidden;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const PlayButton = styled.div`
    cursor:pointer;
`

export const Label = styled.label`
    color: white;
`