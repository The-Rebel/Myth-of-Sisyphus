import styled from "@emotion/styled";

export const ReadRecContainer = styled.section`
    margin-top: 150px;
    margin-left: 170px;
    margin-right: 170px;
    display: flex;
    justify-content: center;
`

export const Outer = styled.div`
    width: 100%;
    height: 770px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 5px; 
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`