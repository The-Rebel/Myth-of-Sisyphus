import * as S from "../styles"
import Image from "next/image"
import Background from "../../../assets/img/landing_background.svg"
import { useRouter } from "next/router"

const SignupContainer = () => {
    const router = useRouter()

    const onMoveSignin = () => {
        router.push("signin")
    }

    return (
        <S.LandingContainer>
        <S.Background opacity="0.7">
            <S.ItemContainer>
                <S.SmallSlogan>회원가입</S.SmallSlogan>
                <S.Input placeholder="이메일을 추가해주세요" top="40px"/>
                <S.Input placeholder="비밀번호를 추가해주세요" top="18px"/>
                <S.Input placeholder="닉네임을 정해주세요" top="18px"/>
                <S.SmallButton>시작하기</S.SmallButton>
            </S.ItemContainer>
            <S.LoginButton onClick={onMoveSignin}>로그인</S.LoginButton>
        </S.Background>
        <S.ImgContainer>
            <Image src={Background} alt="background image"/>
        </S.ImgContainer>
    </S.LandingContainer>
    )
}

export default SignupContainer