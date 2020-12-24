
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase';
import Video from './Video';

function App() {
  const [reels,setReels] = useState([])
  useEffect(()=>{
  db.collection('reels').onSnapshot((snapshot)=>(
    setReels(snapshot.docs.map(doc=>(doc.data())))
  ))
  },[])
  return (
    <div className="App">
     <div className="app__top">
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="logo" className="app__logo"/>
       <h1>Reels</h1>
     </div>
     <div className="app__videos">
       {/* container which will have app videos (scrollable container) */}
       {reels.map(({channel, url, AvatarSrc,likes,share,song})=>(
         <Video 
         channel={channel}
         url = {url}
         AvatarSrc={AvatarSrc}
         likes={likes}
         share={share}
         song={song}/>
       ))}

     </div>
         </div>
  );
}

export default App;
