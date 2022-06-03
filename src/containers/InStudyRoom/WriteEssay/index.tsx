import * as S from "./styles"
import { RichTextEditor } from '@mantine/rte';
import { useEffect, useState } from "react";

const initialValue ='<h1 class="ql-align-center">제목</h1><p>내용</p>'

const WriteEssayContainer = () => {
    const [text, setText] = useState<string>(initialValue)

    return (
        <S.WriteEssayContainer>
            <input placeholder="제목을 입력하세요"></input>
            <RichTextEditor value={text} onChange={setText}
            controls={[
                ['bold', 'italic', 'underline', 'strike'],
                ['h1', 'h2', 'h3', 'h4'],
                ['unorderedList', 'orderedList'],
                ['blockquote', 'link'],
                ['alignLeft', 'alignCenter', 'alignRight']
            ]}/>
        </S.WriteEssayContainer>
    )
}

export default WriteEssayContainer;