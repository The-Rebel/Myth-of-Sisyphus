import * as S from "../styles"
import Image from "next/image"
import Background from "../../../assets/img/landing_background.svg"
import { useRouter } from "next/router"


const SinginContainer = () => {
    const router = useRouter()

    const onMoveSignup = () => {
        router.push("signup")
    }

    const onLogin = () => {
        router.push("/main")
    }

    return (
        <S.LandingContainer>
        <S.Background opacity="0.7">
            <S.ItemContainer>
                <S.SmallSlogan>로그인</S.SmallSlogan>
                <S.Input top="46px" placeholder="이메일을 입력해주세요"/>
                <S.Input top="35px" placeholder="비밀번호를 입력해주세요"/>
                <S.SmallButton onClick={onLogin}>로그인</S.SmallButton>
                <S.IfFirstContainer>
                    <div>The rebel이 처음이신가요?</div>
                    <S.IfFirst onClick={onMoveSignup}>회원가입하기</S.IfFirst>
                </S.IfFirstContainer>
            </S.ItemContainer>
        </S.Background>
        <S.ImgContainer>
            <Image src={Background} alt="background image"/>
        </S.ImgContainer>
    </S.LandingContainer>
    )
}

export default SinginContainer