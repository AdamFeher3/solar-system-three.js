import * as tr from "three";
import { Lensflare, LensflareElement } from "three/addons/objects/Lensflare.js";
import { dom } from "../config/Constants.js";

export class World {

    /**
     * @param {tr.LoadingManager} loadManager
     */
    constructor(loadManager) {

        this.texLoad = new tr.TextureLoader(loadManager);

        // LOAD LENSFLARE TEXTURES
        const flare0 = this.texLoad.load("./res/flare/lensflare0.png");
        const flare1 = this.texLoad.load("./res/flare/lensflare1.png");
        const flare2 = this.texLoad.load("./res/flare/lensflare2.png");
        const flare3 = this.texLoad.load("./res/flare/lensflare3.png");
        
        // CREATE LENSFLARE
        const lensflare = new Lensflare();
        
        // SET LENSFLARE ELEMENTS
        lensflare.addElement(new LensflareElement(flare0, 25, 0));
        lensflare.addElement(new LensflareElement(flare3, 60, 0));
        lensflare.addElement(new LensflareElement(flare1, 40, 0.01));
        lensflare.addElement(new LensflareElement(flare2, 25, 0.03));
        lensflare.addElement(new LensflareElement(flare2, 20, 0.035));

        this.lensflare = lensflare;

        this.scene = null;
        this.camera = null;
        this.sunlight = null;
        this.ambientLight = null;
        this.renderer = null;
        this.spaceBackground = null;

        // SET THE SCENE'S BACKGROUND COLOR
        this.backgroundColor = new tr.Color("rgb(10,10,10)");

        // CONFIGURE THE CAMERA
        this.fov = 60;      // FIELD OF VIEW IN DEGREES
        this.near = 0.1;    // NEAR CLIPPING PLANE
        this.far = 200000;  // FAR CLIPPING PLANE

        // CONFIGURE THE LIGHTING
        this.lightColor = "white";
        this.sunlightIntensity = 2;
        this.ambientLightIntensity = 0.06;

        // CONFIGURE THE WEBGL RENDERER
        this.antialias = true;          // SMOOTH EDGES
        this.shadow = true;             // ENABLE SHADOWS
        this.renderDom = dom.canvas;
    }

    setup() {

        // SET THE CANVAS DIMENSIONS TO MATCH THE WINDOW SIZE
        dom.canvas.width = window.innerWidth;
        dom.canvas.height = window.innerHeight;

        // CREATE THE SCENE AND SET ITS BACKGROUND COLOR
        this.scene = new tr.Scene();
        this.scene.background = this.backgroundColor;

        // CREATE THE PERSPECTIVE CAMERA
        this.camera = new tr.PerspectiveCamera(
            this.fov,
            window.innerWidth / window.innerHeight,
            this.near,
            this.far
        );

        // SET THE INITIAL CAMERA POSITION AND VIEWING DIRECTION
        this.camera.position.set(0, 1000, 3000);
        this.camera.lookAt(0,0,0);
        
        // CREATE THE POINT LIGHT THAT SIMULATES SUNLIGHT
        this.sunlight = new tr.PointLight(
            this.lightColor,
            this.sunlightIntensity,
            0, 0
        );

        // POSITION THE LIGHT AT THE CENTER OF THE SCENE
        this.sunlight.position.set(0,0,0);

        this.sunlight.shadow.camera.far = this.far;
        this.sunlight.castShadow = true;

        // ADD LENSFLARE TO SUNLIGHT
        this.sunlight.add(this.lensflare);
        
        this.ambientLight = new tr.AmbientLight(
            this.lightColor,
            this.ambientLightIntensity
        );
        
        // ADD LIGHT SOURCES TO THE SCENE
        this.scene.add(this.sunlight);
        this.scene.add(this.ambientLight);

        // INITIALIZE THE WEBGL RENDERER
        this.renderer = new tr.WebGLRenderer({
            canvas: this.renderDom,
            antialias: this.antialias
        });

        // SET THE RENDERER SIZE TO MATCH THE WINDOW DIMENSIONS
        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        // ENABLE OR DISABLE SHADOW MAPPING
        this.renderer.shadowMap.enabled = this.shadow;

        this.renderer.shadowMap.type = tr.BasicShadowMap;
        this.renderer.outputColorSpace = tr.SRGBColorSpace;

        // CREATE A LARGE SPHERE TO ENCLOSE THE SOLAR SYSTEM
        const spaceGeo = new tr.SphereGeometry(190000, 20, 20);

        // LOAD THE SPACE TEXTURE AND CONFIGURE ITS MATERIAL
        const spaceMat = new tr.MeshBasicMaterial({
            map: this.texLoad.load("./res/map/space.jpg"),
            side: tr.BackSide,
            transparent: true,
            opacity: 0.25
        });

        // CREATE THE SPACE BACKGROUND MESH
        this.spaceBackground = new tr.Mesh(spaceGeo, spaceMat);

        // CENTER THE BACKGROUND SPHERE ON THE SCENE
        this.spaceBackground.position.set(0,0,0);

        this.scene.add(this.spaceBackground);
    }

    resize() {

        // GET THE UPDATED WINDOW DIMENSIONS
        const width = window.innerWidth;
        const height = window.innerHeight;

        // UPDATE THE CANVAS DIMENSIONS
        dom.canvas.width = width;
        dom.canvas.height = height;

        // RESIZE THE RENDERER TO MATCH THE WINDOW
        this.renderer.setSize(width, height);

        // UPDATE THE CAMERA'S ASPECT RATIO
        this.camera.aspect = width / height;

        this.camera.updateProjectionMatrix();
    }
}