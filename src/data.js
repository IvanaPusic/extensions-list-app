import console from "./assets/console.png"
import devLens from "./assets/devlens.png"
import dom from "./assets/dom.png"
import grid from "./assets/grid.png"
import jsonWizard from "./assets/jsonwizard.png"
import link from "./assets/link.png"
import markup from "./assets/markup.png"
import palette from "./assets/palette.png"
import speedBoost from "./assets/speedboost.png"
import styleSpy from "./assets/stylespy.png"
import tableMaster from "./assets/tabmaster.png"
import viewport from "./assets/viewport.png"

const extensions = [
    {
        id: 1,
        title: "DevLens",
        text: "Quickly inspect page layouts and visualize element boundaries.",
        img: devLens,
        isActive: true,
    },
    {
        id: 2,
        title: "StyleSpy",
        text: "Instantly analyze and copy CSS from any webpage element.",
        img: styleSpy,
        isActive: true,
    },
    {
        id: 3,
        title: "SpeedBoost",
        text: "Optimizes browser resource usage to accelerate page loading.",
        img: speedBoost,
        isActive: false,
    },
    {
        id: 4,
        title: "JSONWizard",
        text: "Formats, validates, and prettifies JSON responses in-browser.",
        img: jsonWizard,
        isActive: true,
    },
    {
        id: 5,
        title: "TabMaster Pro",
        text: "Organizes browser tabs into groups and sessions.",
        img: tableMaster,
        isActive: true,
    },
    {
        id: 6,
        title: "ViewportBuddy",
        text: "Simulates various screen resolutions directly within the browser.",
        img: viewport,
        isActive: false,
    },
    {
        id: 7,
        title: "Markup Notes",
        text: "Enables annotation and notes directly onto webpages for collaborative debugging.",
        img: markup,
        isActive: true,
    },
    {
        id: 8,
        title: "GridGuides",
        text: "Overlay customizable grids and alignment guides on any webpage.",
        img: grid,
        isActive: false,
    },
    {
        id: 9,
        title: "Palette Picker",
        text: "Instantly extracts color palettes from any webpage.",
        img: palette,
        isActive: true,
    },
    {
        id: 10,
        title: "LinkChecker",
        text: "Scans and highlights broken links on any page.",
        img: link,
        isActive: true,
    },
    {
        id: 11,
        title: "DOM Snapshot",
        text: "Capture and export DOM structures quickly.",
        img: dom,
        isActive: false,
    },
    {
        id: 1,
        title: "ConsolePlus",
        text: "Enhanced developer console with advanced filtering and logging.",
        img: console,
        isActive: true,
    },
]

export default extensions