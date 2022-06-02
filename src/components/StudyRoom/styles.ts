import styled from "@emotion/styled";

export const RoomContainer = styled.div<{isHover: boolean}>`
    width: 400px;
    height: 230px;
    flex-shrink: 0;
    transition: width .4s, height .4s;

    ${props => props.isHover && `
        position: relative;
        width: 500px;
        height: 290px;
        display:flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
    `} 
`

export const HoverRoomContainer = styled.div`
    width: 500px;
    height: 290px;
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
    bottom: 24px;
    right: 24px;
    cursor:pointer;
`