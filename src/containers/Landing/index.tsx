import * as S from "./styles"
import Background from "../../assets/img/landing_background.svg"
import Image from "next/image"
import { useRouter } from "next/router"
import { LifeVideoImg, SpaceVideoImg, SuicideEssay, HumanEssay } from "../../assets/img"

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
                <S.MainVideoContainer>
                    <S.Wrapper>
                        <S.FstVideoWapper>
                            <Image src={LifeVideoImg} alt="life video image" />
                        </S.FstVideoWapper>
                        <S.SecVideoWapper>
                            <Image src={SpaceVideoImg} alt="life video image" />
                        </S.SecVideoWapper>
                        <S.MainVideoExplainContainer>
                            <S.ExplainTitle>메인 ◦ 영상</S.ExplainTitle>
                            <S.ExplainSlogan>
                                생명, 우주부터 실존주의 등<br/>
                                자신이 원하는 주제로 
                            </S.ExplainSlogan>
                        </S.MainVideoExplainContainer>
                    </S.Wrapper>
                </S.MainVideoContainer>
                <S.MainEssayContainer>
                    <S.Wrapper>
                        <S.FstEssayWrapper>
                            <Image src={SuicideEssay} alt="essay about suicide" width={629} height={643} />
                        </S.FstEssayWrapper>
                        <S.SecEssayWrapper>
                            <Image src={HumanEssay} alt="essay about human" />
                        </S.SecEssayWrapper>
                        <S.MainEssayExplainContainer>
                            <S.ExplainTitle>메인 ◦ 에세이</S.ExplainTitle>
                            <S.ExplainSlogan>
                                자신의 생각을 <br/>
                                에세이로 적고 공유
                            </S.ExplainSlogan>
                        </S.MainEssayExplainContainer>
                    </S.Wrapper>
                </S.MainEssayContainer>
            </S.ServiceIntroContainer>
        </S.LandingContainer>
    )
}

export default LandingContainer 