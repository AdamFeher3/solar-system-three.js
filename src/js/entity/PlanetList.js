// THE DATA AND SETTINGS FOR ALL PLANETS
export const planetList = [

    {
        // MERCURY
        name: "mercury",
        image: "mercury.webp",  // TEXTURE FILE
        size: 0.2,              // PLANET RADIUS
        x: 200,                 // DISTANCE FROM THE SUN
        tilt: 0.03,             // AXIAL TILT IN DEGREES
        rotate: 0.04,           // ROTATION SPEED
        orbitColor: "gray",     // COLOR OF THE ORBIT
        description: "The smallest planet and the closest to the Sun. Mercury has a rocky, crater-covered surface and extreme temperature changes between day and night."
    },
    {
        // VENUS
        name: "venus",
        image: "venus.webp",
        size: 0.4,
        x: 374,
        tilt: 177,
        rotate: -0.01,
        orbitColor: "salmon",
        description: "The hottest planet in the Solar System, covered by thick clouds and a dense atmosphere that traps heat. Its bright appearance makes it one of the brightest objects in our sky."
    },
    {
        // EARTH
        name: "earth",
        image: "earth.webp",
        size: 0.4,
        x: 517,
        tilt: -23.5,
        rotate: 0.14,
        orbitColor: "lightblue",
        description: "Our home planet, filled with oceans, continents, and a life-supporting atmosphere. Earth is the only planet currently known to support life."
    },
    {
        // MARS
        name: "mars",
        image: "mars.webp",
        size: 0.3,
        x: 787,
        tilt: 25,
        rotate: 0.04,
        orbitColor: "red",
        description: "Known as the Red Planet, Mars has a dusty, rocky surface, enormous volcanoes, and evidence of ancient flowing water. Scientists are exploring whether it once supported life."
    },
    {
        // JUPITER
        name: "jupiter",
        image: "jupiter.png",
        size: 2.4,
        x: 2689,
        tilt: 3,
        rotate: 0.1,
        orbitColor: "chocolate",
        description: "The largest planet in the Solar System, Jupiter is a gas giant with colorful cloud bands and the Great Red Spot, a massive storm that has lasted for centuries."
    },
    {
        // SATURN
        name: "saturn",
        image: "saturn.webp",
        size: 2.2,
        x: 4951,
        tilt: 27,
        rotate: 0.09,
        orbitColor: "orange",
        description: "Famous for its spectacular rings made of ice, rock, and dust, Saturn is a gas giant with a low density and dozens of known moons."
    },
    {
        // URANUS
        name: "uranus",
        image: "uranus.webp",
        size: 0.9,
        x: 9922,
        tilt: 98,
        rotate: -0.05,
        orbitColor: "lightblue",
        description: "An icy giant with a pale blue-green color caused by methane in its atmosphere. Uranus rotates on its side, giving it some of the most unusual seasons in the Solar System."
    },
    {
        // NEPTUNE
        name: "neptune",
        image: "neptune.webp",
        size: 0.8,
        x: 15528,
        tilt: 28,
        rotate: 0.06,
        orbitColor: "aqua",
        description: "The most distant planet from the Sun, Neptune is a deep-blue ice giant with powerful winds and enormous storms. It takes about 165 Earth years to complete one orbit around the Sun."
    }
];