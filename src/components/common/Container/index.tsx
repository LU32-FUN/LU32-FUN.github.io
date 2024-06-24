import { JSX } from 'solid-js'

type ContainerProps = {
  align?    : 'center' | 'left' | 'right'
  justify?  : 'center' | 'left' | 'right'
  children? : JSX.Element[] | JSX.Element
}

function Container(props: ContainerProps) {
  
  const STYLE = {
    display        : 'flex',
    flexDirection  : 'row',
    alignItems     : props.align   || 'center',
    justifyContent : props.justify || 'center'
  }
  
  return (
    <div style={STYLE}>
      {props.children}
    </div>
  )
}

export default Container