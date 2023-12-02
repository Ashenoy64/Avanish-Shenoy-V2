import * as THREE from 'three'
import Resources from "./utils/Resource"


const particleVertex = `
uniform float uTime;
uniform float uSize;
uniform vec3 uPosition;

attribute float aScale;
attribute vec3 aRandomness;

varying vec3 vColor;
void main()
{

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec3 diffVector = modelPosition.xyz - uPosition;

    float angle = atan(diffVector.x, diffVector.z);
    float distanceFromCenter = length(diffVector.xz);
    float angleOffset = (1.0 / distanceFromCenter) * uTime * 0.2; //0.2

    angle += angleOffset;

    modelPosition.x = cos(angle) * distanceFromCenter + uPosition.x;
    modelPosition.z = sin(angle) * distanceFromCenter + uPosition.z;

    float slantFactor = 0.5; 

    float slantOffset = distanceFromCenter * slantFactor * sin(angle);

    modelPosition.y -= slantOffset;

    modelPosition.xyz += aRandomness;

    vec4 viewPosition = viewMatrix *modelPosition;
    vec4 projectedPosition =projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    gl_PointSize = uSize * aScale;
    gl_PointSize +=(1.0/ -viewPosition.z);

    vColor = color;

}
`

const particleFragment = `
varying vec3 vColor;
void main()
{
    float strength3 = distance(gl_PointCoord,vec2(0.5));
    strength3 =1.0 -strength3;
    strength3 =pow(strength3, 10.0);


    vec3 finalColor = mix(vec3(0.0),vColor,strength3);

    gl_FragColor = vec4(finalColor,1.0);
}
`


let instance = null

export default class Experience {
    constructor(_canvas, largeScreen) {
        if (instance) {
            return instance
        }

        instance = this

        this.canvas = _canvas

        this.largeScreen = largeScreen
        if (largeScreen) {
            this.objectDistance = 12;
            this.width = 3
        }
        else {
            this.objectDistance = 4.5;
            this.width = 0
        }

        //sizes
        this.sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
            pixelRatio: Math.min(window.devicePixelRatio, 2)
        }

        window.addEventListener('resize', () => {
            this.sizes.width = window.innerWidth
            this.sizes.height = window.innerHeight
            this.sizes.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.resize()
        })

        this.cursor = {
            x: 0,
            y: 0
        }



        this.time = new THREE.Clock()

        window.requestAnimationFrame(() => {
            this.tick()
        })




        this.resources = new Resources([])
        this.scene = new THREE.Scene()


        this.camera = new THREE.PerspectiveCamera(45, this.sizes.width / this.sizes.height, 0.1, 100)
        this.camera.position.set(0, 0, 7.5)
        this.scene.add(this.camera)

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
        })

        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))


        this.galaxyGeometry = null
        this.galaxyMaterial = null
        this.galaxy = null

        this.saturnRingGeometry = null
        this.saturnRingMaterial = null
        this.saturnRing = null
        this.saturn = null


        this.group = new THREE.Group()

        this.resources.on('ready', () => {

            this.createStarGroup()
            this.generateGalaxy()
            this.scene.add(this.group)

        })



        window.addEventListener('mousemove', (event) => {
            this.cursor.x = event.clientX / this.sizes.width - 0.5
            this.cursor.y = event.clientY / this.sizes.height - 0.5
        })

    }


    generateAmbientLight = () => {
        this.scene.add(new THREE.AmbientLight('#ffffff'))
    }

    resize() {
        this.camera.aspect = this.sizes.width / this.sizes.height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }
    tick() {
        const elapsedTime = this.time.getElapsedTime()

        if (this.galaxyMaterial)
            this.galaxyMaterial.uniforms.uTime.value = 17.5 + 0.25 * elapsedTime

        if (this.saturnRingMaterial)
            this.saturnRingMaterial.uniforms.uTime.value = elapsedTime

        if (this.saturn && this.saturn.material)
            this.saturn.rotation.y = elapsedTime * 0.5

        if (this.earth)
            this.earth.rotation.y = - elapsedTime * 0.1



        if (this.xwing) {
            this.xwing.rotation.y = elapsedTime * 0.05
            this.xwing.rotation.x = elapsedTime * 0.005
        }
        if (this.spaceShip) {
            this.spaceShip.rotation.y = elapsedTime * 0.05 + 5
            this.spaceShip.rotation.z = elapsedTime * -0.005
        }


        this.camera.position.x = (this.cursor.x - this.camera.position.x) * 0.1
        this.camera.position.y = (-this.cursor.y - this.camera.position.y) * 0.1
        this.renderer.render(this.scene, this.camera)

        window.requestAnimationFrame(() => {
            this.tick()
        })
    }


    generateGalaxy = () => {

        if (this.galaxy !== null) {
            this.galaxyGeometry.dispose()
            this.galaxyMaterial.dispose()
            this.scene.remove(this.galaxy)
        }

        this.galaxyGeometry = new THREE.BufferGeometry()

        const count = 45000
        const Radius = 6

        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const scale = new Float32Array(count)
        const randomness = new Float32Array(count * 3)
        const insideColor = new THREE.Color('#ec5300')
        const outsideColor = new THREE.Color('#2fb4fc')

        for (let i = 0; i < count; i++) {
            const i3 = i * 3

            const radius = Math.random() * Radius
            const branchAngle = (i % 4) / 4 * Math.PI * 2

            randomness[i3] = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : - 1) * 0.5 * radius
            randomness[i3 + 1] = Math.pow(Math.random(), Math.random()) * (Math.random() < 0.5 ? 1 : -1) * 0.5 * radius;
            randomness[i3 + 2] = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : - 1) * 0.5 * radius
            const _randomnessPower = 8
            const _randomness = 0.8
            const randomX =
                Math.pow(Math.random(), _randomnessPower) *
                (Math.random() < 0.5 ? 1 : -1) *
                 _randomness*
                radius;
            const randomY =
                Math.pow(Math.random(), _randomnessPower) *
                (Math.random() < 0.5 ? 1 : -1) *
                _randomness *
                radius;
            const randomZ =
                Math.pow(Math.random(), _randomnessPower) *
                (Math.random() < 0.5 ? 1 : -1) *
                _randomness *
                radius;

            randomness[i3] = randomX
            randomness[i3+1] = randomY
            randomness[i3+2] = randomZ


            positions[i3] = Math.cos(branchAngle) * radius
            positions[i3 + 1] = 0.5
            positions[i3 + 2] = Math.sin(branchAngle) * radius

            const mixedColor = insideColor.clone()
            mixedColor.lerp(outsideColor, radius / Radius)

            colors[i3] = mixedColor.r
            colors[i3 + 1] = mixedColor.g
            colors[i3 + 2] = mixedColor.b

            scale[i] = Math.random() * 1.5
        }

        this.galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        this.galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        this.galaxyGeometry.setAttribute('aScale', new THREE.BufferAttribute(scale, 1))
        this.galaxyGeometry.setAttribute('aRandomness', new THREE.BufferAttribute(randomness, 3))


        this.galaxyMaterial = new THREE.ShaderMaterial({

            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true,
            vertexShader: particleVertex,
            fragmentShader: particleFragment,
            transparent:true,
            uniforms: {
                uTime: { value: 0 },
                uSize: { value: 3 * this.renderer.getPixelRatio() },
                uPosition: { value: new THREE.Vector3(0, 0, 0) }
            }
        })

        this.galaxy = new THREE.Points(this.galaxyGeometry, this.galaxyMaterial)
        this.group.add(this.galaxy)
    }


    generateSaturn = () => {

        let pos_correction = this.largeScreen ? [2, -1, 0] : [0, 1, -4]
        let scale_correction = this.largeScreen ? [0, 0, 0] : [-0.25, -0.5, 0]

        if (this.saturnRing != null) {
            this.saturnRingGeometry.dispose()
            this.saturnRingMaterial.dispose()
            this.scene.remove(this.saturnRing)
        }

        this.saturnRingGeometry = new THREE.BufferGeometry()

        const count = 2000
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const scale = new Float32Array(count)
        const randomness = new Float32Array(count * 3)
        const insideColor = new THREE.Color('#ff6030')
        const outsideColor = new THREE.Color('#fff67f')


        const R1 = 2 + scale_correction[1]
        const R2 = 2.25 + scale_correction[1]

        for (let i = 0; i < count; i++) {
            const i3 = i * 3

            const angle = Math.random() * Math.PI * 2
            const distance = Math.random() * (R2 - R1) + R1

            randomness[i3] = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : - 1) * 0.5 * distance
            randomness[i3 + 1] = 0
            randomness[i3 + 2] = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : - 1) * 0.5 * distance

            positions[i3] = this.width + pos_correction[0] + Math.cos(angle) * distance
            positions[i3 + 1] = -this.objectDistance + pos_correction[1]
            positions[i3 + 2] = pos_correction[2] + Math.sin(angle) * distance

            // Color
            const mixedColor = insideColor.clone()
            mixedColor.lerp(outsideColor, distance / (R2))

            colors[i3] = mixedColor.r
            colors[i3 + 1] = mixedColor.g
            colors[i3 + 2] = mixedColor.b

            scale[i] = Math.random()
        }

        this.saturnRingGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        this.saturnRingGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        this.saturnRingGeometry.setAttribute('aScale', new THREE.BufferAttribute(scale, 1))
        this.saturnRingGeometry.setAttribute('aRandomness', new THREE.BufferAttribute(randomness, 3))

        this.saturnRingMaterial = new THREE.ShaderMaterial({
            depthWrite: true,
            blending: THREE.AdditiveBlending,
            vertexColors: true,
            vertexShader: particleVertex,
            fragmentShader: particleFragment,
            transparent: true,
            uniforms: {
                uTime: { value: 0 },
                uSize: { value: 5 * this.renderer.getPixelRatio() },
                uPosition: { value: new THREE.Vector3(this.width + pos_correction[0], pos_correction[1],) }
            }
        })

        this.saturnRing = new THREE.Points(this.saturnRingGeometry, this.saturnRingMaterial)
        this.group.add(this.saturnRing)


        const saturnGeo = new THREE.SphereGeometry(1 + scale_correction[0], 32, 32)

        const saturnMaterial = new THREE.MeshBasicMaterial({
            map: this.resources.items.saturn
        })

        this.saturn = new THREE.Mesh(saturnGeo, saturnMaterial)
        this.saturn.position.x = this.width + pos_correction[0]
        this.saturn.position.y = - this.objectDistance + pos_correction[1]
        this.saturn.position.z = pos_correction[2]


        this.group.add(this.saturn)

    }

    generateEarth = () => {
        let pos_correction = this.largeScreen ? [-4, -1, 0] : [0, 1, -4];
        let scale_correction = this.largeScreen ? [0, 0, 0] : [-0.0005, 0, 0]


        const earth_model = this.resources.items.earth_model

        earth_model.scene.position.set(this.width * -1 + pos_correction[0], - this.objectDistance * 2 + pos_correction[1], pos_correction[2])
        earth_model.scene.scale.set(0.003 + scale_correction[0], 0.003 + scale_correction[0], 0.003 + scale_correction[0])
        this.earth = earth_model.scene

        const earthLight = new THREE.DirectionalLight('#ffffff', 1)
        earthLight.position.set(this.width * 1 - pos_correction[0], - this.objectDistance * 2 + pos_correction[1])
        earthLight.target = this.earth
        this.group.add(earthLight)


        this.group.add(this.earth)




    }
    generateXwing = () => {
        let pos_correction = this.largeScreen ? [2, -1, 0] : [0, 0.5, -4];
        let scale_correction = this.largeScreen ? [0, 0, 0] : [-0.15, 0, 0]

        const xwing = this.resources.items.xwing
        xwing.scene.position.set(this.width * 1 + pos_correction[0], - this.objectDistance * 3 + pos_correction[1])
        xwing.scene.scale.set(0.25 + scale_correction[0], 0.25 + scale_correction[0], 0.25 + scale_correction[0])
        this.xwing = xwing.scene

        this.group.add(this.xwing)


    }

    generateSpaceShip = () => {
        let pos_correction = this.largeScreen ? [-2, +0.4, 0] : [0, 1.5, -4];
        let scale_correction = this.largeScreen ? [0, 0, 0] : [-2.5, 0, 0]
        const spaceShip = this.resources.items.spaceShip

        spaceShip.scene.position.set(this.width * -1 + pos_correction[0], - this.objectDistance * 4 + pos_correction[1])


        spaceShip.scene.scale.set(4 + scale_correction[0], 4 + scale_correction[0], 4 + scale_correction[0])
        this.spaceShip = spaceShip.scene

        this.group.add(this.spaceShip)
    }


    createStar = (geometry, material) => {

        const star = new THREE.Mesh(geometry, material,);

        star.position.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 5
        );

        return star;
    }

    // Create a group to hold the stars
    createStarGroup = () => {
        const geometry = new THREE.SphereGeometry(0.01);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, depthWrite: true });
        const starGroup = new THREE.Group();
        for (let i = 0; i < 300; i++) {
            const star = this.createStar(geometry, material);
            starGroup.add(star);
        }
        this.scene.add(starGroup)
    }



}