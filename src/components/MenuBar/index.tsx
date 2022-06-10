import { useState, useEffect } from "react"
import * as S from "./styles"
import { useRouter } from "next/router"
import Image from "next/image"
import UpArrow from "../../assets/md/up_arrow.svg"
import DoubleUpArrow from "../../assets/md/d_up_arrow.svg"
import DownArrow from "../../assets/md/down_arrow.svg"

const MenuBar = () => {
    const router = useRouter()

    const [possiblePath, setPossiblePath] = useState<boolean>(false)
    const [upHover, setUpHover] = useState<boolean>(false)
    const [isClick, setIsClick] = useState<boolean>(false)

    useEffect(() => {
        if (window.location.pathname === "/book") setPossiblePath(true);
        // else if (window.location.pathname === "/sign/signup") setPossiblePath(false);
        else setPossiblePath(false)
    }, [router.pathname])

    return (
        <div>
            { possiblePath && 
                <div>
                    <S.MenuBarArrow 
                        onMouseEnter={() => setHover(true)} 
                        onMouseLeave={() => setHover(false)}
                        onClick={() => setIsClick(true)}>
                        { hover ? <Image src={DoubleUpArrow} alt="double up arrow" width={50} height={51}/> : 
                        <Image src={UpArrow} alt="up arrow" width={50} height={29}/> }
                    </S.MenuBarArrow>
                    { isClick &&
                        <S.MenuBarContainer>
                            <S.CloseArrow>
                                <Image src={DownArrow} alt="down arrow"/>
                            </S.CloseArrow>
                        </S.MenuBarContainer>
                    }
                </div>
            }
        </div>
    )
}

export default MenuBar