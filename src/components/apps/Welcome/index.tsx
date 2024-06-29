
import Popup from '@/components/common/Popup'
import EpicMP3 from '@/assets/audio/epic.mp3'
import MusicManager from '@/store/MusicManager'

function Welcome() {
  MusicManager.setCurrentSong(EpicMP3)
  
  return (
    <Popup title="Welcome" width={800} height={600} onClose={() => "hi"}>
      Welcome!
    </Popup>
  )
}

export default Welcome