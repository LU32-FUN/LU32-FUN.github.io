import SpaceShape from './SpaceShape'
import * as Three from 'three'

class SpaceScene {
    width    : number
    height   : number
    shapes   : SpaceShape[]
    canvas   : HTMLCanvasElement
    renderer : Three.WebGLRenderer
    scene    : Three.Scene
    camera   : Three.PerspectiveCamera
    
    constructor(width: number, height: number, shapes: SpaceShape[]) {
        const FOV          = 75
        const ASPECT_RATIO = width / height
        const NEAR         = 0.1
        const FAR          = 1000
        const ANTI_ALIASED = false
        
        this.width    = width
        this.height   = height
        this.shapes   = shapes
        this.canvas   = document.createElement('canvas')
        this.scene    = new Three.Scene()
        this.renderer = new Three.WebGLRenderer({ antialias: ANTI_ALIASED })
        this.camera   = new Three.PerspectiveCamera(FOV, ASPECT_RATIO, NEAR, FAR)
        this.setSize(width, height)
        
        this.camera.position.z = 5
        this.canvas = this.renderer.domElement
        
        const DIRECTIONAL_LIGHT = new Three.DirectionalLight(0xffffff, 1)
        DIRECTIONAL_LIGHT.position.set(1, 1, 1)
        this.scene.add(DIRECTIONAL_LIGHT)
        
        const AMBIENT_LIGHT = new Three.AmbientLight(0x808080)
        this.scene.add(AMBIENT_LIGHT)
    }
    
    setSize(width: number, height: number) {
        this.width  = width
        this.height = height
        this.renderer.setSize(width, height)
        this.camera.aspect = width / height
        this.camera.updateProjectionMatrix()
    }
    
    render() {
        this.renderer.render(this.scene, this.camera)
    }
    
    dispose() {
        this.renderer.dispose()
    }
    
    addShape(shape: SpaceShape) {
        this.shapes.push(shape)
        this.scene.add(shape.mesh)
    }
}

export default SpaceScene