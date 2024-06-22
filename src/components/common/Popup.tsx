import { Component, createSignal, onCleanup } from "solid-js"
import './Popup.css'

type PopupProps = {
  title    : string
  content? : Component
  buttons? : Component[]
}

function Popup(props: PopupProps): any {
  const [position, setPosition] = createSignal({ x: 0, y: 0 })
  
  function startDrag(e: MouseEvent) {
    const INITIAL_X = position().x
    const INITIAL_Y = position().y
    
    function onDrag(e2: MouseEvent) {
      setPosition({
        x: INITIAL_X + e2.clientX - e.clientX,
        y: INITIAL_Y + e2.clientY - e.clientY
      })
    }
    
    function stopDrag() {
      document.removeEventListener('mousemove', onDrag)
      document.removeEventListener('mouseup', stopDrag)
    }
    
    document.addEventListener('mousemove', onDrag)
    document.addEventListener('mouseup', stopDrag)
  }
  
  onCleanup(() => {
    document.removeEventListener('mousemove', startDrag)
    document.removeEventListener('mouseup', startDrag)
  })
  
  return (
    <div class='container' style={{
      left : `${position().x}px`,
      top  : `${position().y}px`
    }}>
      <div class='title-bar' onMouseDown={startDrag}>
        {props.title}
      </div>
    </div>
  )
}

export default Popup