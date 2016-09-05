module.exports = (searchkey, configapi, youtube, async, ytdl, fs, sugar) => {

    try {

        var opts = {

            maxResults: 10,
            key: configapi

        };

        youtube(searchkey, opts, function(err, results) { // search videos
            if (err) return console.log(err);
            async.each(results, function(res, callback) { // download each video

                //  pathvideo = 'https://www.youtube.com/watch?v=m55Qu7Z6q9w'; 
                let pathvideo = res.link;
                if (pathvideo.substr(24, 1) == "w") {
                    let title = res.title;
                    let paramet = sugar.String.parameterize(title);
                    let namefile = paramet + ".mp4";
                    let fullpath = __dirname + "/../video/" + namefile;

                    ytdl(pathvideo)
                        .pipe(fs.createWriteStream(fullpath));



                }
            }, function(err) {
                // if any of the file processing produced an error, err would equal that error
                if (err) {
                    // One of the iterations produced an error.
                    // All processing will now stop.
                    console.log('fail');
                } else {
                    console.log('successfully');
                }
            });
        });





        return true;
    } catch (e) {

        console.log("main error" + e);
        return false;
    }







}