
import css from './index.module.css'
import { Component } from 'solid-js'
import DefaultIcon from '@/assets/icons/default.png'

type AppIconProps = {
  name   : string
  icon?  : string
  popup? : Component
}

function AppIcon(props: AppIconProps) {
  
  const ICON = props.icon || DefaultIcon
  
  return (
    <button class={css.container}>
      <img class={css['app-icon']} src={ICON} />
      <div> {props.name} </div>
    </button>
  )
}

export default AppIcon