import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
import { Favorite, ModeComment, MoreHoriz, Send } from '@material-ui/icons';

function VideoFooter({channel,likes,share,song,AvatarSrc}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <Avatar src={AvatarSrc}/>
                <h5>
                    {channel} • <Button>follow</Button>

                </h5>
            </div>
            <div className="videoFooter__ticker">
                <MusicNoteIcon className="music__icon"/>
                <Ticker mode="smooth">
                    {({index})=>(
                        <>
                        <h1>{song}</h1>
                        </>
                    )}
                </Ticker>
            </div>
            <div className="videoFooter__actions">
                <div className="videoFooter__actionsLeft">
                 <Favorite />
                 <ModeComment />
                 <Send/>
                 <MoreHoriz/>
                </div>
                <div className="videoFooter__actionsRight">
                    <div className="videoFooter__stats">
                        <Favorite/>
                        <p>{likes}</p>
                    </div>
                    <div className="videoFooter__stats">
                        <ModeComment/>
                        <p>{share}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
