import ReactPlayer from "react-player"
import * as S from "./styles"

interface PropsType {
    url: string
}

const ResponsivePlayer = ({url}:PropsType) => {
      return (
        <S.Outer>
          <ReactPlayer
            className='react-player'
            url={url}
            controls={true}
            width='100%'
            height='100%'
          />
        </S.Outer>
      )
}

export default ResponsivePlayer