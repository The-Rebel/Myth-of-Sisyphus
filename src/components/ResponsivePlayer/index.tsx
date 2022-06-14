import { useRef } from "react"
import ReactPlayer from "react-player"
import * as S from "./styles"

interface PropsType {
    url: string,
    isPlaying: boolean
}

interface playingType {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number
}

const ResponsivePlayer = ({url, isPlaying}:PropsType) => {
    const hostVideo = useRef<ReactPlayer>(null)

    const playingControl = (state:playingType) => {        
        if (state.played >= 0.1) {
            hostVideo.current?.seekTo(0, "seconds")
            console.log("dnskfnklsnfklsn");
            
        }
    }

    return ( 
        // <S.Outer>
        <ReactPlayer
            className='react-player'
            ref={hostVideo}
            onProgress={playingControl}
            url={url}
            width='100%'
            height='100%'
            playing={isPlaying}
            controls={true}
            loop={true}
        />
        // </S.Outer>
    )
}

export default ResponsivePlayer