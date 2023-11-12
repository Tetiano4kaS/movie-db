import React, {FC} from 'react';
import StarRatings from 'react-star-ratings';


interface IProps {
    vote_average?: number;
    starDimension?: string
}

const MovieRating: FC<IProps> = ({vote_average, starDimension = '20px'}) => {
    if (typeof vote_average === 'undefined') {
        return <div>No rating available</div>;
    }
    return (
        <StarRatings
            rating={vote_average / 2}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
            starDimension={starDimension}
        />
    );
};


export {MovieRating};