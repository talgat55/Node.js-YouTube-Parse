module.exports = (async, ytdl, fs, sugar, results) => {
    async.each(results, function(res, callback) { // download each video

        //  pathvideo = 'https://www.youtube.com/watch?v=m55Qu7Z6q9w'; 
        let pathvideo = res.link;
        if (pathvideo.substr(24, 1) == "w") {
            let title = res.title;
            let paramet = sugar.String.parameterize(title);
            let namefile = paramet + ".mp4";
            let fullpath = namefile;
            //  let fullpath = __dirname + "/../video/" + namefile;

            ytdl(pathvideo)
                .pipe(fs.createWriteStream(fullpath));



        }
    }, function(err) {
        // if any of the file processing produced an error, err would equal that error
        if (err) {
            // One of the iterations produced an error.
            // All processing will now stop.
            console.log('fail download video');
            return false;
        } else {
            console.log('successfully download video');
            return true;
        }
    });


}