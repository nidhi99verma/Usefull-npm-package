import React from 'react';
import ReactPlayer from 'react-player'

export default function ReactPlayers() {
    
    return (
        <div>
            {/* w: 640 h: 360 */}
            <ReactPlayer
                width="500px"
                height="200px"
                controls
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                onReady={() => console.log('onReady callback')}
                onStart={() => console.log('onStart callback')}
                onPause={() => console.log('onPause callback')}
                onEnded={() => console.log('onEnded callback')}
                onError={() => console.log('onError callback')}
            />
            <br/>
            <ReactPlayer
                url='https://www.twitch.tv/videos/570405604'
                controls
                onReady={() => console.log('onReady callback')}
                onStart={() => console.log('onStart callback')}
                onPause={() => console.log('onPause callback')}
                onEnded={() => console.log('onEnded callback')}
                onError={() => console.log('onError callback')}
            />
        </div>
    )
}
