import {IRes} from "../types/IRes";
import {IGenreResponse} from "../interfaces/genreInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

export const genreService={
    getByGenre: async (): Promise<IRes<IGenreResponse>> => await axiosService.get(urls.genreList)
}