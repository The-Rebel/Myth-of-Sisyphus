import * as S from "./styles";
import { BookList } from "../../constant";
import Books from "../../components/Books";

const BookContainer = () => {
    return (
        <S.BookContainer>
            <S.BookOuter>
                { BookList.map((book) => (
                    <Books key={book.id} title={book.title} name={book.name} />
                )) }
            </S.BookOuter>
        </S.BookContainer>
    )
}

export default BookContainer;