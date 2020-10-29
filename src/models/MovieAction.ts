import { GET_MOVIES } from '../constants/actions';
import Movie from '../models/Movie';

interface GetMoviesAction {
  type: typeof GET_MOVIES,
  payload: Movie[]
}

export type MoviesActionTypes = GetMoviesAction;