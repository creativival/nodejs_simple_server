// export_map.js
// import ExportControl from '@geolonia/mbgl-export-control'
const ExportControl = require('@geolonia/mbgl-export-control').default;

const map = new mapboxgl.Map("#map");

// Add the control to download png.
map.addControl(new ExportControl({
    dpi: 300,
    attribution: "© Geolonia | © OpenStreetMap Contributors",
}));