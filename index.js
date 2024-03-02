let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
let container = document.querySelector('.container');


//function to fetch data from api

let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}###&language=es-ES`;
    //if input field is empty

    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Ingresa el nombre de una serie o película </h3>`;
    }

    //if input isn't empty
    else {
        fetch(url).then((resp) => resp.json()).then((data) => {
            //if movie exist in database
            if (data.Response == "True") {
                container.classList.add("container-small-margin");
                result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <img src="star-icon.svg">
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                        </div>
                    </div>
                    <h3>Summary:</h3>
                    <p>${data.Plot}</p>
                    <h3>Cast:</h3>
                    <p>${data.Actors}</p>
                `;
            }

            //if movie doesn't exist in database
            else {
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;  container.classList.remove("container-small-margin");
            }
        })
            //if error occurs
            .catch(() => {
                result.innerHTML = `<h3 class="msg">Ocurrió un error</h3>`;
            });
    }
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);