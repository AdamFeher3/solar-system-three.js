import { LoadingManager } from "three";

export class Render {

    /**
     * @param {LoadingManager} loadManager
     */
    constructor(world, camera, planets, loadManager) {
        
        this.world = world;
        this.planets = planets;
        this.camera = camera;
        this.loadManager = loadManager;

        this.loaded = false;
        this.firstRender = false;

        // TRACK WHEN ALL ASSETS HAVE FINISHED LOADING
        loadManager.onLoad = () => {
            this.loaded = true;
        };

        this.frame = this.frame.bind(this);
    }

    frame() {

        // UPDATE THE CAMERA CONTROLS
        this.camera.update();

        // ANIMATE THE PLANETS
        this.planets.animate();

        // RENDER THE SCENE
        this.world.renderer.render(
            this.world.scene,
            this.world.camera
        );

        // SHOW THE MAIN CONTENT AFTER LOADING AND FIRST RENDER
        if ( !this.firstRender && this.loaded ) {

            this.firstRender = true;
            const main = document.querySelector(".main");
            if ( main ) main.style.display = "block";
        }
        
        requestAnimationFrame(this.frame);
    }

    // START THE RENDER LOOP
    start = () => this.frame();
}