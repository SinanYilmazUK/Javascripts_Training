const movie = {
  title: "ABC",
  releaseYear: 2008,
  rating: 9.3,
  director: "DEF",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj){
    if (typeof obj[key] === "string") 
        console.log(key, obj[key]);
  }
}
//title ABC
//director DEF
