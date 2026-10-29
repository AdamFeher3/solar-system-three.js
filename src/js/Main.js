import * as tr from "three";
import { Menu } from "./ui/Menu.js";
import { World } from "./core/World.js";
import { Render } from "./core/Render.js";
import { Sun } from "./entity/Sun.js";
import { Planet } from "./entity/Planet.js";
import { Camera } from "./core/Camera.js";

const loadManager = new tr.LoadingManager();

/**
 * INITIALIZE THE WORLD AND SET UP THE
 * SCENE, CAMERA, LIGHTING, AND RENDERER
 */
const world = new World(loadManager);
world.setup();

// CREATE THE SUN AND PLANETS AND ADD THEM TO THE SCENE
const sun = new Sun(world.scene, loadManager);
const planets = new Planet(world.scene, loadManager);

// INITIALIZE THE CAMERA CONTROLS FOR THE OBJECTS
const camera = new Camera(world.camera, sun.sun, planets.planet);

// INITIALIZE THE RENDERING SYSTEM AND START THE ANIMATION LOOP
const render = new Render(world, camera, planets, loadManager);
render.start();

// INITIALIZE THE MENU AND ITS EVENT LISTENERS
Menu.init(camera, planets);

// UPDATE THE WORLD WHEN THE WINDOW IS RESIZED
window.addEventListener("resize", () => {
    world.resize();
});