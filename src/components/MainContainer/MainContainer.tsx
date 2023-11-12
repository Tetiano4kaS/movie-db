import React, {useEffect, useState} from 'react';

import css from './MainContainer.module.css'
import {Movies} from "../MovieContainer/Movies";
import {movieService} from "../../services/movieService";
import {IMovie} from "../../interfaces/movieInterface";
import {LoadingStatusEnum} from "../../enums/loadingStatusEnum";
import {Search} from "../SearchContainer/Search";
import {IGenre} from "../../interfaces/genreInterface";
import {genreService} from "../../services/genreService";
import {Genres} from "../GenreContainer/Genres";
import Pagination from "../../Pagination/pagination";
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";


function MainContainer() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [loadingStatus, setLoadingStatus] = useState<LoadingStatusEnum>(LoadingStatusEnum.IDLE);
    const [search, setSearch] = useState<string>('')
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [genresIds, setGenresIds] = useState<string>('')
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1)
    const [theme, setTheme] = useState<boolean>(false)

    useEffect(() => {
        const getAllMovies = async () => {
            setLoadingStatus(LoadingStatusEnum.LOADING)
            try {
                const response = await movieService.getAll(search, genresIds, `${page}`);
                const movies = (await response).data.results;
                const moviePage = (await response).data.page;
                const movieTotalPages = (await response).data.total_pages;
                setPage(moviePage);
                setTotalPages(movieTotalPages);
                setMovies(movies);
                setLoadingStatus(LoadingStatusEnum.IDLE)
            } catch (e) {
                setLoadingStatus(LoadingStatusEnum.ERROR)
            }
        }
        getAllMovies()
    }, [search, genresIds, page])

    useEffect(() => {
        const getGenres = async () => {
            const response = await genreService.getByGenre();
            const genres = (await response).data.genres
            setGenres(genres)
        }
        getGenres()
    }, [])

    return (
        <div className={css.Main} style={{backgroundColor: theme ? 'whitesmoke' : 'darkgray'}}>
            <div className={css.Logo}>
            <img src={`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg`} alt={"icon"}/>
            <div className={css.Theme}><ThemeSwitcher setTheme={setTheme} theme={theme}/></div>
            </div>
            <div className={css.Search}><Search search={search} setSearch={setSearch} setGenresIds={setGenresIds}/>
            </div>
            <div><Genres genres={genres} genresIds={genresIds} setGenresIds={setGenresIds}/></div>
            <div><Movies movies={movies} loadingStatus={loadingStatus}/></div>
            <Pagination totalPages={totalPages} currentPage={page} onPageChange={setPage} restartPagination={false}/>
        </div>
    );
}

export default MainContainer;
