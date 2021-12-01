import React from 'react';
const MovieList = (props) => {

    console.log(" movielist component ", props);
    return (
        <>
            {
                props.movies.map((movie, i) => (
                    <div>
                        <img src={movie.Poster}></img>
                    </div>
                ))
            }
        </>
    )

}
export default MovieList;
