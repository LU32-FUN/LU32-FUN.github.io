import { createStore } from "solid-js/store"

namespace MusicManager {
    const [music, setMusic] = createStore<{currentSong:string|null}>({
        currentSong: null,
    })
    
    export function getCurrentSong() {
        return music.currentSong
    }
    
    export function setCurrentSong(song: string|null) {
        setMusic("currentSong", song)
    }
}

export default MusicManager