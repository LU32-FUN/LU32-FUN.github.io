
import css from './index.module.css'
import DefaultIcon from '@/assets/icons/default.png'

type AppIconProps = {
  name     : string
  icon?    : string
  onClick? : () => void
}

function AppIcon(props: AppIconProps) {
  
  const ICON = props.icon || DefaultIcon
  
  return (
    <button class={css.container} onClick={props.onClick}>
      <img class={css['app-icon']} src={ICON} />
      <div> {props.name} </div>
    </button>
  )
}

export default AppIcon