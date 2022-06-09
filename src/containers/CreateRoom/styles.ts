import styled from "@emotion/styled";

export const Container = styled.section`
    margin-top: 60px;
    display: flex;
    justify-content :center;
    align-items: center;
`

export const Outer = styled.div`
    width: 1027px;
    display:flex;
    flex-direction: column;
    margin-top: 89px;
`

export const Top = styled.div`
    display:flex;
    flex-direction: row;
`

export const ThumbnailContainer = styled.div`
    display:flex;
    flex-direction: column;
    position: relative;
`

export const TopInner = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 27px;  
    height: 100%;
`

export const DescContainer = styled.div`
    margin-top: 74px;
    width: 100%;
`

export const Label = styled.label`
    font-size: 18px;
`

export const Input = styled.input`
    width: 600px;
    height: 85px;
    border: none;
    background-color: #F5F5F5;
    font-size: 18px;
`

export const Textarea = styled.textarea`
    outline: none;
    width: 1027px;
    height: 360px;
    resize: none;
    border: none;
    margin-top: 10px;
    font-size: 20px;
    padding: 10px;
    background-color: #F5F5F5;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';

    &:focus {
      border-left: 1px solid white;
    }
`

export const UploadImg = styled.input`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%  );

    display:none;
`

export const UploadLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%  );
    cursor: pointer;
    background-color: rgba(0,0,0,0.5);
    color: white;
    padding: 10px;
`

export const ActiveBtnContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
`