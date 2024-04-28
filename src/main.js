


window.onload = function() {
    let mainPopup = document.getElementById('main-popup')
    let mainPopupAcceptButton = document.getElementById('main-popup-accept')
    let mainPopupDeclineButton = document.getElementById('main-popup-decline')
    let funContent = document.getElementById('fun-content')
    
    let audioPlayer = document.getElementById('audio-player')
    let audioButton = document.getElementById('audio-toggle-button')
    let reaction_gif = document.getElementById('reaction-gif')
    
    let disappointed = "assets/images/disappointed.png"
    let playing = "assets/images/boombox.gif"
    
    mainPopupAcceptButton.addEventListener('click', function() {
        mainPopup.style.display = 'none'
        document.body.style.backgroundImage = "url('assets/images/space.gif')"
        funContent.style.display = 'block'
        audioPlayer.play()
    })
    
    mainPopupDeclineButton.addEventListener('click', function() {
        let mainPopupImage = document.getElementById('main-popup-image')
        let mainPopupText = document.getElementById('main-popup-text')
        mainPopupImage.src = disappointed
        mainPopupAcceptButton.style.display = 'none'
        mainPopupDeclineButton.style.display = 'none'
        mainPopupText.innerHTML = 'K bye'
    })
    
    audioButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.currentTime = 0
            audioPlayer.play()
            audioButton.innerHTML = 'SHUT UP'
            document.body.style.backgroundImage = "url('assets/images/space.gif')"
            reaction_gif.src = playing
        } else {
            audioPlayer.pause()
            audioButton.innerHTML = 'PLAY IT AGAIN'
            reaction_gif.src = disappointed
            document.body.style.backgroundColor = 'black'
            document.body.style.backgroundImage = ""
        }
    })
}


