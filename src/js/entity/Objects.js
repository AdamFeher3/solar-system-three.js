// THE DATA AND SETTINGS FOR ALL PLANETS
export const planetList = [

    {
        // MERCURY
        name: "mercury",
        name_en: "mercury",
        name_sk: "merkúr",
        image: "mercury.webp",  // TEXTURE FILE
        size: 0.2,              // PLANET RADIUS
        x: 200,                 // DISTANCE FROM THE SUN
        tilt: 0.03,             // AXIAL TILT IN DEGREES
        rotate: 0.04,           // ROTATION SPEED
        orbitColor: "gray",     // COLOR OF THE ORBIT
        description_en: "The smallest planet and the closest to the Sun. Mercury has a rocky, crater-covered surface and extreme temperature changes between day and night.",
        description_sk: "Najmenšia planéta a zároveň tá, ktorá je najbližšie k Slnku. Merkúr má skalnatý povrch pokrytý krátermi a extrémne teplotné výkyvy medzi dňom a nocou."
    },
    {
        // VENUS
        name: "venus",
        name_en: "venus",
        name_sk: "venuša",
        image: "venus.webp",
        size: 0.4,
        x: 374,
        tilt: 177,
        rotate: -0.01,
        orbitColor: "salmon",
        description_en: "The hottest planet in the Solar System, covered by thick clouds and a dense atmosphere that traps heat. Its bright appearance makes it one of the brightest objects in our sky.",
        description_sk: "Najteplejšia planéta v Slnečnej sústave, pokrytá hustými mrakmi a hustou atmosférou, ktorá zadržiava teplo. Vďaka svojmu jasnému vzhľadu patrí medzi najjasnejšie objekty na našej oblohe."
    },
    {
        // EARTH
        name: "earth",
        name_en: "earth",
        name_sk: "zem",
        image: "earth.webp",
        size: 0.4,
        x: 517,
        tilt: -23.5,
        rotate: 0.14,
        orbitColor: "lightblue",
        description_en: "Our home planet, filled with oceans, continents, and a life-supporting atmosphere. Earth is the only planet currently known to support life.",
        description_sk: "Naša domovská planéta, pokrytá oceánmi, kontinentmi a atmosférou, ktorá umožňuje existenciu života. Zem je v súčasnosti jedinou známou planétou, na ktorej existuje život."
    },
    {
        // MARS
        name: "mars",
        name_en: "mars",
        name_sk: "mars",
        image: "mars.webp",
        size: 0.3,
        x: 787,
        tilt: 25,
        rotate: 0.04,
        orbitColor: "red",
        description_en: "Known as the Red Planet, Mars has a dusty, rocky surface, enormous volcanoes, and evidence of ancient flowing water. Scientists are exploring whether it once supported life.",
        description_sk: "Mars, známy ako Červená planéta, má prašný, skalnatý povrch, obrovské sopky a stopy po dávnej tečúcej vode. Vedci skúmajú, či na ňom kedysi existoval život."
    },
    {
        // JUPITER
        name: "jupiter",
        name_en: "jupiter",
        name_sk: "jupiter",
        image: "jupiter.png",
        size: 2.4,
        x: 2689,
        tilt: 3,
        rotate: 0.1,
        orbitColor: "chocolate",
        description_en: "The largest planet in the Solar System, Jupiter is a gas giant with colorful cloud bands and the Great Red Spot, a massive storm that has lasted for centuries.",
        description_sk: "Jupiter, najväčšia planéta v Slnečnej sústave, je plynný obr s farebnými mračnovými pásmi a Veľkou červenou škvrnou, obrovskou búrkou, ktorá trvá už celé storočia."
    },
    {
        // SATURN
        name: "saturn",
        name_en: "saturn",
        name_sk: "saturn",
        image: "saturn.webp",
        size: 2.2,
        x: 4951,
        tilt: 27,
        rotate: 0.09,
        orbitColor: "orange",
        description_en: "Famous for its spectacular rings made of ice, rock, and dust, Saturn is a gas giant with a low density and dozens of known moons.",
        description_sk: "Saturn, známy svojimi úchvatnými prstencami z ľadu, skál a prachu, je plynný obr s nízkou hustotou a desiatkami známych mesiacov."
    },
    {
        // URANUS
        name: "uranus",
        name_en: "uranus",
        name_sk: "urán",
        image: "uranus.webp",
        size: 0.9,
        x: 9922,
        tilt: 98,
        rotate: -0.05,
        orbitColor: "lightblue",
        description_en: "An icy giant with a pale blue-green color caused by methane in its atmosphere. Uranus rotates on its side, giving it some of the most unusual seasons in the Solar System.",
        description_sk: "Ľadový gigant s bledomodrozelenou farbou, ktorú spôsobuje metán v jeho atmosfére. Urán sa otáča na boku, vďaka čomu má jedny z najnezvyčajnejších ročných období v Slnečnej sústave."
    },
    {
        // NEPTUNE
        name: "neptune",
        name_en: "neptune",
        name_sk: "neptún",
        image: "neptune.webp",
        size: 0.8,
        x: 15528,
        tilt: 28,
        rotate: 0.06,
        orbitColor: "aqua",
        description_en: "The most distant planet from the Sun, Neptune is a deep-blue ice giant with powerful winds and enormous storms. It takes about 165 Earth years to complete one orbit around the Sun.",
        description_sk: "Neptún, najvzdialenejšia planéta od Slnka, je tmavomodrý ľadový obr s mohutnými vetrami a obrovskými búrkami. Jedno obežné kolo okolo Slnka mu trvá približne 165 pozemských rokov."
    }
];

export const sun = {

    name: "sun",
    name_en: "sun",
    name_sk: "slnko",
    description_en: "The star at the center of our Solar System, the Sun is a giant ball of hot plasma that provides the light and heat essential for life on Earth. Its powerful gravity keeps all eight planets in orbit, and it contains more than 99% of the Solar System's total mass.",
    description_sk: "Slnko, hviezda v strede našej slnečnej sústavy, je obrovská guľa horúcej plazmy, ktorá poskytuje svetlo a teplo nevyhnutné pre život na Zemi. Jeho silná gravitácia udržuje všetkých osem planét na obežných dráhach a tvorí viac ako 99 % celkovej hmotnosti slnečnej sústavy."
};