import styled from "@emotion/styled";

export const WriteEssayContainer = styled.section`
    margin-top: 60px;
    margin-left: 20px;
    margin-right: 20px;

    .ql-editor {
    min-height: 500px;
    outline: none;
  }

  .ql-container {
    font-size: 15px;    
  }
`

export const Title = styled.input`
    height: 120px;
    width: 100%;
    border: none;
    font-size: 36px;
    font-weight: bold;
    outline: none;

    ::placeholder {
        font-size: 36px;
        font-weight: bold;
    }
`

export const ButtonContainer = styled.div`
    margin-top: 55px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    column-gap: 26px;
`