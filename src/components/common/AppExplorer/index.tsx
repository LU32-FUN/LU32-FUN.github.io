
import Popup     from '@/components/common/Popup'
import css       from './index.module.css'
import Container from '@/components/common/Container'

function AppExplorer() {
  return (
    <Popup title="EXPLORER.L32" width={500} height={256}>
      <Container align='center' justify='center'>
        <div class={css["app-container"]}>
          hi
        </div>
      </Container>
      <div>
        <button> Execute </button>
      </div>
    </Popup>
  )
}

export default AppExplorer