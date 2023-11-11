import {IGenre} from "../../interfaces/genreInterface";
import {Genre} from "./Genre";

interface IProps {
    genres: IGenre[],
    genresIds: string,
    setGenresIds: (value: string) => void
}

const Genres = ({genres,genresIds, setGenresIds}: IProps) => {
    return (
        <ul>
            {genres.map(genre => <Genre key={genre.id} genre={genre} genresIds={genresIds} setGenresIds={setGenresIds}/>)}
        </ul>
    );
};

export {Genres};