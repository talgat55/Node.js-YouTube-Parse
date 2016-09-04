module.exports = (async, ffmpeg, fs, dirname) => {
    let path = dirname.dirname(__dirname + "/../video");


    console.log(path);
    //    let localmp4file = __dirname + 
    fs.readdir(dirname, (err, res) => {
        //  console.log(res)
        if (err)

            console.log(err);

        else
            async.each(res, function(res, callback) {
                let fileEnd = /\.mp4$/;

                let rightfilename = __dirname + "\/..\/..\/video/" + res;
                //console.log(rightfilename);
                // console.log(rightfilename);
                let process = new ffmpeg(rightfilename); // convert in mp3
                /* process.then(function(video) {
                     // Callback mode

                     video.fnExtractSoundToMP3(res.replace(fileEnd, '.mp3'), function(error, file) {
                         if (!error)
                             console.log('Audio file: ' + file);
                         else
                             console.log('Audio error: ' + error);
                     });
                 }, function(err) {
                     console.log('Error: ' + err);
                 });*/


            })
    })

}