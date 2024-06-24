import { JSX } from 'solid-js'

type ContainerProps = {
  align?    : 'center' | 'left' | 'right'
  justify?  : 'center' | 'left' | 'right'
  children? : JSX.Element[] | JSX.Element
}

function Container(props: ContainerProps) {
  
  const STYLE: JSX.CSSProperties = {
    'display'         : 'flex',
    'flex-direction'  : 'column',
    'align-items'     : props.align   || 'center',
    'justify-content' : props.justify || 'center',
  }
  
  return (
    <div style={STYLE}>
      {props.children}
    </div>
  )
}

export default Container