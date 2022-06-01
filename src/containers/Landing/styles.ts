import styled from "@emotion/styled";

export const Background = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    z-index: 1;
`

export const LandingContainer = styled.div`
    margin-top: 60px;
`;

export const ImgContainer = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: center;
`

export const ItemContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 900px;
`;

export const BigSlogan = styled.div`
    color: white;
    font-weight: bold;
    font-size: 60px;
    text-align: center;
`

export const SmallSlogan = styled.div`
    color: white;
    font-size: 45px;
    text-align: center;

    width: 100%;
    margin: 0 auto;
    border-top: 24px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Button = styled.button`
    border: none;
    color: white;
    background-color: #C65DD8;
    margin-top: 122px;
    width: 960px;
    height: 100px;
    font-size: 30px;
    cursor: pointer;
`

export const LoginButton = styled.button`
    border: none;
    position: fixed;
    top: 40px;
    right: 60px;
    color: white;
    background-color: #C65DD8;
    width: 200px;
    height: 60px;
    font-size: 20px;
    cursor: pointer;
`