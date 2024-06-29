import { createStore } from "solid-js/store"

namespace MusicManager {
    const [music, setMusic] = createStore({
        currentSong: "song1",
    })
    
    export function getCurrentSong() {
        return music.currentSong
    }
    
    export function setCurrentSong(song: string) {
        setMusic("currentSong", song)
    }
}

export default MusicManager