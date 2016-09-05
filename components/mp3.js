module.exports = (async, ffmpeg, fs, dirname) => {
    let path = dirname.dir + "/video";


    //    let localmp4file = __dirname + 
    fs.readdir(path, (err, res) => {
        //  console.log(res)
        if (err)

            console.log(err);

        else
            async.each(res, function(res, callback) {
                let fileEnd = /\.mp4$/;

                let rightfilename = path + "\/" + res;
                //console.log(rightfilename);
                // console.log(rightfilename);
                let process = new ffmpeg(rightfilename); // convert in mp3
                process.then(function(video) {
                    // Callback mode
                    console.log("true convert mp3");
                    video.fnExtractSoundToMP3(rightfilename.replace(fileEnd, '.mp3'), function(error, file) {
                        if (!error)
                            console.log('Audio file: ' + file);
                        else
                            console.log('Audio error: ' + error);
                    });
                }, function(err) {
                    console.log('Error: ' + err);
                });


            })
    })

}