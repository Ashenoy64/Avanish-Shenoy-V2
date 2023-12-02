import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import EventEmitter from './EventEmitter.js'

const sources=[
    
]

export default class Resources extends EventEmitter
{
    constructor()
    {
        super()

        this.sources = sources

        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0

        this.setLoaders()
        this.startLoading()
        setTimeout((e)=>{
            e.finished()
        },1000,this)
    }

    setLoaders()
    {
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader()
        this.loaders.textureLoader = new THREE.TextureLoader()
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
    }

    startLoading()
    {
        // Load each source
        for(const source of this.sources)
        {
            if(source.type === 'gltfModel')
            {
                this.loaders.gltfLoader.load(
                    source.path,
                    (file) =>
                    {
                        this.sourceLoaded(source, file)
                    }
                )
            }
            else if(source.type === 'texture')
            {
                const file =this.loaders.textureLoader.load(source.path)
            
                this.sourceLoaded(source,file)
            }
            else if(source.type === 'cubeTexture')
            {
                this.loaders.cubeTextureLoader.load(
                    source.path,
                    (file) =>
                    {
                        this.sourceLoaded(source, file)
                    }
                )
            }
        }
        this.trigger('ready')
    }

    sourceLoaded(source, file)
    {
        this.items[source.name] = file
        this.loaded++
        

    }
    finished()
    {

        if(this.loaded == sources.length)
            this.trigger('ready')
        
        else
        setTimeout((e)=>{
                e.finished()
    
            },1000,this)
        
    }
}