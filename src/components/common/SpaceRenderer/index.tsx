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
    const shapes: SpaceShape[] = []
    
    const DESATURATED_COLORS = [
      0x9E9E9E, 0x795548, 0x607D8B, 0x546E7A, 0x6D4C41,
      0x757575, 0x616161, 0x90A4AE, 0xB0BEC5, 0xCFD8DC,
      0xBDBDBD, 0x78909C, 0x8D6E63, 0xA1887F, 0xD7CCC8,
      0xBCAAA4, 0xCCCCCC, 0x455A64, 0x37474F, 0x263238,
      0x827717, 0x9E9D24, 0x33691E, 0x2E7D32, 0x558B2F,
      0x827717, 0x6D4C41, 0x757575, 0x546E7A, 0x5D4037
    ]
    
    const OBJECTS = 60
    
    for (let i = 0; i < OBJECTS; i++) {
      const RADIUS   = Math.random() * 0.2 + 1
      const HEIGHT   = Math.random() * 0.5 + 1
      const SEGMENTS = Math.floor(Math.random() * 3) + 2
      const COLOR    = DESATURATED_COLORS[Math.floor(Math.random() * DESATURATED_COLORS.length)]
      const POSITION = { x: Math.random() * 48 - 24, y: Math.random() * 48 - 24, z: Math.random() * 200 - 100 }
      const ROTATION = { x: Math.random() * 0.01, y: Math.random() * 0.01, z: Math.random() * 0.05 }
      
      shapes.push(new SpaceShape(
        { radius: RADIUS, height: HEIGHT, segments: SEGMENTS, color: COLOR },
        { position: POSITION, rotation: ROTATION }
      ))
    }
    
    shapes.forEach(shape => spaceScene.addShape(shape))
    
    function render(currentTime: number) {
      for (let shape of shapes) {
        shape.mesh.position.x = Math.sin(shape.velocity.position.x + currentTime * 0.0001) * 6
        shape.mesh.position.y = Math.cos(shape.velocity.position.y + currentTime * 0.0001) * 6
        shape.mesh.position.z = Math.cos(shape.velocity.position.z + currentTime * 0.0005) * 20
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