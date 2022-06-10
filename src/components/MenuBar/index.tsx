import { useState, useEffect } from "react"
import * as S from "./styles"
import { useRouter } from "next/router"
import Image from "next/image"
import UpArrow from "../../assets/md/up_arrow.svg"
import DoubleUpArrow from "../../assets/md/d_up_arrow.svg"

const MenuBar = () => {
    const router = useRouter()

    const [possiblePath, setPossiblePath] = useState<boolean>(false)
    const [hover, setHover] = useState<boolean>(false)
    // const [isClick, setIsClick] = useState<boolean>(false)

    useEffect(() => {
        if (window.location.pathname === "/book") setPossiblePath(true);
        // else if (window.location.pathname === "/sign/signup") setPossiblePath(false);
        else setPossiblePath(false)
    }, [router.pathname])


    return (
        <div>
            { possiblePath && 
                <S.MenuBarArrow onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    { hover ? <Image src={DoubleUpArrow} alt="double up arrow" width={50} height={51}/> : 
                    <Image src={UpArrow} alt="up arrow" width={50} height={29}/> }
                   
                </S.MenuBarArrow>
            }
        </div>
    )
}

export default MenuBar