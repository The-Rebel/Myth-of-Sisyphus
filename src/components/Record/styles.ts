import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const widthAnimation = keyframes`

`

export const RecordContainer = styled.div<{duration:number}>`
    flex-shrink: 0;
    height: 150px;
    width: 700px;
    background-color: #444444;
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