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
      new SpaceShape(1, 2, 3, 0xff0000, 0.1),
      new SpaceShape(2, 3, 4, 0xffff00, 0.8),
      new SpaceShape(1, 1, 3, 0x00ffff, 1.6),
    ]
    
    shapes.forEach(shape => spaceScene.addShape(shape))
    
    const render = () => {
      for (let shape of shapes) {
        shape.mesh.rotation.x += 0.01 * shape.seed
        shape.mesh.rotation.y += 0.01 * shape.seed
        shape.mesh.position.x = Math.sin(shape.mesh.rotation.x) + shape.seed*5-5
        shape.mesh.position.y = Math.cos(shape.mesh.rotation.y) * shape.seed
        shape.mesh.position.z = 1 * shape.seed
      }
      
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