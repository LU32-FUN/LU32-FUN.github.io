import * as Three from 'three'

type Shape = {
    radius   : number
    height   : number
    segments : number
    color    : number
}

type Velocity = {
    position: { x: number, y: number, z: number }
    rotation: { x: number, y: number, z: number }
}

class SpaceShape {    
    mesh     : Three.Mesh
    velocity : Velocity
    
    constructor(shape: Shape, velocity: Velocity) {
        const geometry = new Three.ConeGeometry(shape.radius, shape.height, shape.segments)
        const material = new Three.MeshPhongMaterial({ color: shape.color })
        this.mesh      = new Three.Mesh(geometry, material)
        this.velocity  = velocity
    }
    
    dispose() {
        this.mesh.geometry.dispose()
    }
}

export default SpaceShape