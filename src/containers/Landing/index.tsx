import * as S from "./styles"
import Background from "../../assets/img/landing_background.svg"
import Image from "next/image"
import { useRouter } from "next/router"
import { LifeVideoImg, SpaceVideoImg, SuicideEssay, HumanEssay } from "../../assets/img"
import { useEffect, useState } from "react"

const LandingContainer = () => {
    const router = useRouter()
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);

        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, [scrollPosition])

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
      };

    const scrollYCheck = () => {
        if (scrollPosition  > 750) return true
        return false
    }
    const scrollYCheck1 = () => {
        if (scrollPosition > 1030) return true
        return false
    }

    const scrollYCheck2 = () => {
        if (scrollPosition > 1590) return true
        return false
    }

    const scrollYCheck3 = () => {
        if (scrollPosition > 2120) return true
        return false
    }

    return (
        <S.LandingContainer>
            <S.Background opacity="0.5">
                <S.ItemContainer>
                    <S.BigSlogan>The Rebel</S.BigSlogan>
                    <S.SmallSlogan>깊은 생각이 모이는 장소</S.SmallSlogan>
                    <S.ButtonContainer>
                        <S.BigButton onClick={() => router.push("sign/signup")}>시작하기</S.BigButton>
                    </S.ButtonContainer>
                </S.ItemContainer>
                <S.LoginButton onClick={() => router.push("sign/signin")}>로그인</S.LoginButton>
            </S.Background>
                <Image src={Background} alt="background image" width={1920} height={966}/>

            <S.ServiceIntroContainer>
                <S.SloganContainer>
                    <S.ServiceSlogan>
                        세상의 부조리와 맞서기 위해선 우리의 생각이 발전해야 합니다 <br/>
                        여러 문제와 지식에 대한 생각 The Rebel에서 공유해보세요.
                    </S.ServiceSlogan>
                </S.SloganContainer>
                <S.MainVideoContainer>
                    <S.Wrapper>
                        <S.FstVideoWapper goAnimation={scrollYCheck()}>
                            <Image src={LifeVideoImg} alt="life video image" />
                        </S.FstVideoWapper>
                        <S.SecVideoWapper goAnimation={scrollYCheck1()}>
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
                        <S.FstEssayWrapper goAnimation={scrollYCheck2()}>
                            <Image src={SuicideEssay} alt="essay about suicide" width={629} height={643} />
                        </S.FstEssayWrapper>
                        <S.SecEssayWrapper goAnimation={scrollYCheck3()}>
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