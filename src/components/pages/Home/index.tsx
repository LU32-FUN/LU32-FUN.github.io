
import './styles.css'
import Popup from '$/src/components/common/Popup'
import SpaceRenderer from '@/components/common/SpaceRenderer'
import LU32Img from '@/assets/images/LU32.png'

function Home() {
  return (
    <div>
      <SpaceRenderer width={window.innerWidth} height={window.innerHeight} />
      
      <Popup title="NOTICE" width={256} height={300}>
        <img src={LU32Img} alt="LU32" />
        <br />
        <b>This domain is maintained by LB.</b>
      </Popup>
    </div>
  )
}

export default Home