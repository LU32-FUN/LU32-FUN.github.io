


window.onload = function() {
    let audioPlayer = document.getElementById('audio-player')
    let audioButton = document.getElementById('audio-toggle-button')
    let reaction_gif = document.getElementById('reaction-gif')
    
    let disappointed = "assets/images/disappointed.png"
    let playing = "assets/images/boombox.gif"
    
    audioButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.currentTime = 0
            audioPlayer.play()
            audioButton.innerHTML = 'SHUT UP'
            reaction_gif.src = playing
        } else {
            audioPlayer.pause()
            audioButton.innerHTML = 'PLAY IT AGAIN'
            reaction_gif.src = disappointed
        }
    })
}


