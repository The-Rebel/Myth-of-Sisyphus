import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const LandingContainer = styled.div`
`;

export const Background = styled.div<{opacity:string}>`
    position: absolute;
    top: 0px;
    left: 0px;
    background-color:rgba(0, 0, 0, ${props => props.opacity});
    width: 100vw;
    height: 966px;
    z-index: 10;
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
    font-size: 35px;
    text-align: center;
    width: 100%;
    margin-top: 10px;
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

// export const Boundary = styled.div`
//     width: 100%;
//     height: 40px;
//     background-color: #D9D9D9;
// `

export const ServiceIntroContainer = styled.section`

`

export const SloganContainer = styled.div`
    background-color: #f9fafb;
    width: 100%;
    height: 540px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ServiceSlogan = styled.div`
    font-size: 40px;
    text-align: center;
    width: 100%;
    font-weight: bold;
`

export const MainVideoContainer = styled.div`
    width: 100%;
    height: 950px;
`

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
`

export const FstVideoWapper = styled.div<{goAnimation: boolean}>`
    position: absolute;
    top: 212px;
    left: 224px;

    transition: transform 800ms ease, opacity 800ms ease;
    ${props => 
        props.goAnimation
            ? css`
                transform: scale(1.1);
                opacity: 1;
            `
            : css`
                opacity: 0;
            `
    }
`

export const SecVideoWapper = styled.div<{goAnimation: boolean}>`
    position: absolute;
    top: 492px;
    left: 498px;

    transition: transform 800ms ease, opacity 800ms ease;
    ${props => 
        props.goAnimation
            ? css`
                transform: scale(1.1);
                opacity: 1;
            `
            : css`
                opacity: 0;
            `
    }
`

export const MainVideoExplainContainer = styled.div`
    position: absolute;
    top: 122px;
    right: 351px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 88px;
`

export const ExplainTitle = styled.label`
    font-size: 40px;
    color: #C65DD8;
    font-weight: bold;
`

export const ExplainSlogan = styled.label`
    font-size: 55px;
`


export const MainEssayContainer = styled.div`
    width: 100%;
    height: 1156px;
    background-color: #f9fafb;
`

export const FstEssayWrapper = styled.div<{goAnimation: boolean}>`
    position: absolute;
    top: 102px;
    right: 404px;

    transition: transform 800ms ease, opacity 800ms ease;
    ${props => 
        props.goAnimation
            ? css`
                transform: scale(1.1);
                opacity: 1;
            `
            : css`
                opacity: 0;
            `
    }
`

export const SecEssayWrapper = styled.div<{goAnimation: boolean}>`
    position: absolute;
    top: 644px;
    left: 374px;

    transition: transform 800ms ease, opacity 800ms ease;
    ${props => 
        props.goAnimation
            ? css`
                transform: scale(1.1);
                opacity: 1;
            `
            : css`
                opacity: 0;
            `
    }
`

export const MainEssayExplainContainer = styled.div`
    position: absolute;
    top: 161px;
    left: 256px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 88px;
`