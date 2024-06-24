import { JSX } from 'solid-js'
import './index.css'

type ContainerProps = {
  align?    : 'center' | 'left' | 'right'
  justify?  : 'center' | 'left' | 'right'
  children? : JSX.Element[]
}

function Container(props: ContainerProps) {
  
  const STYLE = {
    display        : 'flex',
    flexDirection  : 'row',
    alignItems     : props.align   || 'center',
    justifyContent : props.justify || 'center'
  }
  
  return (
    <div class='container' style={STYLE}>
      {props.children}
    </div>
  )
}

export default Container