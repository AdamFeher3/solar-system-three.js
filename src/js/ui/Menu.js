import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { dom } from "../config/Constants.js";
import { planetList } from "../entity/PlanetList.js";

export class Menu {

    static init(camera, planets) {

        /** @type {OrbitControls} */
        const controls = camera.controls;

        // TRACK THE MENU'S, ORBITS AND THE DESCRIPTION VISIBILITY
        let menuOpen = false;
        let showOrbit = true;
        let showDescription = false;

        // TOGGLE THE MENU'S VISIBILITY WHEN THE MENU BUTTON IS CLICKED
        dom.menuBtn.addEventListener("click", () => {

            menuOpen = !menuOpen;
            dom.celList.style.display = menuOpen ? "flex" : "none";
        });

        dom.cels.forEach(btn => {

            // SELECT A PLANET OR THE SUN FROM THE MENU
            btn.addEventListener("click", (e) => {

                // GET THE SELECTED PLANET'S NAME OR THE SUN'S
                const name = e.currentTarget.value;

                // SHOW THE SELECTED PLANET'S NAME OR THE SUN'S
                dom.selectName.textContent = name.toUpperCase();

                // CLOSE THE MENU AFTER AN OBJECT IS SELECTED
                dom.celList.style.display = "none";
                menuOpen = false;

                // MOVE THE CAMERA TO THE SELECTED OBJECT
                camera.change(name);

                dom.description.style.display = "none";
                dom.descriptionBtn.style.transform = "rotate(0)";
                showDescription = false;

                if ( name === "sun" ) {
                    dom.description.textContent = "The star at the center of our Solar System, the Sun is a giant ball of hot plasma that provides the light and heat essential for life on Earth. Its powerful gravity keeps all eight planets in orbit, and it contains more than 99% of the Solar System’s total mass.";
                    return;
                }

                planetList.forEach(p => {
                    if ( p.name === name ) {
                        dom.description.textContent = p.description;
                        return;
                    }
                });
            });
        });

        // TOGGLE THE SELECTED PLANET'S DESCRIPTION
        dom.descriptionBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            showDescription = !showDescription;
            dom.description.style.display = showDescription ? "block" : "none";
            dom.descriptionBtn.style.transform = showDescription ? "rotate(180deg)" : "rotate(0)";
        });

        // ZOOM CONTROLS
        dom.zoomInBtn.addEventListener("click", () => {

            // MOVE THE CAMERA CLOSER TO THE VIEWED OBJECT
            controls.dollyOut(1.2);
            controls.update();
        });
        dom.zoomOutBtn.addEventListener("click", () => {
            
            // MOVE THE CAMERA AWAY FROM THE VIEWED OBJECT
            controls.dollyIn(1.2);
            controls.update();
        });

        // TOGGLE THE VISIBILITY OF THE PLANETS ORBITS
        dom.orbitBtn.addEventListener("click", () => {

            showOrbit = !showOrbit;
            if ( showOrbit ) planets.showOrbit();
            else planets.hideOrbit();
        });

        document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });
    }
}