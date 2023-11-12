const baseURL = 'https://api.themoviedb.org/3'

const urls = {
    movieUrl: '/discover/movie',
    search: '/search/movie',
    genreList: '/genre/movie/list',
    byId: (id: string) => `/movie/${id}`
}

export {baseURL, urls}