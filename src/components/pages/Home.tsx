
import './Home.css'
import Popup from '@/components/common/Popup'
import LU32Img from '@/assets/images/LU32.png'

function Home() {
  
  return (
    <div>
      <Popup title="NOTICE" width={256} height={300}>
        <img src={LU32Img} alt="LU32" />
        <br />
        <b>This domain is maintained by LB.</b>
      </Popup>
    </div>
  )
}

export default Home