import * as THREE from 'three'
import Resources from "./utils/Resource"
import vertexShader from './Shaders/vertexShader'
import fragmentShader from './Shaders/fragmentShader'



let instance = null

export default class Experience {
    constructor(_canvas, largeScreen) {
        if (instance) {
            return instance
        }

        instance = this
        this.canvas = _canvas

        this.cursor = {
            x: 0,
            y: 0
        }


        this.setUpSize()
        this.setUpTime()

        this.resources = new Resources([])
        this.scene = new THREE.Scene()

        this.setUpCamera()
        this.setUpRenderer()

        this.galaxyGeometry = null
        this.galaxyMaterial = null
        this.galaxy = null

       


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
    setUpTime()
    {
        this.time = new THREE.Clock()

        window.requestAnimationFrame(() => {
            this.tick()
        })
    }
    setUpSize()
    {
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
    }
    setUpCamera(){
        this.camera = new THREE.PerspectiveCamera(45, this.sizes.width / this.sizes.height, 0.1, 100)
        this.camera.position.set(0, 0, 7.5)
        this.scene.add(this.camera)
    }

    setUpRenderer(){
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
        })

        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
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
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
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


    

    createStar = (geometry, material) => {

        const star = new THREE.Mesh(geometry, material,);

        star.position.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 5
        );

        return star;
    }

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