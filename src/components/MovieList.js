import React from 'react';
const MovieList = (props) => {

    // console.log(" movielist component ", props);
    return (
        <>
            {
                props.movies.map((movie, i) => (
                    <div key={i} className="image-container d-flex justify-content-start m-3" >
                        <img src={movie.Poster} alt="Movie Poster"></img>
                    </div>
                ))
            }
        </>
    )

}
export default MovieList;
