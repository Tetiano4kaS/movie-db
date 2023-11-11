import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IRes} from "../types/IRes";
import {IMovieResponse} from "../interfaces/movieInterface";


export const movieService = {
    getAll: async (search: string,genresIds: string, page:string): Promise<IRes<IMovieResponse>> => await axiosService.get(search
        ? `${urls.search}?query=${search}`
        : urls.movieUrl+`?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genresIds}`)
}
