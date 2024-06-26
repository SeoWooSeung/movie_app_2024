import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <Link
            to={{
                pathname: '/movie-detail',
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres,
                },
            }}
        >
            <div className="movie">
                <img src={poster} art={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie_title"> {title} </h3>
                    <h5 className="year"> {year} </h5>
                    <ul className="genres">
                        {genres.map((genres, index) => (
                            <li key={index} className="genres_genres">
                                {genres}
                            </li>
                        ))}
                    </ul>
                    <p className="movie_summary">
                        {' '}
                        {summary.slice(0, 180)}
                        ...
                    </p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
