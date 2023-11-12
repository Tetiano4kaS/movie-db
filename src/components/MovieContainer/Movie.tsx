import React from 'react';

import {IMovie} from "../../interfaces/movieInterface";
import {useNavigate} from "react-router-dom";
import {MovieRating} from "../Rating/MovieRating";
import css from './Movie.module.css'

interface IProps {
    movie: IMovie
}

const Movie = ({movie}: IProps) => {
    const {title, id, poster_path, vote_average} = movie
    const navigate = useNavigate();

    return (
        <div className={css.Movie}>
            <div onClick={() => navigate(`/home/details/${id}`, {state: id})}>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`}/>
                <div>{title}</div>
                <MovieRating vote_average={vote_average}/>
            </div>
        </div>
    );
};

export default Movie;