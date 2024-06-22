
import './Home.css'
import Popup from '@/components/common/Popup'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <Popup
        title  = "NOTICE"
        text   = "This domain is maintained by LB."
        width  = {256}
        height = {300}
      />
    </div>
  )
}

export default Home