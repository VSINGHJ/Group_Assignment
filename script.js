document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'd5fbba8'; // My api key

    // Event listener to handle form submission
    document.getElementById('movie-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const movieTitle = document.getElementById('movie-title').value;

        //Get the movie title from the inpuit field
        const url = `http://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;

        // Fetch movie data from the OMDBI api
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.Response === 'True')
                    //If the movie's name is correct, show the information  
                    {
                    const movieInfo = `
                        <h2>${data.Title}</h2>
                        <p><b>Year:</b> ${data.Year}</p>
                        <p><b>Director:</b> ${data.Director}</p>
                        <p><b>Plot:</b> ${data.Plot}</p>
                        <p><b>Rated:</b> ${data.Rated}</p>
                        <p><b>Runtime:</b> ${data.Runtime}</p>
                        <p><b>Genre:</b> ${data.Genre}</p>
                        <p><img src="${data.Poster}" alt="${data.Title} Poster"></p>
                        <p><b>IMDb Ratings:</b> ${data.imdbRating}</p>
                        <p><b>IMDb Votes:</b> ${data.imdbVotes}</p>
                        <p><b>IMDb ID:</b> ${data.imdbID}</p>
                    `;
                    document.getElementById('movie-info').innerHTML = movieInfo;
                } 
                else
                
                //If the movie is not found, display an error message
                {
                    document.getElementById('movie-info').innerHTML = `<p>Sorry, try typing another movie!</p>`;
                }
            })
            .catch(error => {

                //If there is an error fetching data, display this error message
                console.error('Error fetching data:', error);
                document.getElementById('movie-info').innerHTML = `<p>An unexpected error occurred</p>`;
            });
    });
});
