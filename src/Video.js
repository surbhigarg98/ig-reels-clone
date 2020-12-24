import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';

function Video({channel,url,AvatarSrc,likes,share,song}) {
    const[playing,setPlaying] = useState(false)
    const videoRef = useRef(null);  
   
    const videoClick=()=>{
        if(playing){
            //stop the video
            videoRef.current.pause();
            setPlaying(false)
        }else{
        //play the video
        videoRef.current.play();
        setPlaying(true)
        }
    }
    return (
        <div className="video">
            <VideoHeader/>
            <video
            ref={videoRef}
            onClick={videoClick}
            className="video__player" 
            src={url}
           alt="IG reel video" loop/>
           <VideoFooter
           channel={channel}
           likes={likes}
           share={share}
           AvatarSrc={AvatarSrc}
           song={song} />
        </div>
    )
}

export default Video
