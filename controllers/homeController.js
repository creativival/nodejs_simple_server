"use strict";

const fs = require("fs");
const {parse} = require("csv-parse/sync");
// csv読み込み
const csv_buffer = fs.readFileSync("public/csv/museum_location.csv");
// console.log(csv_buffer);
const rows = parse(csv_buffer)
// console.info(rows)
// geojsonデータ作成
const featureCollection = {
    "type": "FeatureCollection",
    "features": []
}
for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const feature = {
        "type": "Feature",
        "properties": {
            "title": row[0],
            "marker-color": "#ff2600",
            "marker-size": "medium"
        },
        "geometry": {
            "coordinates": [
                Number(row[3]),
                Number(row[2])
            ],
            "type": "Point"
        }
    }
    featureCollection.features.push(feature)
}
// geojsonファイル書き込み
fs.writeFileSync("public/json/museum_location.geojson",
    JSON.stringify(featureCollection), "utf-8");


module.exports = {
    index: (req, res) => {
        res.render("index", {
            path: "home",
        });
    },
    about: (req, res) => {
        res.render("about");
    },
    geolonia_map: (req, res) => {
        res.render("geolonia_map", {
            layout: "map_layout",
        });
    },
    geojson: (req, res) => {

        res.render("geojson", {
            path: "geojson",
            layout: "map_layout",
        });
    },
};