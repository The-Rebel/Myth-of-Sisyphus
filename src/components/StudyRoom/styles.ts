import styled from "@emotion/styled";

export const RoomContainer = styled.div`
    width: 400px;
    height: 230px;
    flex-shrink: 0;
    transition: width .5s, height .5s;

    &:hover {
        position: relative;
        display:flex;
        align-items: center;
        transition-delay: .4s;
        
        & .items {
            background-color: rgba(0, 0, 0, 0.8);
            opacity: 1; 
            visibility: visible;
            z-index: 2;
            /* transition-delay: .4s; */
        }
    }
`

export const HoverRoomContainer = styled.div`
    width: 400px;
    height: 230px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
`

export const PlayButton = styled.div`
    position: absolute;
    bottom: 50%;
    right: 50%;
    cursor:pointer;
    transform: translate(50%, 50%);
`

