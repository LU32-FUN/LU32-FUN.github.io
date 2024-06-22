import { onCleanup, onMount } from "solid-js"
import * as Three from "three"

function BackgroundGL() {
  
  let canvas   : HTMLCanvasElement
  let renderer : Three.WebGLRenderer
  let scene    : Three.Scene
  let camera   : Three.PerspectiveCamera
  let pyramid  : Three.Mesh
  
  function initRenderer() {
    scene = new Three.Scene()
    camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5
    
    renderer = new Three.WebGLRenderer({ antialias: false })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    canvas = renderer.domElement
    
    const geometry = new Three.ConeGeometry(0.5, 1, 4)
    const material = new Three.MeshPhongMaterial({ color: 0xff0000 })
    pyramid = new Three.Mesh(geometry, material)
    scene.add(pyramid)
    
    const DIRECTIONAL_LIGHT = new Three.DirectionalLight(0xffffff, 1)
    DIRECTIONAL_LIGHT.position.set(1, 1, 1)
    scene.add(DIRECTIONAL_LIGHT)
    
    const AMBIENT_LIGHT = new Three.AmbientLight(0x808080)
    scene.add(AMBIENT_LIGHT)
  }
  
  let lastFrameTime = performance.now();
  const FRAME_INTERVAL = 1000 / 30;
  
  function animate() {
    requestAnimationFrame(animate);
  
    const currentTime = performance.now();
    const deltaTime = currentTime - lastFrameTime;
  
    if (deltaTime >= FRAME_INTERVAL) {
      // Update animations using deltaTime for smooth, frame rate independent animations
      const rotationSpeed = 0.01 * deltaTime / FRAME_INTERVAL;
      pyramid.rotation.x += rotationSpeed;
      pyramid.rotation.y += rotationSpeed;
      pyramid.position.x = Math.sin(currentTime / 1000) * 2;
  
      // Render the scene
      try {
        renderer.render(scene, camera);
      } catch (error) {
        console.error("Animation error:", error);
        // Optionally stop the animation loop on error
        // return;
      }
  
      // Adjust for the fraction of the interval that has passed since the last frame
      lastFrameTime = currentTime - (deltaTime % FRAME_INTERVAL);
    }
  }
  
  onMount(() => {
    initRenderer()
    animate()
  })
  
  onCleanup(() => {
    document.body.removeChild(renderer.domElement)
  })
  
  return (
    <canvas ref={canvas!} />
  )
}

export default BackgroundGL