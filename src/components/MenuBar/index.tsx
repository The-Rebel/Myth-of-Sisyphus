import { useState, useEffect } from "react"
import * as S from "./styles"
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import { UpArrow, 
        DoubleUpArrow, 
        DownArrow, 
        DoubleDownArrow, 
        WriteBook, 
        ExpBook, 
        WriteReadingRec, 
        ExpReadingRec,
        PWriteBook,
        PExpBook,
        PWriteReadingRec,
        PExpReadingRec } from "../../assets/md"


const MenuBar = () => {
    const router = useRouter()

    const [possiblePath, setPossiblePath] = useState<boolean>(false)
    const [upHover, setUpHover] = useState<boolean>(false)
    const [downHover, setDownHover] = useState<boolean>(false)
    const [isClick, setIsClick] = useState<boolean>(false)

    useEffect(() => {
        if (window.location.pathname === "/mybook") setPossiblePath(true);
        else if (window.location.pathname === "/mybook/read-record") setPossiblePath(true);
        else setPossiblePath(false)

        setIsClick(false)
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
                                    <S.Label color="white">책 집필하기</S.Label>
                                </S.Item>
                                    <Link href="/mybook">
                                        { router.pathname == "/mybook" ?
                                        <S.Item>
                                            <Image src={PExpBook} alt="explored book"/>
                                            <S.Label color="#C65DD8">책 둘러보기</S.Label>
                                        </S.Item> : 
                                        <S.Item>
                                            <Image src={ExpBook} alt="explored book"/>
                                            <S.Label color="white">책 둘러보기</S.Label>
                                        </S.Item>
                                        } 
                                    </Link>
                                <S.Item> 
                                    <Image src={WriteReadingRec} alt="write reading book"/>
                                    <S.Label color="white">독서기록 쓰기</S.Label>
                                </S.Item>
                                    <Link href="/mybook/read-record">
                                            { router.pathname == "/mybook/read-record" ? 
                                            <S.Item>
                                                <Image src={PExpReadingRec} alt="purple explored reading record"/>
                                                <S.Label color="#C65DD8">독서기록 둘러보기</S.Label>
                                            </S.Item> :
                                            <S.Item>
                                                <Image src={ExpReadingRec} alt="explored reading record"/>
                                                <S.Label color="white">독서기록 둘러보기</S.Label>
                                            </S.Item>
                                            }
                                    </Link>
                            </S.Inner>
                        </S.MenuBarContainer>
                    }
                </div>
            }
        </div>
    )
}

export default MenuBar