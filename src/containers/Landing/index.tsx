import * as S from "./styles"
import Background from "../../assets/img/landing_background.svg"
import Image from "next/image"
import { useRouter } from "next/router"

const LandingContainer = () => {
    const router = useRouter()

    const onMoveSignin = () => {
        router.push("sign/signin")
    }

    const onMoveSignup = () => {
        router.push("sign/signup")
    }

    return (
        <S.LandingContainer>
            <S.Background opacity="0.5">
                <S.ItemContainer>
                    <S.BigSlogan>The Rebel</S.BigSlogan>
                    <S.SmallSlogan>Albert Camus - French philosopher</S.SmallSlogan>
                    <S.ButtonContainer>
                        <S.BigButton onClick={onMoveSignup}>시작하기</S.BigButton>
                    </S.ButtonContainer>
                </S.ItemContainer>
                <S.LoginButton onClick={onMoveSignin}>로그인</S.LoginButton>
            </S.Background>
            <S.ImgContainer>
                <Image src={Background} alt="background image"/>
            </S.ImgContainer>
        </S.LandingContainer>
    )
}

export default LandingContainer 