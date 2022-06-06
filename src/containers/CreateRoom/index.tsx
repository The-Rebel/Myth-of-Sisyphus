import { useEffect, useState } from "react"
import * as S from "./styles"
import Image from "next/image"
import Empty from "../../assets/img/empty.svg"
import ActiveButton from "../../components/ActiveButton"

const CreateRoomContainer = () => {
    const [img, setImg] = useState<any>(Empty)
    const [isHover, setIsHover] = useState<boolean>(false)

    const onChangeImg = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files !== null) {
            setImg(URL.createObjectURL(e.target.files[0]))
        }
        setIsHover(false)
    }

    return (
        <S.Container>
            <S.Outer>
                <S.Top>
                    <S.ThumbnailContainer>
                        <div><S.Label>썸네일</S.Label></div>
                        <Image 
                            src={img} 
                            alt="selected thumbnail" 
                            width={400} 
                            height={230} 
                            onMouseEnter={() => setIsHover(true)} 
                            onMouseLeave={(() => setIsHover(false))} />
                        { isHover && 
                        <div>
                            <S.UploadLabel onMouseEnter={() => setIsHover(true)}>
                                <S.UploadImg 
                                    type="file" 
                                    onChange={onChangeImg} 
                                    className="uploadImg"
                                    onMouseEnter={() => setIsHover(true)} 
                                    accept="image/*"/>
                                썸네일 선택하기
                            </S.UploadLabel>
                        </div> }
                    </S.ThumbnailContainer>
                    <S.TopInner>
                        <S.Label>스터디룸 이름</S.Label>
                        <S.Input />
                        <S.Label>동영상 url</S.Label>
                        <S.Input />
                    </S.TopInner>
                </S.Top>
                <S.DescContainer>
                    <div><S.Label>스터디룸 설명</S.Label></div>
                    <S.Textarea />
                </S.DescContainer>
                <S.ActiveBtnContainer>
                    <ActiveButton>스터디룸 생성하기</ActiveButton>
                </S.ActiveBtnContainer>
            </S.Outer>
        </S.Container>
    )
}

export default CreateRoomContainer