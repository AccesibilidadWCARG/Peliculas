import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img alt="posterImage" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <a href="#" class="pagination-link" id="pagination-link"></a>
                <a class="pagination-link" id="pagination-link"></a>
                <iframe src="/MOVIE.png" tabindex="-1" width="10" height="10"></iframe>
                <label className="list__title" for="field1">Categories</label>
                <select name="Comedy" required style={{textDecoration:"Categories",color:"black"}}>
                <option value="0" aria-label="categories-link">Comedy:</option>
                <option value="1">Horror</option>
                <option value="2">Series</option>
                <option value="3">Drama</option>
                <option value="4">Thriller</option>
                <option value="5">Romantic</option>
                </select>
                <p>List of the Categories <blink>=====></blink></p>
                <MovieList />
            </div>
        </>
    )
}

export default Home