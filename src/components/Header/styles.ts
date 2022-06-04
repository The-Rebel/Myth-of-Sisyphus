import styled from "@emotion/styled";

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 60px;
    background-color: white;
`;

export const Inner = styled.div`
    margin: 0 auto;
    width: 1718px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const NavOuter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavContainer = styled.div`
    display: flex;
    column-gap: 28px;
    align-items: center;
    margin-right: 36px;
`

export const Nav = styled.a`
`