import * as S from "./styles"
import { RichTextEditor } from '@mantine/rte';
import { useEffect, useState } from "react";
import ActiveButton from "../../../components/ActiveButton";

const initialValue =''

const WriteEssayContainer = () => {
    const [text, setText] = useState<string>(initialValue)

    return (
        <S.WriteEssayContainer>
            <S.Title placeholder="제목을 입력하세요"></S.Title>
            <RichTextEditor value={text} onChange={setText}
            controls={[
                ['bold', 'italic', 'underline', 'strike'],
                ['h1', 'h2', 'h3', 'h4'],
                ['unorderedList', 'orderedList'],
                ['blockquote', 'link'],
                ['alignLeft', 'alignCenter', 'alignRight']
            ]}
            className="textEditor"/> 
            
            <S.ButtonContainer>
                <ActiveButton>임시저장</ActiveButton>
                <ActiveButton>에세이 등록</ActiveButton>
            </S.ButtonContainer>
        </S.WriteEssayContainer>
    )
}

export default WriteEssayContainer;