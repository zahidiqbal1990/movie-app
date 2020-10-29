import React from 'react';

import Movie from "../models/Movie"
import MovieItem from './MovieItem';

const MovieList = ({ movies }:{movies: Movie[]}) => {
    return <React.Fragment>
        {movies.map(movie => <MovieItem key={ movie.id } movie={movie} />)}
    </React.Fragment>
};

export default MovieList;


