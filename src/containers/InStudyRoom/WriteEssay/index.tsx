import * as S from "./styles"
import dynamic from "next/dynamic";
import ActiveButton from "../../../components/ActiveButton";
import "react-quill/dist/quill.snow.css";
const QuillWrapper = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });

const WriteEssayContainer = () => {
    const modules = {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"], 
          ],
        }

    return (
        <S.WriteEssayContainer>
            <S.Title placeholder="제목을 입력하세요"></S.Title>
            <QuillWrapper
                modules={modules} 
                // modules={{ toolbar: false }} 
                theme="snow"/>
            <S.ButtonContainer>
                <ActiveButton>임시저장</ActiveButton>
                <ActiveButton>에세이 등록</ActiveButton>
            </S.ButtonContainer>
        </S.WriteEssayContainer>
    )
}

export default WriteEssayContainer;