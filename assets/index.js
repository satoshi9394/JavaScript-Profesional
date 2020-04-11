import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video, 
    plugins:[
        new AutoPlay()
    ] 
});

const btnPlay = document.getElementById('play');
btnPlay.onclick = () => player.togglePlay();

const btnMute = document.getElementById('mute');
btnMute.onclick = () => player.toggleMute();

