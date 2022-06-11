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
                    <S.SmallSlogan>깊은 생각이 모이는 장소</S.SmallSlogan>
                    <S.ButtonContainer>
                        <S.BigButton onClick={onMoveSignup}>시작하기</S.BigButton>
                    </S.ButtonContainer>
                </S.ItemContainer>
                <S.LoginButton onClick={onMoveSignin}>로그인</S.LoginButton>
            </S.Background>
            <S.ImgContainer>
                <Image src={Background} alt="background image"/>
            </S.ImgContainer>

            <S.ServiceIntroContainer>
                <S.SloganContainer>
                    <S.ServiceSlogan>
                        세상의 부조리와 맞서기 위해선 우리의 생각이 발전해야 합니다 <br/>
                        여러 문제와 지식에 대한 생각 The Rebel에서 공유해보세요.
                    </S.ServiceSlogan>
                </S.SloganContainer>
                
            </S.ServiceIntroContainer>
        </S.LandingContainer>
    )
}

export default LandingContainer 