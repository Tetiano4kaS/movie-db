import {useParams} from "react-router-dom";

import {IMovieResponse} from "../../interfaces/movieInterface";
import {useEffect, useState} from "react";
import {movieService} from "../../services/movieService";
import {Detail} from "./Detail";

const MovieDetails = () => {
    const {id} = useParams()
    const [details, setDetails] = useState(null);
    useEffect(() => {
            const movieDetails = async () => {
                const response = await movieService.getById(`${id}`);
                const details = (await response).data as IMovieResponse;
                console.log(details)
                setDetails(details)
            }
            movieDetails();
        }, [id]
    )
    return (
        <div>
            {details && <Detail detail={details}/>}
        </div>
    );
};

export {MovieDetails};