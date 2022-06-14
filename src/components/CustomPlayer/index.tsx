import { useRef } from "react"
import ReactPlayer from "react-player"

interface PropsType {
    url: string
    isPlaying: boolean[]
    idx: number
}

interface playingType {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number
}

const CustomPlayer = ({url, isPlaying, idx}:PropsType) => {
    const hostVideo = useRef<ReactPlayer>(null)

    const playingControl = (state:playingType) => {        
        if (state.played >= 0.1) {
            hostVideo.current?.seekTo(0, "seconds")            
        }
    }

    return ( 
        <ReactPlayer
            className='react-player'
            ref={hostVideo}
            onProgress={playingControl}
            url={url}
            width={800}
            height={450}
            playing={isPlaying[idx]}
            loop={true}
        />
    )
}

export default CustomPlayer