
import './Home.css'
import Popup from '@/components/common/Popup'
import LU32Img from '$/assets/lu32.png'

function Home() {
  
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      
      <Popup title="NOTICE" width={256} height={300}>
        <b>This domain is maintained by LB.</b>
      </Popup>
    </div>
  )
}

export default Home