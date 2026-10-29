import * as tr from "three";

export class Sun {

    /**
     * @param {tr.Scene} scene
     * @param {tr.LoadingManager} loadingManager
     */
    constructor(scene, loadingManager) {

        this.sun = null;

        this.texLoad = new tr.TextureLoader(loadingManager);
        
        // CREATE THE SUN'S GEOMETRY
        const geo = new tr.IcosahedronGeometry(4, 12);

        const tex = this.texLoad.load("./res/map/sun.jpg");

        // CREATE THE SUN'S MATERIAL AND LOAD ITS TEXTURE
        const mat = new tr.MeshStandardMaterial({
            map: tex,
            emissiveMap: tex,
            emissive: new tr.Color("white"),
            emissiveIntensity: 0.4
        });

        // CREATE THE SUN MESH
        this.sun = new tr.Mesh(geo, mat);

        // POSITION THE SUN AT THE CENTER OF THE SCENE
        this.sun.position.set(0,0,0);

        scene.add(this.sun);

        // CREATE THE GLOW EFFECT AROUND THE SUN
        const g = 40;
        for ( let i = 1; i <= g; i++ ) {

            const glow = new tr.Mesh(
                new tr.IcosahedronGeometry(4 * i * 0.25, 3),
                new tr.MeshBasicMaterial({
                    color: "white",
                    transparent: true,
                    opacity: Math.abs(i-g-1) * 0.00125,
                    blending: tr.AdditiveBlending
                })
            );

            // ALIGN THE GLOW LAYER WITH THE SUN
            glow.position.set(0,0,0);

            scene.add(glow);
        }
    }
}