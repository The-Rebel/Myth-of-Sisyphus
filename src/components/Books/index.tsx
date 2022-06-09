import Image from "next/image";
import Bookimg from "../../assets/img/bookimage.svg"
import * as S from "./styles"

interface BookPropsType {
    title: string,
    name: string
}

const Books = ({title, name}: BookPropsType) => {
    return (
        <S.BooksContainer>
            <Image src={Bookimg} alt="book image" width={158} height={469}/>
        </S.BooksContainer>
    )
}

export default Books;