
import styles        from './styles.module.css'
import Popup         from '$/src/components/common/Popup'
import SpaceRenderer from '@/components/common/SpaceRenderer'
import LU32Img       from '@/assets/images/LU32.png'
import Container     from "@/components/common/Container"

function Home() {
  return (
    <div>
      <SpaceRenderer width={window.innerWidth} height={window.innerHeight} />
      
      <Popup title="NOTICE" width={300} height={256}>
        <Container align='center' justify='center'>
          <img src={LU32Img} alt="LU32" class={styles['logo']} />
        </Container>
        
        <Container align='center'>
          This domain is maintained by LB.
        </Container>
        
        <Container align='center'>
          <div class={styles['button-container']}>
            <button class={styles.button}> Decline </button>
            <button class={styles.button}> Proceed </button>
          </div>
        </Container>
        
      </Popup>
    </div>
  )
}

export default Home