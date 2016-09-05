import async from "async";
import fs from 'fs';
import path from 'path';
import ytdl from 'ytdl-core';
import ffmpeg from 'ffmpeg';
import youtube from 'youtube-search';
import sugar from 'sugar';
import config from './../config/config.json';
let rightpath = path.parse(__dirname);
//   get ´/ ´  //
exports.index = (req, res) => {

        res.render("index", {
            title: "Entry seacrh keyword "

        });


    }
    //   post ´/ ´  //
exports.postquery = (req, res) => {
    if (!req.body.search || req.body.search == "") {

        res.render("index", {
            title: "Please Entry name product ",

        });

    } else {


        let resultsearch = require(rightpath.dir + "/components/youtubesearch")(req.body.search, config.api, youtube);
        console.log(resultsearch);


        if (!resultsearch) {
            res.render("index", {
                data: resultsearch

            });
            let resultdownloadvideo = require(rightpath.dir + "/components/downloadvideo")(async, ytdl, fs, sugar, resultsearch);

            if (resultdownloadvideo) {

                let resultmp3 = require(rightpath.dir + "/components/mp3")(async, ffmpeg, fs, rightpath);

            }


        } else {
            res.render("index", {
                data: "error search video"

            });

        }



    }



};