import {useEffect, useMemo, useState} from "react";
import {IMovie} from "../../interfaces/movieInterface";
import {movieService} from "../../services/movieService";
import Movie from "./Movie";
import {LoadingStatusEnum} from "../../enums/loadingStatusEnum";

export interface IProps{
    movies: IMovie[],
    loadingStatus:LoadingStatusEnum
}

const Movies = (props:IProps) => {
    const {movies,loadingStatus}=props

    const renderItems = useMemo(
        () =>
            movies.map((movie: IMovie) => (
                <Movie key={movie.id} movie={movie}/>
            )),
        [movies]
    );

    const content = useMemo(() => {
        const setContent = (loadingStatus: LoadingStatusEnum) => {
            switch (loadingStatus) {
                case LoadingStatusEnum.IDLE:
                    return movies?.length > 0 ? (
                        <ul >{renderItems}</ul>
                    ) : (
                        <div>There is no elements yet...</div>
                    );
                case LoadingStatusEnum.LOADING:
                    return <div>Loading ...</div>;
                case LoadingStatusEnum.ERROR:
                    return <div>Something went wrong</div>;
                default:
                    throw new Error('Unexpected loading process state');
            }
        };
        return setContent(loadingStatus);
    }, [renderItems, loadingStatus]);

    return content
};

export {Movies};