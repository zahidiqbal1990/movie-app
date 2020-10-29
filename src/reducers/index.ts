import { MoviesActionTypes } from '../models/MovieAction';
import { GET_MOVIES } from '../constants/actions';
import IAppState from '../models/AppState';

const initialState: IAppState = {
    movies: []
};
  
function rootReducer(state = initialState, action: MoviesActionTypes): IAppState {
    switch(action.type){
        case GET_MOVIES:
            return { movies: [...state.movies, ...action.payload] };
        default:
            return state;
    }
};
  
export default rootReducer;