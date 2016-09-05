module.exports = (searchkey, configapi) => {


    var opts = {
        maxResults: 10,
        key: configapi
    };

    youtube(searchkey, opts, function(err, results) {
        if (err) return console.log(err);

        console.dir(results);
    });


    let pathvideo; /// url full path   e.x  http://www.youtube.com/watch?v=A02s8omM_hI
    pathvideo = 'https://www.youtube.com/watch?v=m55Qu7Z6q9w';
    let namefile = "video.flv";
    ytdl(pathvideo)
        .pipe(fs.createWriteStream("./../video/" + namefile));



    return fn;
}