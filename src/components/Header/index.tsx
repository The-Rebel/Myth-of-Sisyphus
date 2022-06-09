import * as S from "./styles"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../assets/img/logo.svg"

const Header = () => {
    return (
        <S.Container>
            <S.Inner>
                <Link href="/main">
                    <a>
                        <Image src={Logo} alt="logo" height={50}></Image>
                    </a>
                </Link>
                <S.NavOuter>
                    <S.NavContainer>
                        <Link href="/main ">
                            <S.Nav>The rebel</S.Nav>
                        </Link>
                        <Link href="/book ">
                            <S.Nav>My Book</S.Nav>
                        </Link>
                    </S.NavContainer>
                </S.NavOuter>
            </S.Inner>
        </S.Container>
    )
}

export default Header