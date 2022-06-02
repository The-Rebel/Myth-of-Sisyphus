import * as S from "../styles"
import Image from "next/image"
import Background from "../../../assets/img/landing_background.svg"


const SinginContainer = () => {
    return (
        <S.LandingContainer>
        <S.Background opacity="0.7">
            <S.ItemContainer>
            </S.ItemContainer>
        </S.Background>
        <S.ImgContainer>
            <Image src={Background} alt="background image"/>
        </S.ImgContainer>
    </S.LandingContainer>
    )
}

export default SinginContainer