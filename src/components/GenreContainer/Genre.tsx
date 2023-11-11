import {IGenre} from "../../interfaces/genreInterface";

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
        <div>
            <div style={{color: genresIds.includes(String(id)) ? 'green' : 'red'}}
                 onClick={() => handleGenresId()}>{name}</div>
        </div>
    );
};

export {Genre};