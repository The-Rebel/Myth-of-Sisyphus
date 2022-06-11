import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const widthAnimation = keyframes`
    50% {
        width: 100%;
    }
    100% {
        width: 40%;
    }
`

export const RecordContainer = styled.div<{duration:string}>`
    flex-shrink: 0;
    height: 150px;
    width: 40%;
    background-color: #444444;

    animation: ${widthAnimation} ${props => props.duration} ease infinite;
`

export const Inner = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Title =styled.label`
    font-size: 30px;
    color: white;
    font-weight: bold;
`

export const Name =styled.label`
    font-size: 25px;
    color: white;
    margin-left: 100px;
`

export const CreateAt =styled.label`
    font-size: 20px;
    color: white;
    margin-left: 25px;

`