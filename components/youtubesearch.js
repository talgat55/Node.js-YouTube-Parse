module.exports = (searchkey, configapi, youtube) => {
    let resultssearch = {};


    var opts = {

        maxResults: 10,
        key: configapi

    };

    youtube(searchkey, opts, function(err, results) { // search videos
        if (err) {

            console.log(err);
            return false;

        } else {

            return results;

        }

    });


    console.log(youtube);

    return resultssearch;









}