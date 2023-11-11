import React from 'react';
import {IMovie} from "../../interfaces/movieInterface";
interface IProps {
    movie:IMovie
}

const Movie = ({movie}:IProps) => {
    const {title}=movie
    return (
        <div>
            <div>{title}</div>
        </div>
    );
};

export default Movie;