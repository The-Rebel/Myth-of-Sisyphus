import * as S from "./styles"
import Background from "../../assets/img/landing_background.svg"
import Image from "next/image"

const LandingContainer = () => {
    return (
        <S.LandingContainer>
            <S.Background>
                <S.ItemContainer>
                    <S.BigSlogan>The Rebel</S.BigSlogan>
                    <S.SmallSlogan>Albert Camus - French philosopher</S.SmallSlogan>
                    <S.ButtonContainer>
                        <S.Button>시작하기</S.Button>
                    </S.ButtonContainer>
                </S.ItemContainer>
                <S.LoginButton>로그인</S.LoginButton>
            </S.Background>
            <S.ImgContainer>
                <Image src={Background} alt="background image"/>
            </S.ImgContainer>
        </S.LandingContainer>
    )
}

export default LandingContainer