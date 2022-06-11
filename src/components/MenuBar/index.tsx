import { useState, useEffect } from "react"
import * as S from "./styles"
import { useRouter } from "next/router"
import Image from "next/image"
import { UpArrow, 
        DoubleUpArrow, 
        DownArrow, 
        DoubleDownArrow, 
        WriteBook, 
        ExpBook, 
        WriteReadingRec, 
        ExpReadingRec } from "../../assets/md"

const MenuBar = () => {
    const router = useRouter()

    const [possiblePath, setPossiblePath] = useState<boolean>(false)
    const [upHover, setUpHover] = useState<boolean>(false)
    const [downHover, setDownHover] = useState<boolean>(false)
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
                        onMouseEnter={() => setUpHover(true)} 
                        onMouseLeave={() => setUpHover(false)}
                        onClick={() => setIsClick(true)}>
                        { upHover ? <Image src={DoubleUpArrow} alt="double up arrow" width={50} height={51}/> : 
                        <Image src={UpArrow} alt="up arrow" width={50} height={29}/> }
                    </S.MenuBarArrow>
                    { isClick &&
                        <S.MenuBarContainer>
                            <S.CloseArrow 
                                onMouseEnter={() => setDownHover(true)}
                                onMouseLeave={() => setDownHover(false)}
                                onClick={() => {setIsClick(false); setDownHover(false)}}>
                                { downHover ? <Image src={DoubleDownArrow} alt="double down arrow"/> : 
                                <Image src={DownArrow} alt="down arrow"/> }
                            </S.CloseArrow>
                            <S.Inner>
                                <S.Item> 
                                    <Image src={WriteBook} alt="write book"/>
                                    <S.Label>책 집필하기</S.Label>
                                </S.Item>
                                <S.Item> 
                                    <Image src={ExpBook} alt="explored book"/>
                                    <S.Label>책 둘러보기</S.Label>
                                </S.Item>
                                <S.Item> 
                                    <Image src={WriteReadingRec} alt="write reading book"/>
                                    <S.Label>독서기록 쓰기</S.Label>
                                </S.Item>
                                <S.Item> 
                                    <Image src={ExpReadingRec} alt="explored reading record"/>
                                    <S.Label>독서기록 둘러보기</S.Label>
                                </S.Item>
                            </S.Inner>
                        </S.MenuBarContainer>
                    }
                </div>
            }
        </div>
    )
}

export default MenuBar