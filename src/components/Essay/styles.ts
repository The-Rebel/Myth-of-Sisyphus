import styled from "@emotion/styled";

export const Essay = styled.div`
    width: 400px;
    height: 150px;
    flex-shrink: 0;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: rgba(0,0,0,0.2)
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 13px;
    margin-top: 13px;
`

export const Title = styled.div`
    font-size: 20px;
`

export const Content = styled.div`
    font-size: 15px;
    width: 380px;
    height: 54px;
    overflow-y: hidden;
    overflow-x: hidden;
    margin-top: 8px;
`

export const Nickname = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin-top: 21px;
`