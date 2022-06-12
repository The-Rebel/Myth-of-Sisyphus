import Image from "next/image";
import Bookimg from "../../assets/img/bookimage.svg"
import Shadow from "../../assets/img/shadow.svg"
import HoverShadow from "../../assets/img/hover_shadow.svg"
import * as S from "./styles"
import { useState } from "react";

interface BookPropsType {
    title: string,
    name: string
}

const Books = ({title, name}: BookPropsType) => {
    const [hover, setHover] = useState<boolean>(false)
    const [timer, setTimer] = useState<any>()

    const onEnter = () => {
        setHover(true)
    }

    const onLeave = () => {
        clearTimeout(timer)
        setTimeout(() => {
            setHover(false)
        }, 400)

    }

    return (
        <S.BooksContainer>
            <S.ImageContainer>
                <S.BookImage 
                    onMouseEnter={() => setTimer(setTimeout(onEnter, 400))} 
                    onMouseLeave={onLeave}>
                    <Image src={Bookimg} alt="book image" width={158} height={469}/>
                    <S.Title>{title}</S.Title>
                    <S.Author>{name}</S.Author>
                </S.BookImage>
                <S.ShadowImage>
                    { hover ? <Image src={HoverShadow} alt="hovered shadow image" width={158} height={87}/>
                    : <Image src={Shadow} alt="shadow image" width={158} height={87}/> }
                </S.ShadowImage>
            </S.ImageContainer>
        </S.BooksContainer>
    )
}

export default Books;