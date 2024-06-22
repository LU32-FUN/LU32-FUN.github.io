import { Component, onCleanup, onMount } from 'solid-js'
import { JSX } from 'solid-js/h/jsx-runtime'
import * as Three from 'three'

type SpaceRendererProps = {
  width    : number
  height   : number
  children : JSX.Element[]|Component[]
}

function SpaceRenderer(props: SpaceRendererProps) {
  let canvas   : HTMLCanvasElement
  let renderer : Three.WebGLRenderer
  let scene    : Three.Scene
  let camera   : Three.PerspectiveCamera
  
  function init() {
    const FOV          = 75
    const ASPECT       = props.width / props.height
    const NEAR         = 0.1
    const FAR          = 1000
    const ANTI_ALIASED = false
    
    scene = new Three.Scene()
    camera = new Three.PerspectiveCamera(FOV, ASPECT, NEAR, FAR)
    camera.position.z = 5
    
    renderer = new Three.WebGLRenderer({ antialias: ANTI_ALIASED })
    renderer.setSize(props.width, props.height)
    canvas = renderer.domElement
    
    const DIRECTIONAL_LIGHT = new Three.DirectionalLight(0xffffff, 1)
    DIRECTIONAL_LIGHT.position.set(1, 1, 1)
    scene.add(DIRECTIONAL_LIGHT)
    
    const AMBIENT_LIGHT = new Three.AmbientLight(0x808080)
    scene.add(AMBIENT_LIGHT)
  }
  
  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  
  onMount(() => {
    init()
    animate()
  })
  
  onCleanup(() => {
    renderer.dispose()
  })
  
  return <canvas ref={canvas!} />
}

export default SpaceRenderer