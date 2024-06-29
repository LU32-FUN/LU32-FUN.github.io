import { createStore } from "solid-js/store"

namespace MusicManager {
    const [music, setMusic] = createStore<{currentSong?:string}>({
        currentSong: undefined,
    })
    
    export function getCurrentSong() {
        return music.currentSong
    }
    
    export function setCurrentSong(song: string) {
        setMusic("currentSong", song)
        console.log(`Set current song to "${song}"`)
    }
    
    export function stopMusic() {
        setMusic("currentSong", undefined)
        console.log(`Stopped music`)
    }
}

export default MusicManager