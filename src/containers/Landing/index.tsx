import * as S from "./styles"
import Background from "../../assets/img/landing_background.svg"
import Image from "next/image"

const LandingContainer = () => {
    return (
        <div>
            <S.Background />
            <S.CenterContainer>
                <Image src={Background} alt="background image"/>
            </S.CenterContainer>
            <S.LandingContainer>
                {/* <h1>sndklfslbfgsdklbgskd    gnkslngklsngklsdnkljks</h1> */}
            </S.LandingContainer>

        </div>
    )
}

export default LandingContainer