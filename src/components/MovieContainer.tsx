import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MovieList from './MovieList';
import Movie from '../models/Movie';
import IAppState from '../models/AppState';

import './MovieContainer.css';

const MovieContainer = () => {

    const [input, setInput] = useState('');
    const [filtered, setFiltered] = useState(false);
    const movies: Movie[] = useSelector((state: IAppState) => state.movies); 
    const [moviesList, setMovies] = useState(movies);    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const searchMovies = (event: React.FormEvent) => {
        event.preventDefault();
        if(input){
            setFiltered(true);
            let filteredMovies = movies.filter(movie => movie.overview.toLowerCase().includes(input.toLowerCase()));
            if(filteredMovies && filteredMovies.length>0){
                const regex = new RegExp(input, 'i') ;
                filteredMovies = filteredMovies.map(mov=> ({...mov, overview: mov.overview.replace(regex, `<em>${input}</em>`)}))
                setMovies(filteredMovies);
            }    
            else
                setMovies([]);
        }
        else if(filtered){
            setFiltered(false);
            setMovies(movies);
        }
    }

    return (<React.Fragment>
        <form className={'form-cls'} onSubmit={searchMovies}>
            <input className={'input-cls'}
                placeholder="Enter a keyword to search movies..."
                onChange={handleChange}
            />
            <button className={'btn-cls'} type="submit">
                Search
            </button>
        </form>
    {moviesList && moviesList.length > 0 ? <MovieList movies={moviesList} />: <h3>Not found.</h3> }
    </React.Fragment>);
};

export default MovieContainer;