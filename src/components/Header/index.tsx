import * as S from "./styles"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../assets/img/logo.svg"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const Header = () => {
    const router = useRouter()

    const [possiblePath, setPossiblePath] = useState<boolean>(true) 
    useEffect(() => {
            if (window.location.pathname === "/") setPossiblePath(false);
            else if (window.location.pathname === "/sign/signup") setPossiblePath(false);
            else if (window.location.pathname === "/sign/signin") setPossiblePath(false);
            else setPossiblePath(true)
    }, [router.pathname])

    return (
        <div>
            { possiblePath && 
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
                            <Link href="/mybook ">
                                <S.Nav>My Book</S.Nav>
                            </Link>
                        </S.NavContainer>
                    </S.NavOuter>
                </S.Inner>
            </S.Container>
            }
        </div>
    )
}

export default Header