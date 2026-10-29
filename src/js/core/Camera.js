import { Mesh, PerspectiveCamera, Vector3 } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { dom } from "../config/Constants.js";

export class Camera {

    /**
     * @param {PerspectiveCamera} camera
     * @param {Mesh} sun
     */
    constructor(camera, sun, planet) {

        this.camera = camera;
        this.sun = sun;
        this.planet = planet;

        // TRACK THE CAMERA'S MOVEMENT STATE AND SPEED
        this.isMoving = false;
        this.moveSpeed = 0.08;

        // STORE THE CAMERA'S DESTINATION POSITION AND LOOK-AT TARGET
        this.targetPos = new Vector3();
        this.targetLook = new Vector3();

        // INITIALIZE ORBIT CONTROLS FOR THE CAMERA
        this.controls = new OrbitControls(
            camera,
            dom.controlArea
        );

        // SET THE INITIAL LOOK-AT TARGET TO THE CENTER OF THE SCREEN
        this.controls.target.set(0,0,0);

        // SET THE MINIMUM CAMERA ZOOM DISTANCE
        this.controls.minDistance = sun.geometry.parameters.radius * 2.5;

        // SET THE MAXIMUM CAMERA ZOOM DISTANCE
        this.controls.maxDistance = 8000;
        
        this.controls.enablePan = false;
        this.controls.mouseButtons.RIGHT = null;

        this.controls.update();
    }

    change(name) {

       /**
        * MOVE THE CAMERA TO VIEW THE SELECTED PLANET OR THE SUN
        */

        /** @type {Mesh} */
        let mesh;
        
        let offset;

        if ( name !== "sun" ) {

            // GET THE SELECTED PLANET'S MESH AND RADIUS
            mesh = this.planet[name];
            offset = mesh.geometry.parameters.radius;
        }
        else {
            // GET THE SUN'S MESH AND RADIUS
            mesh = this.sun;
            offset = mesh.geometry.parameters.radius;
        }

        // GET THE MESH'S POSITION IN WORLD SPACE
        const pos = new Vector3();
        mesh.getWorldPosition(pos);

        // SET THE CAMERA'S DESTINATION POSITION
        this.targetPos.set(
            pos.x,
            pos.y,
            pos.z + offset * 10
        );

        // SET THE POINT THE CAMERA WILL LOOK AT
        this.targetLook.copy(pos);

        // ADJUST THE MINIMUM ZOOM DISTANCE FOR THE SELECTED OBJECT
        this.controls.minDistance = offset * 2.5;
        this.controls.update();

        // START THE CAMERA MOVEMENT ANIMATION
        this.isMoving = true;
    }

    update() {
        if ( !this.isMoving ) return;

        // MOVE THE CAMERA TOWARD ITS DESTINATION
        this.camera.position.lerp(
            this.targetPos,
            this.moveSpeed
        );

        // MOVE THE ORBIT CONTROLS TARGET
        this.controls.target.lerp(
            this.targetLook,
            this.moveSpeed
        );

        // CHECK IF THE CAMERA HAS REACHED ITS DESTINATION
        if (
            this.camera.position.distanceTo(this.targetPos) < 0.2 &&
            this.controls.target.distanceTo(this.targetLook) < 0.2
        ) {
            // SNAP THE CAMERA AND LOOK-AT TARGET TO THEIR DESTINATIONS
            this.camera.position.copy(this.targetPos);
            this.controls.target.copy(this.targetLook);

            // STOP THE CAMERA MOVEMENT ANIMATION
            this.isMoving = false;
        }

        this.controls.update();
    }
}