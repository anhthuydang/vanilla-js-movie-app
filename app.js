fetch("https://api.themoviedb.org/3/movie/popular?api_key=3fbd8a3c91c67c8b09643bece50b95a4&language=en-US&page=1").then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data.results);
}).catch(function (err) {
    console.log("ERROR!!!!")
});