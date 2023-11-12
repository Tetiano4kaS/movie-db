import {IMovie} from "../../interfaces/movieInterface";
import React from "react";

import css from './Movie.module.css'
import {MovieRating} from "../Rating/MovieRating";

interface IProps {
    detail: IMovie
}

const Detail = ({detail}: IProps) => {
    const {title, popularity, vote_average, poster_path, overview, release_date} = detail
    return (
        <div className={css.Detail}>
            <h2>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`}/>
            <h5>Popularity: {popularity}</h5>
            <h5><MovieRating vote_average={vote_average}/></h5>
            <h5>Release date: {release_date}</h5>
            <p>{overview}</p>
        </div>
    );
};

export {Detail};