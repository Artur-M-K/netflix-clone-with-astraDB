
const MovieInfo = ({onClick, movie}) => {
    console.log(movie)
    return ( 
        <div className="movie-info">
            <h1 className="movie-info-header">INFO</h1> 
            <div className="movie-info-container">
                <div className="movie-info-info">
                    <h1>{movie.title}</h1>
                    <hr />
                    <h2>Year: {movie.year}</h2>
                    <div className="movie-info-description">
                        <p>description:</p>
                        <p className="synopsis">{movie.synopsis}</p>
                    </div>
                    <div className="movie-info-time">
                    <p>Time: {Math.floor(movie.duration/60)}:{((movie.duration%60) <10)?'0'+(movie.duration%60):(movie.duration%60)} H</p>
                    </div>
                </div>
                <div className="movie-info-video">
                    <video src={movie.thumbnail} id="movie-video" type="video/mp4" controls muted="false"></video>
                    <button className="button cancel" onClick={onClick}>Cancel</button>
                </div>
            </div>
            
        </div>
     );
}
 
export default MovieInfo;