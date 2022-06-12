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
            transition-delay: .4s;
        }

        & .preview {
            opacity: 1; 
            visibility: visible;
            transition-delay: .4s;
            background-color: red;
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

export const Title = styled.div`
    color: white;
    font-size: 23px;
    margin-top: 30px;
    margin-right: 48px;
    margin-bottom: 13px;
    margin-left: 30px;
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

export const PlayButton = styled.div`
    position: absolute;
    bottom: 50%;
    right: 50%;
    cursor:pointer;
    transform: translate(50%, 50%);
`

