import styled from "@emotion/styled"

export const BookContainer = styled.section`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    height: 100vh;
`

export const BookOuter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 1310px;
    height: 100%;
    column-gap: 130px;
    overflow-x: scroll;
    overflow-y: hidden;
    padding-left: 2px;
    padding-right: 2px;

    &::-webkit-scrollbar {
        display: none;
  }
`