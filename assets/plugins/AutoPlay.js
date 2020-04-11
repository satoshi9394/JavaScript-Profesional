function AutoPlay() {}

AutoPlay.prototype.run = function(player){
    console.log(player.muted)
    if(!player.muted) {
        player.muted = true;
        console.log(player.muted)
    }
    player.play()
}

export default AutoPlay;