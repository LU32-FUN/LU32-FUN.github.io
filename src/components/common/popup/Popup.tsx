import { Component, createSignal, onCleanup, Show } from "solid-js"
import './Popup.css'
import { JSX } from "solid-js/h/jsx-runtime"

type PopupProps = {
  title     : string
  text?     : string
  children? : Component|JSX.Element
  buttons?  : Component[]
  width?    : number
  height?   : number
}

function Popup(props: PopupProps): any {
  const DEFAULT_WIDTH  = 240
  const DEFAULT_HEIGHT = 120
  
  const WIDTH  = props.width ? props.width : DEFAULT_WIDTH
  const HEIGHT = props.height ? props.height : DEFAULT_HEIGHT
  
  const INITIAL_X = (window.innerWidth - WIDTH) / 2
  const INITIAL_Y = 40
  
  const [position, setPosition] = createSignal({ x: INITIAL_X, y: INITIAL_Y })
  
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
      left   : `${position().x}px`,
      top    : `${position().y}px`,
      width  : `${WIDTH}px`,
      height : `${HEIGHT}px`
    }}>
      <div class='title-bar' onMouseDown={startDrag}>
        {props.title}
      </div>
      
      <div class='content'>
        {props.text}
        <Show when={props.children}>
          {props.children as Component}
        </Show>
      </div>
    </div>
  )
}

export default Popup