
import Popup     from '@/components/common/Popup'
import css       from './index.module.css'
import Container from '@/components/common/Container'

function AppExplorer() {
  return (
    <Popup title="LU32 Explorer" width={500} height={256}>
      <Container align='center' justify='center'>
        <div class={css["app-container"]}>
          
        </div>
      </Container>
      <div>
        <button> PLAY </button>
      </div>
    </Popup>
  )
}

export default AppExplorer