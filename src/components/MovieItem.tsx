import React from 'react';

import Movie from '../models/Movie';
import './MovieItem.css';

const MovieItem = ({movie}: {movie: Movie}) => {
     return (
        <div className={'movie-container'}>
            <div className={'left-container'}>
                <img style={{float: 'left', width: '100px', height:'100px'}} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.poster_path} />
            </div>
            <div className={'right-container' }>
                <span className={'text-label title-cls'}>{movie.title}</span>
                <div className={'text-label overview-cls'} dangerouslySetInnerHTML={{ __html: movie.overview }}></div>
            </div>
        </div>
    );
};

export default MovieItem;