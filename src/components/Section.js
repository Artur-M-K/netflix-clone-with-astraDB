import React, {useState, useEffect} from 'react';
import Card from './Card';

const Section = ({genre}) => {

    const [movies, setMovies] = useState(null);
    const [pageState, setPageState] = useState(null);

   const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getMovies", {
        method: 'POST',
        body: JSON.stringify({genre: genre, pageState: pageState})
    });
    const responseBody = await response.json();
    setMovies(responseBody.data.movies_by_genre.values);
    setPageState(responseBody.data.movies_by_genre.pageState);
    console.log(pageState)
    
  }

  useEffect (() => {
    fetchData()
  }, [])
    return ( 
        <>
        <h1 id={genre}>{genre}</h1>
            {movies && (
                <div className="movie-section">
                    {movies.map((movie, index) => (
                        <Card key={index} movie={movie} />
                    ))}
                    <div 
                        className="more-button"
                        onClick={() => {
                            setPageState(pageState)
                            fetchData()
                        }}
                    >
                        <i className="fas fa-angle-right"></i>
                    </div>
                </div>
            )}
        </>
     );
}
 
export default Section;