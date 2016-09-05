import async from "async";
import fs from 'fs';
import path from 'path';
import ytdl from 'ytdl-core';
import ffmpeg from 'ffmpeg';
import youtube from 'youtube-search';
import sugar from 'sugar';
//   get ´/ ´  //
exports.index = function(req, res) {

    res.render("index", {
        title: "Entry seacrh keyword "

    });


};
//   post ´/ ´  //
exports.post = function(req, res) {
  if(!req.body.search || req.body.search==""){

    res.render("index", {
        title: "Please Entry name product ",

    });

  }else {


let resultvideo = require("./../components/youtubesearch")(req.body.search, config.api, youtube);
        if(!resultvideo){

            res
        }else{
    res.render("index", {
        title: "Please Entry name product ",

    });

        }

  }
    res.render("index", {
        title: "Entry seacrh keyword "

    });


};















//
//if (resultvideo) {
 // let resultmp3 = require("./../components/mp3")(async, ffmpeg, fs, rightpath);
//}
