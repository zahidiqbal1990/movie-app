import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import fetcher from '../utils/fetcher';
import MovieContainer from './MovieContainer';
import { getMovies } from '../actions/index';

const Container = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        (async () => {
            const request =  await fetcher().get('https://api.themoviedb.org/4/list/1');
            console.log(request);
            dispatch(getMovies(request.data.results));
            setLoading(false);
        })();
    }, [dispatch]);
    
    if (loading) {
        return <h2>Loading...</h2>
    }
    
    return (<React.Fragment>
        <MovieContainer />
    </React.Fragment>);
};

export default Container;