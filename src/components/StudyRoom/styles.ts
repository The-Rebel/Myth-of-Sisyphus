import styled from "@emotion/styled";

export const RoomContainer = styled.div`
    width: 400px;
    height: 230px;
    flex-shrink: 0;
    transition: width .2s, height .2s;

    &:hover {
        width: 500px;
        height: 290px;
        background-color: rgba(0, 0, 0, 0.7);
        display:flex;
        align-items: center;
        z-index: 1;
    }
`