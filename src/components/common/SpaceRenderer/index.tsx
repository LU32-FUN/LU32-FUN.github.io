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
      new SpaceShape(
        { radius: 1, height: 2, segments: 4, color: 0xff0000 },
        { position: { x: 6, y: -1, z: 2 }, rotation: { x: 0.02, y: 0, z: 0.03 } }
      ),
      new SpaceShape(
        { radius: 1, height: 2, segments: 3, color: 0x00ff00 },
        { position: { x: 2, y: 18, z: 1 }, rotation: { x: 0, y: 0.02, z: 0 } }
      ),
      new SpaceShape(
        { radius: 1, height: 2, segments: 4, color: 0x0000ff },
        { position: { x: -4, y: 7, z: 24 }, rotation: { x: 0.01, y: 0.005, z: 0.01 } }
      )
    ]
    
    shapes.forEach(shape => spaceScene.addShape(shape))
    
    function render(currentTime: number) {
      for (let shape of shapes) {
        shape.mesh.position.x = Math.sin(shape.velocity.position.x + currentTime * 0.002)
        shape.mesh.position.y = Math.cos(shape.velocity.position.y + currentTime * 0.002)
        shape.mesh.position.z = Math.sin(shape.velocity.position.z + currentTime * 0.002)
        shape.mesh.rotation.x += shape.velocity.rotation.x
        shape.mesh.rotation.y += shape.velocity.rotation.y
        shape.mesh.rotation.z += shape.velocity.rotation.z
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