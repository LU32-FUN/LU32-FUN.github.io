import { onCleanup, onMount } from 'solid-js'
import SpaceScene from './SpaceScene'
import SpaceShape from './SpaceShape'

type SpaceRendererProps = {
  width  : number
  height : number
}

function SpaceRenderer(props: SpaceRendererProps) {
  let spaceScene = new SpaceScene(props.width, props.height, [])
  
  onMount(() => {
    const shapes = [
      new SpaceShape(),
      new SpaceShape(),
      new SpaceShape()
    ]
    
    shapes.forEach(shape => spaceScene.addShape(shape))
    
    const render = () => {
      shapes.forEach(shape => shape.update(33))
      spaceScene.render()
      requestAnimationFrame(render)
    }
    
    requestAnimationFrame(render)
  })
  
  onCleanup(() => {
    spaceScene.dispose()
  })
  
  return (
    <div>
      {spaceScene.canvas}
    </div>
  )
}

export default SpaceRenderer