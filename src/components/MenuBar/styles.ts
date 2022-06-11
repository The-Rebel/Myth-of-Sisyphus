import styled from "@emotion/styled";

export const MenuBarArrow = styled.div`
    position: fixed;
    left: 50%;
    bottom: 50px;
    cursor: pointer;
` 

export const MenuBarContainer = styled.section`
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 593px;
    background-color: #1B1B1B;
    z-index: 3;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const CloseArrow = styled.div`
    position: absolute;
    left: 50%;
    top: 30px;
    cursor: pointer;
` 

export const Inner = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 250px;
`

export const Item = styled.a`
    display: flex;
    flex-direction: column;
    row-gap: 70px;
    cursor: pointer;

    & .active {
        color: #C65DD8;
    }
`

export const Label = styled.label<{color:string}>`
    font-size: 35px;
    color: ${props => props.color};
`