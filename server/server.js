import express from "express";
import templating from "consolidate";
import bodyParser from "body-parser";
import async from "async";
import fs from 'fs';
import path from 'path';
import ytdl from 'ytdl-core';
import ffmpeg from 'ffmpeg';
import youtube from 'youtube-search';
import sugar from 'sugar';
import config from './../config/config.json';
import indexrouter from './../routes/index';



let rightpath = path.parse(__dirname);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.engine("twig", templating.twig);


app.set("view engine", "twig");
app.set("views", __dirname + "/../client/views");


/*  Routes */
app.get("/", indexrouter.index);

let resultvideo = require("./../components/youtube")("node.js", config.api, youtube, async, ytdl, fs, sugar);
/*if (resultvideo) {
    let resultmp3 = require("./../components/mp3")(async, ffmpeg, fs, rightpath);
}
*/
//console.log("RESULT:" + result)
/*
ytdl(pathvideo)
    .pipe(fs.createWriteStream(namefile));

var process = new ffmpeg(namefile);
process.then(function(video) {
    // Callback mode
    let fileEnd = /\.flv$/;
    video.fnExtractSoundToMP3(namefile.replace(fileEnd, '.mp3'), function(error, file) {
        if (!error)
            console.log('Audio file: ' + file);
    });
}, function(err) {
    console.log('Error: ' + err);
});

/* Title which starts with a dash will cause ffmpeg to think its an option, 
so they need to be removed.*/

/*




function dlyt(path, convertToMp3) {
    ytdl.getInfo(path, function(err, info) {
        let fileName = err ? "ytmp3.flv" : sanatize(info.title.trim() + ".flv");
        let stream = fs.createWriteStream(fileName);
        ytdl(path).pipe(stream).on('close', function() {
            console.log("----- Download complete -----");
            if (convertToMp3) {
                stream.end();
                console.log("----- converting to mp3 -----");
                let fileEnd = /\.flv$/;
                let proc = new ffmpeg({ source: fileName, nolog: true, timeout: 60 })
                    .withAudioCodec('libmp3lame')
                    .toFormat('mp3')
                    .saveToFile(fileName.replace(fileEnd, '.mp3'), function(stdout, stderr) {
                        console.log('----- file converted successfully! -----');

                    });    
                fs.unlink(fileName, function(err) {
                    console.log("----- Removing temporary file: " + fileName);
                });
            }
        });
    });
}

dlyt("https://www.youtube.com/watch?v=8_gcTR6fn94", true);
    

*/



app.listen(3000, () => console.log("server run port 3000"));