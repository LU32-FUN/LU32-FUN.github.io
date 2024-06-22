import * as Three from 'three'

class SpaceShape {
    mesh: Three.Mesh
    
    constructor() {
        const geometry = new Three.ConeGeometry(0.5, 1, 4)
        const material = new Three.MeshPhongMaterial({ color: 0xff0000 })
        this.mesh = new Three.Mesh(geometry, material)
    }
    
    update(deltaTime: number) {
        const rotationSpeed = 0.01 * deltaTime / 33
        this.mesh.rotation.x += rotationSpeed
        this.mesh.rotation.y += rotationSpeed
        this.mesh.position.x = Math.sin(performance.now() / 1000) * 2
    }
    
    dispose() {
        this.mesh.geometry.dispose()
    }
}

export default SpaceShape