import styled from "@emotion/styled"

export const BooksContainer = styled.div`
      flex-shrink: 0;
      display:flex;
      flex-direction: column;
`

export const ImageContainer = styled.div`
`

export const BookImage = styled.div`
    z-index: 2;
    cursor: pointer;
    bottom: 0px;
    transition: bottom .4s linear;
    position: relative;

    &:hover {
        bottom: 150px;
    }
`

export const ShadowImage = styled.div`
    width: 100%;
    z-index: 1;
    margin-top: -40px;
`

export const Title = styled.div`
    position: absolute;
    writing-mode: tb-rl;
    font-size: 25px;
    font-weight: bold;
    left: 20px;
    top: 100px;
    color: white;
`

export const Author = styled.div`
    position: absolute;
    font-size: 13px;
    bottom: 30px;
    left: 18px;
    color: white;
`