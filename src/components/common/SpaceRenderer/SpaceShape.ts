import * as Three from 'three'

class SpaceShape {
    mesh: Three.Mesh
    seed: number
    
    constructor(radius: number=1, height: number=1, segments: number=3, color: number=0xffffff, seed: number=0) {
        const geometry = new Three.ConeGeometry(radius, height, segments)
        const material = new Three.MeshPhongMaterial({ color: color })
        this.mesh = new Three.Mesh(geometry, material)
        this.seed = seed
    }
    
    dispose() {
        this.mesh.geometry.dispose()
    }
}

export default SpaceShape