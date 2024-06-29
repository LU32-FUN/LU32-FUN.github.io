
import { createSignal, Show } from 'solid-js'
import Popup     from '@/components/common/Popup'
import css       from './index.module.css'
import Container from '@/components/common/Container'

import AppIcon   from '@/components/apps/AppIcon'
import Welcome   from '@/components/apps/Welcome'
import Settings  from '@/components/apps/Settings'
import AboutIcon from '@/assets/icons/about.png'

function AppExplorer() {
  
  const [selectedOption, setSelectedOption] = createSignal('')
  
  return (
    <>
      <Popup title="LU32 Explorer" width={500} height={256}>
        
        <Container align='center' justify='center'>
          <div class={css["app-container"]}>
            <AppIcon name="About" icon={AboutIcon} onClick={() => {setSelectedOption('about')}} />
            <AppIcon name="Settings" onClick={() => {setSelectedOption('settings')}} />
          </div>
        </Container>
        
        <div>
          <button> PLAY </button>
        </div>
      </Popup>
      
      <Show when={selectedOption() === 'about'}>
        <Welcome />
      </Show>
      
      <Show when={selectedOption() === 'settings'}>
        <Settings />
      </Show>
    </>
  )
}

export default AppExplorer