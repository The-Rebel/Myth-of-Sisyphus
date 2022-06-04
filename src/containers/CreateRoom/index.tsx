import { useEffect, useState } from "react"
import * as S from "./styles"
import Image from "next/image"
import Empty from "../../assets/img/empty.svg"

const CreateRoomContainer = () => {
    const [img, setImg] = useState<any>(Empty)

    const onChangeImg = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log("in onchaneg");
        

        if(e.target.files !== null) {
            console.log("in target change");
            
            setImg(URL.createObjectURL(e.target.files[0]))
        }        
    }

    useEffect(() => {
        console.log(img);
        
    })

    return (
        <S.Container>
            <S.Outer>
                <S.Top>
                    <S.ThumbnailContainer>
                        <div><S.Label>썸네일</S.Label></div>
                        <Image src={img} alt="selected thumbnail" width={400} height={230}/>
                        <input type="file" onChange={onChangeImg}></input>
                    </S.ThumbnailContainer>
                    <S.TopInner>
                        <S.Label>스터디룸 이름</S.Label>
                        <input></input>
                        <S.Label>동영상 url</S.Label>
                        <input></input>
                    </S.TopInner>
                </S.Top>
                <S.DescContainer>
                    <div><S.Label>스터디룸 설명</S.Label></div>
                    <textarea></textarea>
                </S.DescContainer>
            </S.Outer>
        </S.Container>
    )
}

export default CreateRoomContainer