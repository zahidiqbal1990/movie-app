import { GET_MOVIES}  from '../constants/actions';
import { MoviesActionTypes } from '../models/MovieAction';
import Movie from '../models/Movie';

export const getMovies = (payload: Movie[]) : MoviesActionTypes => {
    return { 
        type: GET_MOVIES,
        payload 
    }
};