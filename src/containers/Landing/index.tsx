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

                    <div><button>ksndfln</button></div>
                </S.ItemContainer>
            </S.Background>
            <S.ImgContainer>
                <Image src={Background} alt="background image"/>
            </S.ImgContainer>
        </S.LandingContainer>
    )
}

export default LandingContainer