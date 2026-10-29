import * as tr from "three";
import { toRadian } from "../util/Math.js";
import { planetList } from "./PlanetList.js";

export class Planet {

    /**
     * @param {tr.Scene} scene
     * @param {tr.LoadingManager} loadingManager
     */
    constructor(scene, loadingManager) {

        this.scene = scene;

        this.texLoad = new tr.TextureLoader(loadingManager);
        
        this.planetList = planetList;

        this.planet = {};
        this.center = {};
        this.orbit = {};
        this.highlight = {};

        this.planetList.forEach(p => {

            const planetGroup = new tr.Group();
            planetGroup.name = `${p.name}-group`;
            
            // CREATE A NEW PLANET
            const planet = this.createPlanet(p);

            // CREATE THE PLANET'S ORBIT
            this.createOrbit(p, planetGroup);

            // CREATE SATURN'S RINGS
            if ( p.name === "saturn" )
                this.saturnRing(p, planetGroup);

            // ADD EARTH ADDITIONAL FEATURES
            if ( p.name === "earth" )
                this.earthAddon(p, planetGroup);

            planetGroup.add(planet);

            // ROTATE THE PLANET GROUP TO SET THE PLANET'S AXIAL TILT
            planetGroup.rotateZ(toRadian(p.tilt));

            /**
             * POSITION THE PLANET GROUP AT THE CORRECT DISTANCE
             * FROM THE SUN
             */
            planetGroup.position.set(p.x, 0, 0);

            this.center[p.name] = new tr.Group().add(planetGroup);
            this.center[p.name].position.set(0,0,0);

            // PLACE EACH PLANET AT A RANDOM POSITION ALONG ITS ORBIT
            this.center[p.name].rotateY(
                toRadian(
                    Math.floor(Math.random() * 360)
                )
            );

            scene.add(this.center[p.name]);
        });
    }

    createPlanet(p) {

        // CREATE THE PLANET'S GEOMETRY
        const geo = new tr.IcosahedronGeometry(p.size, 12);

        // CREATE THE PLANET'S MATERIAL AND LOAD ITS TEXTURE
        const mat = new tr.MeshStandardMaterial({
            map: this.texLoad.load(`./res/map/${p.image}`),
            roughness: 0.8
        });

        // CREATE THE PLANET MESH
        const mesh = new tr.Mesh(geo, mat);

        // POSITION THE PLANET AT THE ORIGIN OF ITS GROUP
        mesh.position.set(0,0,0);

        // MAKE THE PLANET RECEIVE AND CAST SHADOWS
        mesh.receiveShadow = true;
        mesh.castShadow = true;

        this.planet[p.name] = mesh;

        return mesh;
    }

    createOrbit(p, group) {

        // CREATE THE PLANET'S HIGHLIGHT
        const highlight = new tr.Mesh(
            new tr.IcosahedronGeometry(15, 4),
            new tr.MeshBasicMaterial({ color: p.orbitColor })
        );
        
        // POSITION THE HIGHLIGHT AT THE ORIGIN
        highlight.position.set(0,0,0);

        this.highlight[p.name] = highlight;

        highlight.name = `${p.name}-highlight`;

        // CREATE THE PLANET'S ORBIT
        const orbit = new tr.Mesh(
            new tr.RingGeometry(p.x - 2, p.x + 2, 360),
            new tr.MeshBasicMaterial({
                color: p.orbitColor,
                side: tr.DoubleSide
            })
        );

        // POSITION THE ORBIT AT THE ORIGIN
        orbit.position.set(0,0,0);

        // ROTATE ORBIT TO MAKE IT HORIZONTAL
        orbit.rotateX(toRadian(90));

        this.orbit[p.name] = orbit;

        this.scene.add(orbit);
        group.add(highlight);
    }

    saturnRing(p, group) {

        // CREATE SATURN'S RING
        const ring = new tr.Mesh(
            new tr.RingGeometry(
                p.size * 1.2,   // INNER RADIUS
                p.size * 2.2,   // OUTER RADIUS
                36
            ),
            new tr.MeshStandardMaterial({
                map: this.texLoad.load(`./res/map/saturn-ring.png`),
                side: tr.DoubleSide,
                transparent: true,
                opacity: 1
            })
        );

        // POSITION THE RINGS AT THE ORIGIN
        ring.position.set(0,0,0);

        // ROTATE THE RINGS TO SET THEIR INCLINATION
        ring.rotateX(toRadian(-90));

        // MAKE THE RINGS CAST AND RECEIVE SHADOWS
        ring.castShadow = true;
        ring.receiveShadow = true;

        group.add(ring);
    }

    earthAddon(p, group) {

        // ADD CLOUDS TO EARTH
        const cloud = new tr.Mesh(
            new tr.IcosahedronGeometry(p.size * 1.015, 6),
            new tr.MeshStandardMaterial({
                map: this.texLoad.load("./res/map/cloud.png"),
                transparent: true,
                opacity: 1,
                depthWrite: false
            })
        );
        
        // POSITION THE CLOUDS AT THE ORIGIN
        cloud.position.set(0,0,0);

        group.add(cloud);

        this.cloud = cloud;

        // ADD A GLOWING ATMOSPHERE AROUND EARTH
        for ( let i = 1; i <= 14; i++ ) {

            const m = new tr.Mesh(
                new tr.IcosahedronGeometry(p.size * 1.01 + (i * 0.002), 6),
                new tr.MeshBasicMaterial({
                    color: i < 3 ? "blue" :
                    (i < 8 ? "aqua" : "lightblue"),
                    transparent: true,
                    opacity: i < 3 ? 0.1 :
                    (i < 8 ? 0.05 : 0.025),
                    side: tr.BackSide,
                    blendAlpha: tr.AdditiveBlending,
                    depthWrite: false
                })
            );
            m.position.set(0,0,0);
            group.add(m);
        }
    }

    animate() {

        // ROTATE THE PLANETS
        this.planetList.forEach(p => {

            // GET THE PLANET'S ROTATION SPEED
            const rotateSpeed = toRadian(p.rotate);

            // APPLY THE ROTATION
            this.planet[p.name].rotation.y += rotateSpeed;

            if ( p.name === "earth" )
                this.cloud.rotation.y += rotateSpeed * 1.15;
        });
    }

    showOrbit() {

        // SHOW THE PLANETS ORBITS
        this.planetList.forEach(p => {

            this.scene.add(this.orbit[p.name]);
            const group = this.center[p.name].getObjectByName(`${p.name}-group`);
            group.add(this.highlight[p.name]);
        });
    }

    hideOrbit() {

        // HIDE THE PLANETS ORBITS
        this.planetList.forEach(p => {

            this.scene.remove(this.orbit[p.name]);
            const group = this.center[p.name].getObjectByName(`${p.name}-group`);
            group.remove(this.highlight[p.name]);
        });
    }
}