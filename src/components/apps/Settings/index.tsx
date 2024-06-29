import Popup from '@/components/common/Popup'
import GlobalSettings from '@/store/GlobalSettings'

function Settings() {
  
  function toggle3DObjects() {
    GlobalSettings.setSettings('show3DBackground', !GlobalSettings.settings.show3DBackground)
  }
  
  return (
    <Popup title="Settings" width={300} height={300}>
      <button onClick={toggle3DObjects}> Toggle 3D Objects </button>
      <div>Showing 3D objects? {GlobalSettings.settings.show3DBackground ? "Yes" : "No"}</div>
    </Popup>
  )
}

export default Settings