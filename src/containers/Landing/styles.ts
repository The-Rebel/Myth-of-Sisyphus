import styled from "@emotion/styled";

export const Background = styled.div<{opacity:string}>`
    position: absolute;
    top: 0px;
    left: 0px;
    background-color:rgba(0, 0, 0, ${props => props.opacity});
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
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

export const BigButton = styled.button`
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
export const Input = styled.input<{top: string}>`
    width: 763px;
    height: 80px;
    font-size: 30px;
    color: black;
    margin-top: ${props => props.top};

    ::placeholder {
        font-size: 23px;
    }
`

export const SmallButton = styled.button`
    border: none;
    color: white;
    background-color: #C65DD8;
    margin-top: 70px;
    width: 319px;
    height: 60px;
    font-size: 20px;
    cursor: pointer;
`

export const IfFirstContainer = styled.div`
    margin-top: 55px;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
    width: 400px;
`

export const IfFirst = styled.a`
    color: #C65DD8;
    cursor: pointer;
`