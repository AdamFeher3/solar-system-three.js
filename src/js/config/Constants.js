// REFERENCES TO THE HTML ELEMENTS
export const dom = {

    // CANVAS USED TO RENDER THE SOLAR SYSTEM
    canvas: document.getElementById("canvas"),

    // MENU ELEMENTS
    menuBtn: document.getElementById("menu-btn"),
    celList: document.getElementById("cel-list"),
    cels: document.querySelectorAll(".cel"),

    // CAMERA ZOOM BUTTONS
    zoomInBtn: document.getElementById("zoom-in"),
    zoomOutBtn: document.getElementById("zoom-out"),

    // HTML ELEMENT USED BY THE CAMERA CONTROLS
    controlArea: document.getElementById("control-area"),

    // BUTTON USED TO SHOW OR HIDE PLANETARY ORBITS
    orbitBtn: document.getElementById("orbit-btn"),

    // HTML ELEMENT USED TO SHOW THE SELECTED PLANET'S NAME OR THE SUN
    selectName: document.getElementById("selected-name"),
    
    // HTML ELEMENT USED TO SHOW THE SELECTED PLANET'S DESCRIPTION
    descriptionBtn: document.getElementById("description-btn"),
    description: document.getElementById("description")
};