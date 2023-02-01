"use strict";

const Constants = require('../constants');

function convertCsvToGeojson(csvFileName) {
    const fs = require("fs");
    const {parse} = require("csv-parse/sync");
    const prefectures = Constants.prefectures;

    // csv読み込み
    const csv_buffer = fs.readFileSync(`public/csv/${csvFileName}.csv`);
    // console.log(csv_buffer);
    const rows = parse(csv_buffer)
    // console.info(rows)
    // geojsonデータ作成
    const featureCollection = {
        "type": "FeatureCollection",
        "features": []
    }
    let rgbColor = "#ff2600"  // マーカーのカラー

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (row[0] === "私立") {
            rgbColor = "#008800"
        }

        if (!prefectures.includes(row[0]) && row[2] && row[3]) {
            const feature = {
                "type": "Feature",
                "properties": {
                    "title": row[0],
                    "marker-color": rgbColor,
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
    }

    // geojsonファイル書き込み
    fs.writeFileSync(`public/json/${csvFileName}.geojson`,
        JSON.stringify(featureCollection), "utf-8");
}


module.exports = {
    geolonia_map: (req, res) => {
        res.render("map/geolonia_map", {
            layout: "map_layout",
        });
    },
    geojson: (req, res) => {
        const fileName = req.query.name || 'museum_locations';

        convertCsvToGeojson(fileName)

        res.render("map/geojson", {
            path: "geojson",
            layout: "map_layout",
            fileName: fileName,
        });
    },
    maplibre_gl: (req, res) => {
        res.render("map/maplibre_gl", {
            layout: "no_layout",
        });
    },
    maplibre_gl_export: (req, res) => {
        res.render("map/maplibre_gl_export", {
            layout: "no_layout",
        });
    },
    maplibre_gl_style_switcher: (req, res) => {
        res.render("map/maplibre_gl_style_switcher", {
            layout: "no_layout",
        });
    },
    maplibre_gl_legend: (req, res) => {
        res.render("map/maplibre_gl_legend", {
            layout: "no_layout",
        });
    },
    maplibre_gl_legend_a: (req, res) => {
        res.render("map/maplibre_gl_legend-a", {
            layout: "no_layout",
        });
    },
};