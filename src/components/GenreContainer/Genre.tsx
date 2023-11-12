import {IGenre} from "../../interfaces/genreInterface";
import css from './Genre.module.css'

interface IProps {
    genre: IGenre
    genresIds: string,
    setGenresIds: (value: string) => void
}

const Genre = ({genre, genresIds, setGenresIds}: IProps) => {
    const {name, id} = genre;

    const handleGenresId = () => {
        if (genresIds.includes(String(id))) {
            const updatedGenresIds = genresIds.replace(new RegExp(`${id},`), "");
            setGenresIds(updatedGenresIds)
            return
        }
        setGenresIds(`${genresIds}${id},`)

    }
    return (
        <div className={css.GenreItem}>
            <div style={{color: genresIds.includes(String(id)) ? 'darkolivegreen' : 'darkred'}}
                 onClick={() => handleGenresId()}>{name}</div>
        </div>
    );
};

export {Genre};