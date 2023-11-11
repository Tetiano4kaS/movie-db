import React, {useEffect, useState} from 'react';
import './App.css';
import {Movies} from "./components/MovieContainer/Movies";
import {movieService} from "./services/movieService";
import {IMovie} from "./interfaces/movieInterface";
import {LoadingStatusEnum} from "./enums/loadingStatusEnum";
import {Search} from "./components/SearchContainer/Search";
import {IGenre} from "./interfaces/genreInterface";
import {genreService} from "./services/genreService";
import {Genres} from "./components/GenreContainer/Genres";
import Pagination from "./Pagination/pagination";
import {ThemeSwitcher} from "./components/ThemeSwitcher/ThemeSwitcher";


function App() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [loadingStatus, setLoadingStatus] = useState<LoadingStatusEnum>(LoadingStatusEnum.IDLE);
    const [search, setSearch] = useState<string>('')
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [genresIds, setGenresIds] = useState<string>('')

    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1)

    const [theme, setTheme]=useState<boolean>(false)


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
        <div className="App" style={{backgroundColor: theme ? 'green' : 'darkblue'}}>
            <ThemeSwitcher setTheme={setTheme} theme={theme}/>
            <Search search={search} setSearch={setSearch} setGenresIds={setGenresIds}/>
            <Genres genres={genres} genresIds={genresIds} setGenresIds={setGenresIds}/>
            <Movies movies={movies} loadingStatus={loadingStatus}/>
            <Pagination totalPages={totalPages} currentPage={page} onPageChange={setPage} restartPagination={false}/>

        </div>
    );
}

export default App;
