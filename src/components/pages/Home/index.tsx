
import styles         from './styles.module.css'
import Popup          from '$/src/components/common/Popup'
import SpaceRenderer  from '@/components/common/SpaceRenderer'
import LU32Img        from '@/assets/images/LU32.png'
import Container      from "@/components/common/Container"
import AppExplorer    from '@/components/common/AppExplorer'
import ExplorerMP3    from '@/assets/audio/Explorer.mp3'
import GlobalSettings from '@/store/GlobalSettings'

import { createSignal, Show } from 'solid-js'

function Home() {
  const [selectedOption, setSelectedOption] = createSignal('')
  const [showWelcome, setShowWelcome] = createSignal(true)
  const [showAppManager, setShowAppManager] = createSignal(false)
  
  function onProceed() {
    setShowWelcome(false)
    setShowAppManager(true)
  }
  
  function onDecline() {
    setShowWelcome(false)
  }
  
  return (
    <div>
      <Show when={GlobalSettings.settings.show3DBackground}>
        <SpaceRenderer width={window.innerWidth} height={window.innerHeight} />
      </Show>
      
      <Show when={showWelcome()}>
        <Popup title="NOTICE" width={300} height={300}>
          <Container align='center' justify='center'>
            <img src={LU32Img} alt="LU32" class={styles['logo']} />
          </Container>
          
          <Container align='center'>
            This domain is maintained by LB.
          </Container>
          
          <select value={selectedOption()} onChange={(e) => setSelectedOption(e.target.value)}>
            
            <option value=""> Choose your destination </option>
            <option value="classic"> Deprecated </option>
            <option value="fun"> LU32 </option>
            
          </select>
          
          <Container align='center'>
            <div class={styles['button-container']}>
              <button class={styles.button} onClick={onDecline}> Decline </button>
              <button class={styles.button} onClick={onProceed}> Proceed </button>
            </div>
          </Container>
          
        </Popup>
      </Show>
      
      <Show when={showAppManager()}>
        <audio src={ExplorerMP3} loop autoplay />
        <AppExplorer />
      </Show>
    </div>
  )
}

export default Home